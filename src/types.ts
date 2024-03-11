export interface QuestionsInterface {
  type: 'multiple';
  difficulty: 'easy' | 'medium' | 'hard';
  category: 'local' | 'trivia' | 'geography' | 'science' | 'history';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface CategoryInterface {
  title: string;
  subline: string;
  questions_count: number;
  question_example: string;
  isSelected: boolean;
}
