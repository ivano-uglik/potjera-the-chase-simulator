import { Component, inject } from '@angular/core';
import { DifficultyManagerService } from '../difficulty-manager.service';
import { ButtonComponent } from '../button/button.component';
import { AppManagerService } from '../app-manager.service';

@Component({
  selector: 'question-difficulty',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './difficulty.component.html',
  styleUrl: './difficulty.component.css',
})
export class DifficultyComponent {
  manager = inject(AppManagerService);
  difficultyManager = inject(DifficultyManagerService);
}
