import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireObject } from '@angular/fire/database';
import { AngularFireDatabase } from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import { Router } from '@angular/router';
import {count, finalize} from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import {readAndCompressImage} from 'browser-image-resizer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  percentagebar: number;

  config={
    quality:0.7,
    width:800,
    height:600
  }

  picture:string="C:\Users\AALUGANI\Downloads\logo.jpg";
  constructor(private auth:AuthService,private db:AngularFireDatabase,private route:Router,private storage:AngularFireStorage) { }

  ngOnInit() {
  }
  Submit(f:NgForm)
  {
    const{name,email,username,country,bio,password}=f.form.value;
    this.auth.signUp(username,password).then((user)=>{
      console.log(user);
      this.db.object(`/users/${user.user.uid}`).set({
        name:name,
        email:email,
        InstaUserName:username,
        country:country,
        bio:bio,
        picture:this.picture
      });
    }).then(()=>{this.route.navigateByUrl('/')}).catch((error)=>console.log(error));
  }
  async uploadimage(event)
  {
    const file_=event.target.files[0];
    const compressedimage=await readAndCompressImage(file_,this.config)
    let uploadprocess=this.storage.upload(file_.name,compressedimage);
    let ref=this.storage.ref(file_.name);
    uploadprocess.percentageChanges().subscribe((percentage:number)=>{
      this.percentagebar=percentage;
    })
    
    uploadprocess.snapshotChanges().pipe(finalize(()=>{
      console.log("Successful upload");
      ref.getDownloadURL().subscribe((url)=>
      {
        console.log(url);
        this.picture=url;
      })
    })).subscribe();
  } 


}
