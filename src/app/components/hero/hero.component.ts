// src/app/components/hero/hero.component.ts
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailService } from '../../services/email.service';
import { SmbLeadCardComponent } from '../smb-lead-card/smb-lead-card.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FormsModule, CommonModule, SmbLeadCardComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  email: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  isSubmitting: boolean = false;

  @ViewChild('emailForm') emailForm!: NgForm;
  @ViewChild('successMessageDiv', { static: false }) successMessageDiv!: ElementRef;
  @ViewChild('errorMessageDiv', { static: false }) errorMessageDiv!: ElementRef;

  constructor(private emailService: EmailService, private http: HttpClient) {}

  leads = [
    {
      name: 'Manan Bhalodia',
      role: 'Local Business Owner',
      email: 'manan@local.com',
      tag: 'New Lead',
      profileImage: 'assets/profile_images/1.jpeg',
      formedSince: '3 days'
    },
    {
      name: 'Marcus Fields',
      role: 'Senior Care Center Owner',
      email: 'marcus@seniorcare.com',
      tag: 'Lead',
      profileImage: 'assets/profile_images/7.jpg',
      formedSince: '1 week'
    },
    {
      name: 'Hena Patel',
      role: 'Restaurant Owner',
      email: 'hena@restaurant.com',
      tag: 'Verified',
      profileImage: 'assets/profile_images/3.jpeg',
      formedSince: '2 weeks'
    },
    {
      name: 'Josh Evans',
      role: 'Dental Clinic Owner',
      email: 'josh@dental.com',
      tag: 'Lead',
      profileImage: 'assets/profile_images/2.jpeg',
      formedSince: '3 days'
    },
    {
      name: 'Sid Sharma',
      role: 'Gym Owner',
      email: 'sid@localgym.com',
      tag: 'New Lead',
      profileImage: 'assets/profile_images/4.jpeg',
      formedSince: '1 day',
    },
    {
      name: 'Steve Johnson',
      role: 'Auto Repair Shop Owner',
      email: 'steve@repair.com',
      tag: 'Qualified',
      profileImage: 'assets/profile_images/6.jpg',
      formedSince: '1 month'
    },
    {
      name: 'Pratyush Singh',
      role: 'Local Accountant',
      email: 'pratyush@accounting.com',
      tag: 'Lead',
      profileImage: 'assets/profile_images/5.jpeg',
      formedSince: '2 weeks'
    },
  ];

  /**
   * Handles email signup submission.
   */

  onSubmitEmail() {
    if (!this.email) return;

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    // Prepare the request body (matching the curl example)
    const requestBody = {
      email: this.email,
      waitlist_id: 23917
    };

    // Optional headers (Angular defaults to JSON if body is an object)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    // POST request to https://api.getwaitlist.com/api/v1/signup
    this.http.post<string>(
      'https://api.getwaitlist.com/api/v1/signup',
      requestBody,
      { headers }
    ).subscribe({
      next: (response) => {
        console.log('Email submission successful:', response);
        this.successMessage = "You'll hear from us soon!";
        this.email = '';
      },
      error: (error) => {
        console.error('Email submission failed:', error);
        this.errorMessage = 'Sign up unsuccessful, please try again or reach out to support@superproducer.ai';
        this.isSubmitting = false;
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
}
}