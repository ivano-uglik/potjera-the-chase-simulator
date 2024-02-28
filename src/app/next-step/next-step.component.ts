import { Component, inject } from '@angular/core';
import { AppManagerService } from '../app-manager.service';

@Component({
  selector: 'app-next-step',
  standalone: true,
  imports: [],
  template: `<button
    class="py-4 bg-blue-500 my-4 min-w-64 font-bold uppercase text-white text-2xl"
    (click)="this.manager.nextQuestion(); this.manager.setQuestionView()"
  >
    @if (this.manager.question === 0) { Započni igru } @else {Sljedeći korak}
  </button>`,
})
export class NextStepComponent {
  manager = inject(AppManagerService);
}
