// src/app/components/benefits/benefits.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  icon: string;
  title: string;
  description: string;
  background?: string; // Optional: For background color or image
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      icon: 'fas fa-lock',
      title: 'Enhanced Security',
      description: 'Protect your communications from phishing and spoofing attempts.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Build Trust',
      description: 'Establish credibility with your recipients by ensuring your emails are genuine.'
    },
    {
      icon: 'fas fa-ban',
      title: 'Prevent AI Misuse',
      description: 'Stop bots and AI from impersonating you, safeguarding your personal and professional reputation.'
    },
    {
      icon: 'fas fa-check-circle',
      title: 'Compliance Ready',
      description: 'Meet industry standards for email authentication and data integrity.'
    },
    {
      icon: 'fas fa-user-friends',
      title: 'User-Friendly Experience',
      description: 'Enjoy a seamless and automated verification process without disrupting your workflow.'
    }
  ];
}