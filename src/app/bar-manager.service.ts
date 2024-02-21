import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BarManagerService {
  chaser = [false, false, false, false, false, false, false];
  candidate = [false, true, false, false, false, false, false];
  private createArrayWithItems(
    numberOfItems: number,
    chaserProvider: boolean[],
    candidateProvider: boolean[]
  ) {
    let newArray = [];
    for (let i = 0; i < numberOfItems; i++) {
      newArray.push({
        isChaser: chaserProvider[i]
          ? true
          : candidateProvider[i]
          ? false
          : null,
        price: candidateProvider[i] && !chaserProvider[i] ? '1.500€' : '',
      });
    }
    return newArray;
  }
  array = this.createArrayWithItems(7, this.chaser, this.candidate);
  constructor() {}
  moveChaser() {
    let lastIndex = -1;
    for (let i: number = 0; i < this.array.length; i++) {
      if (this.array[i].isChaser === true) {
        lastIndex = i;
      }
    }
    this.chaser[lastIndex + 1] = true;
    this.array = this.createArrayWithItems(7, this.chaser, this.candidate);
  }
  moveCandidate() {
    const trueIndex = this.candidate.indexOf(true);
    this.candidate = [false, false, false, false, false, false, false];
    this.candidate[trueIndex + 1] = true;
    this.array = this.createArrayWithItems(7, this.chaser, this.candidate);
  }
}
