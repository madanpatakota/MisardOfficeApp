import { Component } from '@angular/core';

@Component({
  selector: 'app-training-program',
  templateUrl: './training-program.component.html',
  styleUrls: ['./training-program.component.css']
})
export class TrainingProgramComponent {
  highlights: string[] = [
    '4-Month Full-Stack Training',
    'Daily Assignments & Weekly Mock Interviews',
    'Real-time Project Work',
    'Career Support & Resume Building',
    'Final Evaluation for Client Deployment or Internal Projects',
    '1-on-1 Mentorship with Industry Experts',
    'Access to Recorded Sessions & Study Materials',
    'Training in Angular, .NET Core, Azure & GitHub',
    'Weekly Code Reviews & Feedback',
    'Soft Skills & Communication Training',
    'Daily Standups to Build Team Collaboration',
    'Deployment Practice with Azure & CI/CD Pipelines',
    'Git & Version Control with Real Branching Models',
    'Exposure to Agile & Scrum Project Methodologies'
  ];
}
