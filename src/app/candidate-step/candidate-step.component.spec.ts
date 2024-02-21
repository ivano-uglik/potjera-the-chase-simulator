import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateStepComponent } from './candidate-step.component';

describe('CandidateStepComponent', () => {
  let component: CandidateStepComponent;
  let fixture: ComponentFixture<CandidateStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidateStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandidateStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
