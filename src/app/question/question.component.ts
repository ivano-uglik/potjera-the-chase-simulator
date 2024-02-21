import { Component, inject } from '@angular/core';
import { QuestionProviderService } from '../question-provider.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  questions = inject(QuestionProviderService);
}
