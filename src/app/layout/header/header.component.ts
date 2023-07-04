import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:string=null;
  constructor(private route:Router,private auth:AuthService) { 

  }

  ngOnInit() {
    this.auth.getUser().subscribe(
      user=>{
        if(user==null)
        {
          this.email=null;
          return;
        }
        console.log(user);
        this.email=user.email;
      }
    )
  }
  logOut()
  {
    console.log("Logout");
    this.email=null;
    this.auth.signOut();
  }

}
