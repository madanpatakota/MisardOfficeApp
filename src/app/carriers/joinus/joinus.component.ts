import { Component, OnInit } from '@angular/core';
declare const AOS: any;

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {
  submitted = false;

  formData = {
    fullName: '',
    email: '',
    education: '',
    skillset: '',
    startDate: ''
  };

  resumeFile: File | null = null;

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.resumeFile = file;
    }
  }

  onSubmit() {
    if (this.resumeFile) {
      this.submitted = true;
      console.log("Form Submitted:", this.formData);
    }
  }

  ngOnInit(): void {
    AOS.init({ duration: 800, once: true });
  }
}
