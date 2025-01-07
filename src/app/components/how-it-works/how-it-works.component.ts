// src/app/components/how-it-works/how-it-works.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css']
})
export class HowItWorksComponent {
  steps: Step[] = [
    {
      icon: 'fas fa-download',
      title: 'Install the Extension',
      description: 'Add our Chrome extension to your browser to start securing your emails.'
    },
    {
      icon: 'fas fa-pencil-alt',
      title: 'Compose Your Email',
      description: 'Write your email as usual; our extension handles the verification process.'
    },
    {
      icon: 'fas fa-sign',
      title: 'Automatic Signing',
      description: 'Each email is hashed and signed with a unique key pair before sending.'
    },
    {
      icon: 'fas fa-link',
      title: 'Recipient Verification',
      description: 'Recipients can verify your email\'s authenticity through a secure link.'
    }
  ];
}