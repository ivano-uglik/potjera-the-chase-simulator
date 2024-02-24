import { Component } from '@angular/core';

@Component({
  selector: 'app-next-step',
  standalone: true,
  imports: [],
  template: `<button
    class="py-4 bg-blue-500 my-4 min-w-64 font-bold uppercase text-white text-2xl"
  >
    Sljedeći korak
  </button>`,
})
export class NextStepComponent {}
