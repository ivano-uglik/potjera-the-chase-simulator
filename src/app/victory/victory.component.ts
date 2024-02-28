import { Component, inject } from '@angular/core';
import { AppManagerService } from '../app-manager.service';

@Component({
  selector: 'app-victory',
  standalone: true,
  imports: [],
  templateUrl: './victory.component.html',
  styleUrl: './victory.component.css',
})
export class VictoryComponent {
  manager = inject(AppManagerService);
}
