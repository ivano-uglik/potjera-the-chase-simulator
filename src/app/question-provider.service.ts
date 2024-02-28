import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionProviderService {
  questions = [
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'Zabava: Glazba',
      question:
        'Koja pjesma je postala planetarni hit nakon što ju je izvela grupa Queen?',
      correct_answer: 'Bohemian Rhapsody',
      incorrect_answers: [
        'We Will Rock You',
        'Another One Bites the Dust',
        'Under Pressure',
      ],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Povijest',
      question: 'Napoleon Bonaparte je bio francuski car.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'Znanost: Fizika',
      question:
        'Koje od sljedećih čestica ne spada u standardni model čestica?',
      correct_answer: 'Graviton',
      incorrect_answers: ['Foton', 'Elektron', 'Kvark'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Zabava: Film',
      question: 'Koji film je osvojio Oscara za najbolji film 2020. godine?',
      correct_answer: 'Parazit',
      incorrect_answers: ['1917', 'Joker', 'The Irishman'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Geografija',
      question: 'Najviša planina u svijetu je Mount Kilimanjaro.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'Sportovi',
      question:
        'Koja zemlja je domaćin sljedeće FIFA Svjetskog prvenstva u nogometu?',
      correct_answer: 'Katar',
      incorrect_answers: ['Brazil', 'Njemačka', 'SAD'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'Znanost: Biologija',
      question: 'Koja je najveća poznata životinja na Zemlji?',
      correct_answer: 'Plavi kit',
      incorrect_answers: ['Afrički slon', 'Morski pas', 'Koalicija'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Zabava: Književnost',
      question: 'Roman "Harry Potter i Kamen mudraca" napisao je J.K. Rowling.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'Povijest',
      question: 'Koji događaj označava početak Prvog svjetskog rata?',
      correct_answer: 'Ubojstvo nadvojvode Franje Ferdinanda',
      incorrect_answers: [
        'Bitka kod Staljingrada',
        'Pad Berlinskog zida',
        'Potop Titanika',
      ],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Znanost: Astronomija',
      question: 'Sunce je zvijezda.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
  ];

  constructor() {}
  getQuestions() {
    return this.questions;
  }
}
