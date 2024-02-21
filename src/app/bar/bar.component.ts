import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css',
})
export class BarComponent {
  @Input() price?: string;
  @Input() isChaser: boolean | null = null;
}
