import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { QuestionsInterface } from '../types';
import { CategoryManagerService } from './category-manager.service';
import { QuestionProviderService } from './question-provider.service';

@Injectable({
  providedIn: 'root',
})
export class DifficultyManagerService {
  questionProvider = inject(QuestionProviderService);
  filteredQuestionsProvider = inject(CategoryManagerService);
  questions: QuestionsInterface[] =
    this.filteredQuestionsProvider.returnSelectedQuestions();
  easySelected: WritableSignal<boolean> = signal(true);
  mediumSelected: WritableSignal<boolean> = signal(true);
  hardSelected: WritableSignal<boolean> = signal(true);
  selectedQuestions: QuestionsInterface[] = [];
  addSelectedDifficulty() {
    if (this.easySelected()) {
      this.selectedQuestions.push(...this.getEasyQuestions());
    }
    if (this.mediumSelected()) {
      this.selectedQuestions.push(...this.getMediumQuestions());
    }
    if (this.hardSelected()) {
      this.selectedQuestions.push(...this.getHardQuestions());
    }
    if (
      !this.easySelected() &&
      !this.mediumSelected() &&
      !this.hardSelected()
    ) {
      this.selectedQuestions.push(...this.getEasyQuestions());
      this.selectedQuestions.push(...this.getMediumQuestions());
      this.selectedQuestions.push(...this.getHardQuestions());
    }
  }
  getEasyQuestions() {
    return this.questions.filter((question) => question.difficulty === 'easy');
  }

  getMediumQuestions() {
    return this.questions.filter(
      (question) => question.difficulty === 'medium'
    );
  }

  getHardQuestions() {
    return this.questions.filter((question) => question.difficulty === 'hard');
  }

  handleEasy() {
    this.easySelected.set(!this.easySelected());
  }

  handleMedium() {
    this.mediumSelected.set(!this.mediumSelected());
  }

  handleHard() {
    this.hardSelected.set(!this.hardSelected());
  }

  returnSelectedDifficulty() {
    return this.questionProvider.shuffleQuestions(this.selectedQuestions);
  }
}
