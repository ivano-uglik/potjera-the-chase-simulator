import { Component, inject } from '@angular/core';
import { BarManagerService } from '../bar-manager.service';

@Component({
  selector: 'app-candidate-step',
  standalone: true,
  imports: [],
  templateUrl: './candidate-step.component.html',
  styleUrl: './candidate-step.component.css',
})
export class CandidateStepComponent {
  barManager = inject(BarManagerService);
}
