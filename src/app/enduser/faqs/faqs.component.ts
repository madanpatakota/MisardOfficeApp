import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  faqs = [
    {
      question: 'What is the mission of our company?',
      answer: 'Our mission is to provide innovative solutions that help businesses thrive in the digital age.'
    },
    {
      question: 'What sets our company apart from others?',
      answer: 'We differentiate ourselves through our commitment to quality, customer satisfaction, and continuous improvement.'
    },
    {
      question: 'How long has our company been in business?',
      answer: 'We have been in business for over a decade, serving clients from various industries around the globe.'
    },
    {
      question: 'What industries do we specialize in?',
      answer: 'We specialize in providing services to industries such as technology, healthcare, finance, and e-commerce.'
    },
    {
      question: 'What types of services do we offer?',
      answer: 'We offer web development, mobile app development, cloud computing, IT consulting, and more.'
    },
    {
      question: 'Do we provide custom solutions?',
      answer: 'Yes, we tailor our solutions to meet the unique needs of each client through custom development and consulting.'
    },
    {
      question: 'How do we ensure quality in our services?',
      answer: 'We follow industry best practices, perform rigorous testing, and continually improve our processes.'
    },
    {
      question: 'What is our approach to client communication?',
      answer: 'We maintain open and transparent communication through updates, reviews, and responsive support.'
    },
    {
      question: 'Are we open to partnerships?',
      answer: 'Yes, we welcome strategic partnerships to deliver even greater value to clients.'
    },
    {
      question: 'How can I get started with your company?',
      answer: 'You can contact us via our website or speak to our sales team. We’ll guide you based on your needs.'
    }
  ];
}
