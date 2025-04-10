**Progress on Development Goals:**  
Over the past year, I’ve worked on a mix of technical projects and system improvements, focusing on making tools faster, more secure, and easier to use. Here’s a breakdown of what I’ve accomplished:  

- **File Upload & SharePoint Integration (.NET):**  
  - Built a **bulk file upload tool** that lets users upload hundreds of files at once without slowing down. To make things even smoother, I added a feature that **automatically saves file details** (like who uploaded it, file type, and date) directly to SharePoint. This cut down the number of times the system had to “talk” to SharePoint, making uploads quicker and less error-prone.  

- **Custom File Viewer (Angular):**  
  - Created a simple, fast tool from scratch that lets users preview files (documents, images, etc.) right in their browser—no extra software needed. It works hand-in-hand with the upload tool, so everything feels seamless.  

- **Modernizing Old Systems:**  
  - **Legacy Libraries:** Updated **14 old C++ and .NET libraries** so they work smoothly on both Windows and Linux machines. I also rebuilt their build and release pipelines (think of it like setting up an assembly line for code) to make updates faster and more reliable.  
  - **SWIG & Containers:** Used a tool called SWIG to convert tricky C++ code into something .NET can understand. Then, I packed these updated libraries into **Docker containers** (like shipping code in standardized boxes) so teams worldwide can deploy them without headaches.  

- **Secure API Access (Apigee):**  
  - Built a secure “gateway” so external partners can safely use Micron’s Azure services. To keep things simple, I added a script inside the gateway that **automatically creates and refreshes access tokens**, so users don’t have to manually manage logins.  

- **Network Dashboard (Angular/.NET):**  
  - Led the team in building a dashboard that lets the network team track routers, servers, and other gear across all Micron sites. It includes login security, automated email alerts for outages, and lets users control who sees what based on their role.  

- **RHEL9 & Perl Upgrades:**  
  - As part of upgrading to RHEL9, I installed Perl 5.32.1 and rebuilt **20+ Perl libraries** to ensure old scripts still work flawlessly on the new system. This kept critical tools running without disruption.  

- **On-Call Support:**  
  - Joined the on-call rotation to fix urgent bugs—like speeding up slow uploads or patching login issues in the dashboard. It taught me a lot about troubleshooting under pressure!  

**Support I Need:**  
- **Mentorship:** I’d love guidance from someone experienced in **cloud tech** (like Kubernetes or Azure) to help me design bigger, scalable systems.  
- **New Challenges:** I thrive when building things from scratch—whether it’s a cloud tool or an AI feature. More projects like this would help me grow.  
- **Team Collaboration:** Working closely with DevOps or security teams could help me improve how we handle containers and APIs.  

**Changes to My Goals:**  
Looking ahead, I want to:  
- **Focus on Cloud & Security:** Dive deeper into securing cloud systems and making them work faster, especially for tools like the network dashboard.  
- **Mentor Others:** Share what I’ve learned about updating old code (like SWIG conversions) or automating pipelines with junior team members.  
- **Build from the Ground Up:** Tackle more projects where I design solutions from day one—maybe even integrating AI to predict issues before they happen.  

**Why This Matters:**  
I’m aiming to grow into a role where I can blend hands-on coding with big-picture thinking—keeping systems reliable while pushing for innovation. Whether it’s fixing a bug at 2 a.m. or designing a new tool, I want to make sure my work helps teams do their jobs better.  

Let me know if you’d like me to expand on any part! 😊








**Individual Performance Goals:**  
This fiscal year, I’ve focused on strengthening my grasp of **high-level design (HLD)** concepts like scalability strategies (horizontal/vertical scaling, sharding), fault tolerance (redundancy, circuit breakers), and distributed system principles (CAP theorem, consistency models). I’ve also deepened my understanding of **low-level design (LLD)**, including schema optimization (indexing, normalization), code modularity (SOLID principles, design patterns), and Spring Boot best practices (dependency injection, RESTful APIs, JPA/Hibernate). By bridging these areas, I aim to contribute to systems that are both resilient at scale and maintainable at the code level, reducing technical debt and improving team efficiency.  

**Development Goals & Support Needed:**  
Moving forward, I’d like to refine my ability to balance trade-offs in HLD (e.g., availability vs. consistency) and enhance LLD precision (e.g., advanced query tuning, reactive programming with Spring Boot). To achieve this, mentorship on real-world architectural challenges and exposure to cloud-native tools (e.g., Kubernetes, distributed tracing) would be invaluable. I’m also keen to collaborate on cross-team initiatives to align my technical growth with broader organizational goals—whether optimizing existing systems or contributing to scalable new solutions. Let’s discuss how I can best support our roadmap!  

---  
This version balances clarity with approachability, avoids jargon-heavy lists, and keeps the focus on your *understanding* of concepts rather than project specifics. Let me know if you’d like further tweaks! 😊






# SNS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
