import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-rainbow',
  standalone: true,
  imports: [],
  template: `<button
    class="text-2xl uppercase font-bold red-hat bg-gradient-to-r from-red-400 to-indigo-500 text-[#212121] px-6 py-2 rounded-full transition-all hover:scale-125 duration-500"
  >
    <ng-content></ng-content>
  </button>`,
})
export class ButtonComponent {}
