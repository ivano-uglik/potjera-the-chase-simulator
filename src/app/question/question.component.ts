import { Component, Input, inject } from '@angular/core';
import { QuestionProviderService } from '../question-provider.service';
import { AppManagerService } from '../app-manager.service';
import { BarManagerService } from '../bar-manager.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  injectQuestions = inject(QuestionProviderService);
  callQuestions = this.injectQuestions.getQuestions();
  questions = this.callQuestions;
  manager = inject(AppManagerService);
  barManager = inject(BarManagerService);
  getRandomNumber() {
    const randomNumber = Math.random();

    if (randomNumber < 0.33) {
      return 1;
    } else if (randomNumber < 0.66) {
      return 2;
    } else {
      return 3;
    }
  }
  randomOrder = this.getRandomNumber();
  // if(randomOrder === false ) put correct in position 1
  // if(randomOrder === true ) put correct in position 2
  // if(randomOrder === ??? ) put correct in position 3
  @Input() index: number = 0;
  incorrectClick() {
    this.manager.setQuestionView();
    if (Math.random() < 0.8) {
      this.barManager.addChaserDown();
    }
  }

  correctClick() {
    this.manager.setQuestionView();
    this.barManager.moveCandidateDown();
    if (Math.random() < 0.9) {
      this.barManager.addChaserDown();
    }
  }
}
