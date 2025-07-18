import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  submitted = false;

  onSubmit() {
    this.submitted = true;

    // optionally reset after delay
    setTimeout(() => {
      this.submitted = false;
    }, 3000);
  }

}
