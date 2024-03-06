import { Component, inject } from '@angular/core';
import { QuestionProviderService } from '../question-provider.service';
import { AppManagerService } from '../app-manager.service';
import { ButtonComponent } from '../button/button.component';
import { CategoryManagerService } from '../category-manager.service';

@Component({
  selector: 'question-categories',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  questionsProvider = inject(QuestionProviderService);
  manager = inject(AppManagerService);
  categoryManager = inject(CategoryManagerService);
}
