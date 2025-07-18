import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  formStep = 1; // 1 = Contact form, 2 = Chat window

  onFormSubmit() {
    this.formStep = 2;
  }

}
