import { Component, OnInit } from '@angular/core';
declare var AOS: any;

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  testimonials = [
    { message: "I cracked my first interview just by following Misard’s GitHub and YouTube. It's the best place to start your IT journey!", author: "Sai Teja, Frontend Developer" },
    { message: "I loved the structured learning – mock questions, real project code, and free PDFs all helped me a lot.", author: "Anjali M, .NET Core Trainee" },
    { message: "Their GitHub content is gold! Especially for freshers like me.", author: "Rohit, B.Tech Final Year" },
    { message: "YouTube classes made me feel like I'm in a real bootcamp!", author: "Divya, Career Switcher" },
    { message: "Misard’s mock interviews helped me clear 3 job rounds confidently.", author: "Prakash J, UI Developer" },
    { message: "The real-time projects were super useful for my resume.", author: "Bhavani, Full Stack Student" },
    { message: "PDF notes and cheat sheets saved me during interviews.", author: "Anudeep, Fresher" },
    { message: "Misard's teaching is practical, crisp and always updated!", author: "Niharika, Aspiring Developer" },
    { message: "All my friends are also following Misard now — it’s that good!", author: "Vishal, MCA Student" },
    { message: "Perfect place for students preparing for service-based companies.", author: "Naveen, Tech Support to Developer" },
    { message: "Daily assignments improved my consistency big time.", author: "Karthik, Recent Graduate" },
    { message: "The Angular explanations are better than any course I paid for!", author: "Priya, Junior Developer" },
    { message: "I completed all 3 sample projects from GitHub and got shortlisted.", author: "Kiran M, Fresher" },
    { message: "Live coding examples helped me fix my basics strongly.", author: "Deepika, React Learner" },
    { message: "Clean explanations and perfect roadmap to follow.", author: "Mahesh, QA to Developer" },
    { message: "I love the Telugu explanations on YouTube!", author: "Hemanth, Final Year B.Tech" },
    { message: "GitHub repos are perfect for understanding real-world code.", author: "Monica, Web Designer" },
    { message: "Learnt Angular + .NET Core in 4 months thanks to Misard.", author: "Jayanth, Bootcamp Attendee" },
    { message: "Got a remote job using only Misard materials!", author: "Ravi Kumar, Remote Developer" },
    { message: "Great support even after course — really appreciated!", author: "Sravani, Misard Alumni" },
    { message: "Structured videos, real-time project, and Azure — amazing trio!", author: "Lokesh, Fresher" },
    { message: "The Azure CI/CD concepts were taught clearly and practically.", author: "Akhila, Cloud Intern" },
    { message: "Simple code explanations helped me overcome fear of C#.", author: "Ritesh, Java to .NET Shift" },
    { message: "Everything in one place: GitHub, YouTube, and PDFs.", author: "Mounika, Career Switcher" },
    { message: "Angular Material table filtering made easy with Misard!", author: "Vinay, UI Intern" },
    { message: "Perfect for people who want real content not just theory.", author: "Meghana, Learning Angular" },
    { message: "Got placed in MNC with help from deployment videos!", author: "Rohit, Entry-Level Dev" },
    { message: "Even my manager appreciated the project I built from GitHub!", author: "Satish, Junior Developer" },
    { message: "Super focused explanations. No time waste!", author: "Swapna, Self-Learner" },
    { message: "I recommend Misard to all freshers preparing for IT roles.", author: "Harsha, BSc Computer Science" },
    { message: "One of the best free resources in the Indian dev space.", author: "Ankita, Intern to Full-time" },
    { message: "Thank you Misard for helping me build confidence!", author: "Rajesh, Career Gap" },
    { message: "I didn’t expect such clarity in YouTube videos!", author: "Sindhu, MCA Graduate" },
    { message: "I started as a backend developer but now I can build UI too.", author: "Sujith, .NET Developer" },
    { message: "The real-time project tracker PDF is awesome!", author: "Tejas, Full Stack Trainee" },
    { message: "The LinkedIn resume tips actually got me interview calls.", author: "Shalini, Job Seeker" },
    { message: "Love the daily task structure. Keeps me accountable.", author: "Yashwanth, Consistent Learner" },
    { message: "I followed Misard’s roadmap and built 3 strong mini-projects.", author: "Gautham, Project Intern" },
    { message: "Got internship by showing Misard’s GitHub commits!", author: "Anusha, Engineering Student" },
    { message: "CI/CD section is underrated — super helpful!", author: "Naveena, Azure Learner" },
    { message: "Daily code reviews in mock videos were very effective.", author: "Imran, Trainee" },
    { message: "I learnt Git properly only after watching Misard!", author: "Aarti, BCA Final Year" },
    { message: "They teach like a real-time senior guiding juniors.", author: "Manohar, Career Switch" },
    { message: "Started learning just basics but now deploying apps!", author: "Sandhya, First Job" },
    { message: "Simple PDFs + videos = excellent combo.", author: "Krishna, Quick Learner" },
    { message: "I used the SQL questions in my interview — they worked!", author: "Sneha, Database Fresher" },
    { message: "Felt like a real bootcamp without spending 40k+", author: "Varun, Self-Taught" },
    { message: "This is the only resource I recommend to juniors now.", author: "Sreeja, Software Engineer" },
    { message: "Videos, code, and even doubt support — best combo!", author: "Nikhil, Angular Intern" },
    { message: "Thanks Misard, I'm now a full-time developer!", author: "Lavanya, Placed in Bangalore" }
  ];


  currentIndex = 0;

  ngOnInit(): void {
    AOS.init();
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
    }, 2000); // auto-scroll every 2 seconds
  }

  showDownloadAlert() {
    alert('Please connect with our support team to access the PDF download.');
  }
  showAlert = false;
  showPodcastAlert = false;
}
