import { Component, inject } from '@angular/core';
import { AppManagerService } from '../app-manager.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-victory',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './victory.component.html',
  styleUrl: './victory.component.css',
})
export class VictoryComponent {
  manager = inject(AppManagerService);
}
