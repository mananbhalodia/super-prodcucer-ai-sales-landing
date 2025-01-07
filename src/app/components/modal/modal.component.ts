// src/app/components/modal/modal.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  isVisible = false;
  timeoutId: any;

  ngOnInit() {
    // Show modal after 10 seconds
    this.timeoutId = setTimeout(() => {
      this.isVisible = true;
    }, 10000);
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  close() {
    this.isVisible = false;
  }
}