import { Component, Input, inject } from '@angular/core';
import { QuestionProviderService } from '../question-provider.service';
import { AppManagerService } from '../app-manager.service';
import { BarManagerService } from '../bar-manager.service';
import { FirebaseService } from '../firebase.service';
import { CategoryManagerService } from '../category-manager.service';
import { DifficultyManagerService } from '../difficulty-manager.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  manager = inject(AppManagerService);
  barManager = inject(BarManagerService);
  categoryManager = inject(CategoryManagerService);
  difficultyManager = inject(DifficultyManagerService);
  questionsService = inject(FirebaseService);
  questions = this.difficultyManager.returnSelectedDifficulty();
  ngOnInit(): void {
    this.questionsService.getQuestionsCollection().subscribe((questions) => {
      this.questionsService = questions;
      // console.log(`retrivied from firebase + ${this.questionsService}`);
    });
  }
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
  handleReport() {
    alert(
      'Ova značajka je work in progress. U međuvremenu, molimo da sve žalbe uputite upravi vodovoda.'
    );
  }
}
