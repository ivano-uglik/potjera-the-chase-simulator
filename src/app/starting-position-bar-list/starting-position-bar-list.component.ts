import { Component } from '@angular/core';
import { BarComponent } from '../bar/bar.component';

@Component({
  selector: 'app-starting-position-bar-list',
  standalone: true,
  imports: [BarComponent],
  templateUrl: './starting-position-bar-list.component.html',
  styleUrl: './starting-position-bar-list.component.css',
})
export class StartingPositionBarListComponent {}
