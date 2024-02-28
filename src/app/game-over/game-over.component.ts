import { Component, inject } from '@angular/core';
import { AppManagerService } from '../app-manager.service';

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.css',
})
export class GameOverComponent {
  manager = inject(AppManagerService);
}
