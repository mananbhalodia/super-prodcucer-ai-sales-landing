// src/app/components/features/features.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      icon: 'fas fa-user-check',
      title: 'Human Verification',
      description: 'Authenticate your identity with each email to prevent AI or bot impersonation.'
    },
    {
      icon: 'fas fa-plug',
      title: 'Easy Integration',
      description: 'Seamlessly integrates with your existing email platforms via our Chrome extension.'
    },
    {
      icon: 'fas fa-signature',
      title: 'Secure Signature Embedding',
      description: 'Embed unique signatures into every email, ensuring authenticity and integrity.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Real-Time Verification',
      description: 'Recipients can instantly verify the sender\'s authenticity with a single click.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Privacy-Focused',
      description: 'Your private keys remain on your device, guaranteeing your data stays secure.'
    }
  ];
}