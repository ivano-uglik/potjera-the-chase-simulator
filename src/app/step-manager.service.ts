import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepManagerService {
  constructor() {}
  chaser = 0;
  candidate = 3; // start at step 2 (higher) / 3 (middle) / 4 (lower)
}
