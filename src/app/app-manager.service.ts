import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppManagerService {
  constructor() {}
  isGameOver = false;
  isWon = false;
  startStep = 0;
  question = 0;
  questionView = false;
  addStartStep() {
    this.startStep++;
  }
  setGameOver() {
    console.log('game over');
    this.isGameOver = !this.isGameOver;
  }
  setWon() {
    console.log('Victory!');
    this.isWon = !this.isWon;
  }
  setStartStep(value: number) {
    this.startStep = value;
  }
  nextQuestion() {
    this.question++;
  }
  setQuestionView() {
    this.questionView = !this.questionView;
  }
  reloadPage() {
    window.location.reload();
  }
}
