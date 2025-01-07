import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smb-lead-card',
  standalone: true,
  templateUrl: './smb-lead-card.component.html',
  styleUrls: ['./smb-lead-card.component.css']
})
export class SmbLeadCardComponent {
  @Input() name: string = 'Business Owner';
  @Input() role: string = 'Local Business Owner';
  @Input() email: string = 'owner@business.com';
  @Input() tag: string = 'Lead';
  @Input() profileImage: string = 'assets/default-profile.png';

  /**
   * This new property indicates how long ago
   * the business was formed (e.g., "0 days", "3 days", "1 week", etc.).
   *
   * For example: "3 days", "1 week", "2 weeks", "1 month".
   */
  @Input() formedSince: string = '0 days';
}