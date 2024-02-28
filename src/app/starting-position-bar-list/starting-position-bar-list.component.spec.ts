import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingPositionBarListComponent } from './starting-position-bar-list.component';

describe('StartingPositionBarListComponent', () => {
  let component: StartingPositionBarListComponent;
  let fixture: ComponentFixture<StartingPositionBarListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartingPositionBarListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StartingPositionBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
