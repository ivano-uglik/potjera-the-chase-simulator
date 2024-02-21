import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarListComponent } from './bar-list/bar-list.component';
import { CandidateStepComponent } from './candidate-step/candidate-step.component';
import { ChaserStepComponent } from './chaser-step/chaser-step.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BarListComponent,
    CandidateStepComponent,
    ChaserStepComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
