import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.css',
})
export class BarComponent {
  @Input() index: number = 0;
  @Input() role? = 'empty';
  @Input() price? = '';
}
