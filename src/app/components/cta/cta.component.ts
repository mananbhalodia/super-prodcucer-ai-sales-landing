// src/app/components/cta/cta.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent {
  cta = {
    title: 'Secure Your Emails Today',
    description: 'Join thousands of professionals who trust our service to keep their email communications authentic and secure.',
    buttonText: 'Start Verifying Now',
    buttonLink: '#'
  };
}