import {
  Injectable,
  Signal,
  inject,
  signal,
  WritableSignal,
} from '@angular/core';
import { QuestionProviderService } from './question-provider.service';

@Injectable({
  providedIn: 'root',
})
export class CategoryManagerService {
  questionsProvider = inject(QuestionProviderService);
  questions = this.questionsProvider.questions;
  localQuestions = 0;
  triviaQuestions = 0;
  geographyQuestions = 0;
  scienceQuestions = 0;
  historyQuestions = 0;

  setLocalQuestions() {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].category === 'local') {
        this.localQuestions++;
      }
    }
    return this.localQuestions;
  }
  setTriviaQuestions() {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].category === 'trivia') {
        this.triviaQuestions++;
      }
    }
    return this.triviaQuestions;
  }
  setGeographyQuestions() {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].category === 'geography') {
        this.geographyQuestions++;
      }
    }
    return this.geographyQuestions;
  }
  setScienceQuestions() {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].category === 'science') {
        this.scienceQuestions++;
      }
    }
    return this.scienceQuestions;
  }
  setHistoryQuestions() {
    for (let i = 0; i < this.questions.length; i++) {
      if (this.questions[i].category === 'history') {
        this.historyQuestions++;
      }
    }
    return this.historyQuestions;
  }

  localSelected: WritableSignal<boolean> = signal(false);
  triviaSelected: WritableSignal<boolean> = signal(false);
  geographySelected: WritableSignal<boolean> = signal(false);
  scienceSelected: WritableSignal<boolean> = signal(false);
  historySelected: WritableSignal<boolean> = signal(false);
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
      questions_count: this.setLocalQuestions(),
      question_example:
        'U studenom 2022. u okružju Apatina pojavilo se više viđanja ove opasne životinje. O kojoj životinji je riječ?',
      isSelected: this.localSelected(),
    },
    {
      title: 'Trivia',
      subline: 'Pitanja rijetko korisnih, ali zanimljivih informacija.',
      questions_count: this.setTriviaQuestions(),
      question_example:
        'Koje je godine samoborska kremšnita postala zastićeno nematerijalno kulturno dobro?',
      isSelected: this.triviaSelected(),
    },
    {
      title: 'Geografija',
      subline: 'Pitanja o zemljopisnim podatcima i lokacijama širom svijeta.',
      questions_count: this.setGeographyQuestions(),
      question_example:
        '1971. otvorena je 1. hrvatska autocesta na dionici koja povezuje Kikovicu i koje mjesto?',
      isSelected: this.geographySelected(),
    },
    {
      title: 'Znanost',
      subline: 'Pitanja o fenomenima i dostignućima u znanosti.',
      questions_count: this.setScienceQuestions(),
      question_example:
        'Zemlja ima tri sloja koji se razlikuju zbog različitih temperatura. Koja su njezina tri sloja?',
      isSelected: this.scienceSelected(),
    },
    {
      title: 'Povijest',
      subline: 'Od Rimljana do danas',
      questions_count: this.setHistoryQuestions(),
      question_example:
        'Ova životinja bila je prva ikada lansirana u svemir. Bio je priključen na sovjetsku svemirsku letjelicu Sputnik 2, koja je poslana u svemir 3. studenog 1957. Kako se zvao?',
      isSelected: this.historySelected(),
    },
  ];
}

interface CategoryInterface {
  title: string;
  subline: string;
  questions_count: number;
  question_example: string;
  isSelected: boolean;
}
