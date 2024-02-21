import { Component, inject } from '@angular/core';
import { BarManagerService } from '../bar-manager.service';

@Component({
  selector: 'app-chaser-step',
  standalone: true,
  imports: [],
  templateUrl: './chaser-step.component.html',
  styleUrl: './chaser-step.component.css',
})
export class ChaserStepComponent {
  barManager = inject(BarManagerService);
}
