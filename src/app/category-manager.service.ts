import { Injectable, inject, signal, WritableSignal } from '@angular/core';
import { QuestionProviderService } from './question-provider.service';
import { CategoryInterface, QuestionsInterface } from '../types';

@Injectable({
  providedIn: 'root',
})
export class CategoryManagerService {
  questionsProvider = inject(QuestionProviderService);
  questions: QuestionsInterface[] = this.questionsProvider.questions;
  localSelected: WritableSignal<boolean> = signal(true);
  triviaSelected: WritableSignal<boolean> = signal(true);
  geographySelected: WritableSignal<boolean> = signal(true);
  scienceSelected: WritableSignal<boolean> = signal(true);
  historySelected: WritableSignal<boolean> = signal(true);
  selectedQuestions: QuestionsInterface[] = [];
  addSelectedQuestions() {
    if (this.localSelected()) {
      this.selectedQuestions.push(...this.getLocalQuestions());
    }
    if (this.triviaSelected()) {
      this.selectedQuestions.push(...this.getTriviaQuestions());
    }
    if (this.geographySelected()) {
      this.selectedQuestions.push(...this.getGeographyQuestions());
    }
    if (this.scienceSelected()) {
      this.selectedQuestions.push(...this.getScienceQuestions());
    }
    if (this.historySelected()) {
      this.selectedQuestions.push(...this.getHistoryQuestions());
    }
    if (
      !this.localSelected() &&
      !this.triviaSelected() &&
      !this.geographySelected() &&
      !this.scienceSelected() &&
      !this.historySelected()
    ) {
      this.selectedQuestions.push(...this.getLocalQuestions());
      this.selectedQuestions.push(...this.getTriviaQuestions());
      this.selectedQuestions.push(...this.getGeographyQuestions());
      this.selectedQuestions.push(...this.getScienceQuestions());
      this.selectedQuestions.push(...this.getHistoryQuestions());
    }
  }
  getLocalQuestions() {
    return this.questions.filter((question) => question.category === 'local');
  }

  getTriviaQuestions() {
    return this.questions.filter((question) => question.category === 'trivia');
  }

  getGeographyQuestions() {
    return this.questions.filter(
      (question) => question.category === 'geography'
    );
  }

  getScienceQuestions() {
    return this.questions.filter((question) => question.category === 'science');
  }

  getHistoryQuestions() {
    return this.questions.filter((question) => question.category === 'history');
  }

  handleClick(category: CategoryInterface) {
    switch (category.title) {
      case 'Lokalno':
        this.localSelected.set(!this.localSelected());
        break;
      case 'Trivia':
        this.triviaSelected.set(!this.triviaSelected());
        break;
      case 'Geografija':
        this.geographySelected.set(!this.geographySelected());
        break;
      case 'Znanost':
        this.scienceSelected.set(!this.scienceSelected());
        break;
      case 'Povijest':
        this.historySelected.set(!this.historySelected());
        break;
      default:
        break;
    }
  }
  categories: CategoryInterface[] = [
    {
      title: 'Lokalno',
      subline: 'Aktualni događaji i pitanja iz lokalne kulture.',
      questions_count: this.getLocalQuestions().length,
      question_example:
        'U studenom 2022. u okružju Apatina pojavilo se više viđanja ove opasne životinje. O kojoj životinji je riječ?',
      isSelected: this.localSelected(),
    },
    {
      title: 'Trivia',
      subline: 'Pitanja rijetko korisnih, ali zanimljivih informacija.',
      questions_count: this.getTriviaQuestions().length,
      question_example:
        'Koje je godine samoborska kremšnita postala zastićeno nematerijalno kulturno dobro?',
      isSelected: this.triviaSelected(),
    },
    {
      title: 'Geografija',
      subline: 'Pitanja o zemljopisnim podatcima i lokacijama širom svijeta.',
      questions_count: this.getGeographyQuestions().length,
      question_example:
        '1971. otvorena je 1. hrvatska autocesta na dionici koja povezuje Kikovicu i koje mjesto?',
      isSelected: this.geographySelected(),
    },
    {
      title: 'Znanost',
      subline: 'Pitanja o fenomenima i dostignućima u znanosti.',
      questions_count: this.getScienceQuestions().length,
      question_example:
        'Zemlja ima tri sloja koji se razlikuju zbog različitih temperatura. Koja su njezina tri sloja?',
      isSelected: this.scienceSelected(),
    },
    {
      title: 'Povijest',
      subline: 'Od Rimljana do danas',
      questions_count: this.getHistoryQuestions().length,
      question_example:
        'Ova životinja bila je prva ikada lansirana u svemir. Bio je priključen na sovjetsku svemirsku letjelicu Sputnik 2, koja je poslana u svemir 3. studenog 1957. Kako se zvao?',
      isSelected: this.historySelected(),
    },
  ];

  returnSelectedQuestions() {
    return this.questionsProvider.shuffleQuestions(this.selectedQuestions);
  }
}
