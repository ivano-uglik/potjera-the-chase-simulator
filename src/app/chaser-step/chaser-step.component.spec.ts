import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaserStepComponent } from './chaser-step.component';

describe('ChaserStepComponent', () => {
  let component: ChaserStepComponent;
  let fixture: ComponentFixture<ChaserStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaserStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaserStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
