import { Component, inject } from '@angular/core';
import { BarListComponent } from '../bar-list/bar-list.component';
import { BarComponent } from '../bar/bar.component';
import { BarManagerService } from '../bar-manager.service';
import { AppManagerService } from '../app-manager.service';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [BarListComponent, BarComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.css',
})
export class StartScreenComponent {
  barManager = inject(BarManagerService);
  manager = inject(AppManagerService);
}
