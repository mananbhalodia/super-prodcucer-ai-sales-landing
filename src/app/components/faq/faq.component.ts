// src/app/components/faq/faq.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
  active?: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs: FAQ[] = [
    {
      question: 'How does human verification work?',
      answer: 'Our service uses unique signatures for each email you send, ensuring that only a real person can authenticate the message.'
    },
    {
      question: 'Is my private key stored anywhere?',
      answer: 'No, your private keys are generated and stored locally within the Chrome extension, ensuring maximum security.'
    },
    {
      question: 'Can I verify past emails?',
      answer: 'Yes, each signed email includes a verification link that you can use to authenticate it at any time.'
    },
    {
      question: 'Which email clients are supported?',
      answer: 'Currently, our extension supports major webmail providers like Gmail and Outlook. We\'re continuously adding more.'
    },
    {
      question: 'Is there a free plan available?',
      answer: 'Yes, we offer a free tier with essential features. You can upgrade to premium for advanced functionalities.'
    }
  ];

  toggleFaq(faq: FAQ) {
    faq.active = !faq.active;
  }
}