import { Component, inject } from '@angular/core';
import { AppManagerService } from '../app-manager.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-next-step',
  standalone: true,
  imports: [ButtonComponent],
  template: `<div class="pt-8">
    <button-rainbow
      (click)="this.manager.nextQuestion(); this.manager.setQuestionView()"
    >
      @if (this.manager.question === 0) { Započni igru } @else {Sljedeći korak}
    </button-rainbow>
  </div>`,
})
export class NextStepComponent {
  manager = inject(AppManagerService);
}
