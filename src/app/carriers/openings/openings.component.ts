import { Component } from '@angular/core';

@Component({
  selector: 'app-current-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.css']
})
export class CurrentOpeningsComponent {
  openings = [
    {
      title: 'Angular Developer',
      location: 'Bangalore / Remote',
      type: 'Full-Time',
      description: 'We are looking for skilled Angular developers to build modern, scalable, and responsive front-end applications.',
      skills: ['Angular 14+', 'TypeScript', 'RxJS', 'REST APIs', 'Bootstrap']
    },
    {
      title: 'Full Stack Developer (Angular + .NET Core)',
      location: 'Bangalore',
      type: 'Full-Time',
      description: 'Join our core development team to build and maintain enterprise-grade web applications using Angular and .NET Core.',
      skills: ['Angular', '.NET Core', 'SQL Server', 'Entity Framework', 'Azure']
    },
    {
      title: 'Manual Tester',
      location: 'Hyderabad / Remote',
      type: 'Contract',
      description: 'Responsible for test case design, execution, and reporting bugs to ensure product quality before release.',
      skills: ['Manual Testing', 'Bug Reporting', 'Test Case Documentation', 'Agile Process']
    },
    {
      title: 'Cloud Engineer',
      location: 'Remote',
      type: 'Full-Time',
      description: 'Deploy, monitor, and optimize cloud-based infrastructure for Misard products and client projects.',
      skills: ['Azure / AWS', 'CI/CD Pipelines', 'Monitoring Tools', 'Infrastructure as Code']
    },
    {
      title: 'Network Engineer',
      location: 'On-Site (Bangalore Office)',
      type: 'Full-Time',
      description: 'Manage and secure Misard’s internal network systems, VPNs, and enterprise connectivity solutions.',
      skills: ['LAN/WAN', 'Firewall Management', 'VPN Setup', 'Network Troubleshooting']
    },
    {
      title: '.NET Core Developer',
      location: 'Bangalore / Remote',
      type: 'Full-Time',
      description: 'Develop robust backend services and APIs using .NET Core for our enterprise applications.',
      skills: ['.NET Core', 'C#', 'Web API', 'LINQ', 'SQL Server']
    },
    {
      title: 'Team Leader – Software Projects',
      location: 'Bangalore',
      type: 'Full-Time',
      description: 'Lead a team of developers, manage sprint planning, and ensure timely delivery of quality code.',
      skills: ['Team Management', 'Agile Methodologies', 'Code Reviews', 'Client Interaction']
    },
    {
      title: 'Project Manager – Tech Division',
      location: 'Hybrid (Bangalore)',
      type: 'Full-Time',
      description: 'Oversee planning, execution, and delivery of projects. Work closely with clients and development teams.',
      skills: ['Project Planning', 'Stakeholder Communication', 'Risk Management', 'Delivery Oversight']
    }
  ];
}
