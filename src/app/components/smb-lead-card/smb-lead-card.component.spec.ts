import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmbLeadCardComponent } from './smb-lead-card.component';

describe('SmbLeadCardComponent', () => {
  let component: SmbLeadCardComponent;
  let fixture: ComponentFixture<SmbLeadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmbLeadCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmbLeadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
