import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-projects',
  templateUrl: './company-projects.component.html',
  styleUrls: ['./company-projects.component.css']
})
export class CompanyProjectsComponent implements OnInit, OnDestroy {
  reviews = [
    { text: "Building Nyayabharth gave me confidence to face client-level challenges.", author: "Suresh Kumar, Trainee Developer at Misard" },
    { text: "Agrivikas was the most satisfying experience of my career.", author: "Praveen, Full-Stack Trainee" },
    { text: "SmartLife helped me master Angular and Firebase integration.", author: "Mounika, UI Intern" },
    { text: "The mentorship here is unmatched. Every review shaped me.", author: "Vikram, Backend Developer" },
    { text: "We coded. We deployed. We celebrated success as a team.", author: "Kavya, Trainee Engineer" },
    { text: "Capacitor integration in SmartLife made me confident in hybrid apps.", author: "Ramesh, Mobile Developer" },
    { text: "I never thought I could contribute to a legal tech product. Nyayabharth changed that.", author: "Harika, LegalTech Dev" },
    { text: "Weekly feedback and daily standups boosted my discipline.", author: "Anil, Junior Developer" },
    { text: "First project and already learned Agile and Azure deployment!", author: "Nisha, Project Trainee" },
    { text: "Misard is where talent meets opportunity.", author: "Ravi, Node.js Developer" },
    { text: "I saw real-time results of my code in Agrivikas. That’s magical.", author: "Meena, Trainee Coder" },
    { text: "From basic HTML to GitHub CI/CD, I learned everything here.", author: "Sai, Frontend Intern" },
    { text: "A perfect blend of training and real-world exposure.", author: "Deepika, Angular Trainee" },
    { text: "Solving real-life problems gave me unmatched confidence.", author: "Rohit, Software Developer" },
    { text: "The best part? Mentorship during client interviews!", author: "Pavani, Full-Stack Trainee" },
    { text: "I worked on live data APIs during my training.", author: "Arjun, .NET Intern" },
    { text: "My resume speaks volumes now — all thanks to project experience here.", author: "Sneha, Graduate Trainee" },
    { text: "From clueless beginner to confident deployable dev.", author: "Rahul, Project Associate" },
    { text: "Their post-deployment support helped me succeed in my first job.", author: "Sravani, Misard Alumnus" },
    { text: "The real-world experience I gained was worth more than any degree.", author: "Sandeep, Full-Stack Developer" }
  ];

  currentIndex = 0;
  intervalId: any;

  get currentReview() {
    return this.reviews[this.currentIndex];
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    }, 2000); // 2 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}