import { Component, Input, inject } from '@angular/core';
import { QuestionProviderService } from '../question-provider.service';
import { AppManagerService } from '../app-manager.service';
import { BarManagerService } from '../bar-manager.service';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css',
})
export class QuestionComponent {
  questions = inject(QuestionProviderService);
  manager = inject(AppManagerService);
  barManager = inject(BarManagerService);
  @Input() index: number = 0;
}
