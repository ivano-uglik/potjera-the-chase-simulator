import { Component, inject } from '@angular/core';
import { BarComponent } from '../bar/bar.component';
import { BarManagerService } from '../bar-manager.service';
@Component({
  selector: 'app-bar-list',
  standalone: true,
  imports: [BarComponent],
  templateUrl: './bar-list.component.html',
  styleUrl: './bar-list.component.css',
})
export class BarListComponent {
  barManager = inject(BarManagerService);
}
