import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarListComponent } from './bar-list/bar-list.component';
import { CandidateStepComponent } from './candidate-step/candidate-step.component';
import { ChaserStepComponent } from './chaser-step/chaser-step.component';
import { QuestionComponent } from './question/question.component';
import { NextStepComponent } from './next-step/next-step.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { StartingPositionBarListComponent } from './starting-position-bar-list/starting-position-bar-list.component';
import { GameOverComponent } from './game-over/game-over.component';
import { AppManagerService } from './app-manager.service';
import { VictoryComponent } from './victory/victory.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BarListComponent,
    CandidateStepComponent,
    ChaserStepComponent,
    QuestionComponent,
    NextStepComponent,
    StartScreenComponent,
    GameOverComponent,
    VictoryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  manager = inject(AppManagerService);
}
