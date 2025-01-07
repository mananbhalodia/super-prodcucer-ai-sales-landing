// src/app/components/testimonials/testimonials.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [
    {
      quote: "Since implementing this service, I've had peace of mind knowing my emails are truly mine. No more worrying about impersonation.",
      name: "Rajesh Gupta",
      role: "CEO of NextGen Financial Services Inc.",
    },
    {
      quote: "The Chrome extension is incredibly intuitive. Verifying my emails feels effortless and adds a layer of trust with my clients.",
      name: "David Wilson",
      role: "Freelance Writer",
    },
    {
      quote: "Our team loves the added security. It enhances our professional communications and reassures our partners.",
      name: "Ana Lopez",
      role: "Marketing Manager",
    }
  ];

  currentIndex = 0;
  interval: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prev() {
    this.currentIndex = (this.currentIndex === 0) ? this.testimonials.length - 1 : this.currentIndex - 1;
  }

  next() {
    this.currentIndex = (this.currentIndex === this.testimonials.length - 1) ? 0 : this.currentIndex + 1;
  }

  startAutoSlide() {
    this.interval = setInterval(() => {
      this.next();
    }, 10000);
  }

  stopAutoSlide() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}