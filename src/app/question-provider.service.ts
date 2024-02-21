import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionProviderService {
  questions = [
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'Entertainment: Video Games',
      question:
        'In which order do you need to hit some Deku Scrubs to open the first boss door in &quot;Ocarina of Time&quot;?',
      correct_answer: '2, 3, 1',
      incorrect_answers: ['1, 2, 3', '1, 3, 2', '2, 1, 3'],
    },
    {
      type: 'boolean',
      difficulty: 'medium',
      category: 'Geography',
      question: 'Gothenburg is the capital of Sweden.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'Entertainment: Film',
      question:
        'Which actor played the main character in the 1990 film &quot;Edward Scissorhands&quot;?',
      correct_answer: 'Johnny Depp',
      incorrect_answers: [
        ' Clint Eastwood',
        'Leonardo DiCaprio',
        'Ben Stiller',
      ],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'Celebrities',
      question: 'What is Doug Walker&#039;s YouTube name?',
      correct_answer: 'The Nostalgia Critic',
      incorrect_answers: [
        'The Angry Video Game Nerd',
        'AngryJoeShow',
        'The Cinema Snob',
      ],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Entertainment: Television',
      question:
        'Which of the following won the first season of American Idol in 2002?',
      correct_answer: 'Kelly Clarkson',
      incorrect_answers: ['Justin Guarini', 'Ruben Studdard', 'Chris Daughtry'],
    },
    {
      type: 'multiple',
      difficulty: 'medium',
      category: 'Sports',
      question:
        'Which sport is NOT traditionally played during the Mongolian Naadam festival?',
      correct_answer: 'American Football',
      incorrect_answers: ['Wrestling', 'Archery', 'Horse-Racing'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Science: Computers',
      question: 'Linux was first created as an alternative to Windows XP.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
    {
      type: 'multiple',
      difficulty: 'hard',
      category: 'Science: Computers',
      question: 'What major programming language does Unreal Engine 4 use?',
      correct_answer: 'C++',
      incorrect_answers: ['Assembly', 'C#', 'ECMAScript'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Animals',
      question: 'The Killer Whale is considered a type of dolphin.',
      correct_answer: 'True',
      incorrect_answers: ['False'],
    },
    {
      type: 'boolean',
      difficulty: 'easy',
      category: 'Entertainment: Japanese Anime &amp; Manga',
      question:
        'The anime &quot;Lucky Star&quot; follows the story of one girl who is unaware she is God.',
      correct_answer: 'False',
      incorrect_answers: ['True'],
    },
  ];
  constructor() {}
  getQuestions() {
    return this.questions;
  }
}
