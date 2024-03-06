import { Component, inject } from '@angular/core';
import { AppManagerService } from '../app-manager.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-game-over',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './game-over.component.html',
  styleUrl: './game-over.component.css',
})
export class GameOverComponent {
  manager = inject(AppManagerService);
}
