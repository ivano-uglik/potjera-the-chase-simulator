import { Component, inject } from '@angular/core';
import { QuestionProviderService } from '../question-provider.service';
import { AppManagerService } from '../app-manager.service';

@Component({
  selector: 'question-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  questionsProvider = inject(QuestionProviderService);
  manager = inject(AppManagerService);

  categories = [
    {
      title: 'Lokalno',
      subline: 'Aktualni događaji i pitanja iz lokalne kulture.',
      questions_count: 27,
      question_example:
        'U studenom 2022. u okružju Apatina pojavilo se više viđanja ove opasne životinje. O kojoj životinji je riječ?',
      isSelected: false,
    },
    {
      title: 'Trivia',
      subline: 'Pitanja rijetko korisnih, ali zanimljivih informacija.',
      questions_count: 86,
      question_example:
        'Koje je godine samoborska kremšnita postala zastićeno nematerijalno kulturno dobro?',
      isSelected: false,
    },
    {
      title: 'Geografija',
      subline: 'Pitanja o zemljopisnim podatcima i lokacijama širom svijeta.',
      questions_count: 24,
      question_example:
        '1971. otvorena je 1. hrvatska autocesta na dionici koja povezuje Kikovicu i koje mjesto?',
      isSelected: false,
    },
    {
      title: 'Znanost',
      subline: 'Pitanja o fenomenima i dostignućima u znanosti.',
      questions_count: 21,
      question_example:
        'Zemlja ima tri sloja koji se razlikuju zbog različitih temperatura. Koja su njezina tri sloja?',
      isSelected: false,
    },
    {
      title: 'Povijest',
      subline: 'Od Rimljana do danas',
      questions_count: 44,
      question_example:
        'Ova životinja bila je prva ikada lansirana u svemir. Bio je priključen na sovjetsku svemirsku letjelicu Sputnik 2, koja je poslana u svemir 3. studenog 1957. Kako se zvao?',
      isSelected: false,
    },
  ];
}
