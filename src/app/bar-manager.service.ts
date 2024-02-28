import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BarManagerService {
  barData = [
    { index: 0, role: 'empty' },
    { index: 1, role: 'candidate', price: '5.000€' },
    { index: 2, role: 'empty', price: '' },
    { index: 3, role: 'empty', price: '' },
    { index: 4, role: 'empty', price: '' },
    { index: 5, role: 'empty', price: '' },
    { index: 6, role: 'empty', price: '' },
  ];
  changeBarData(newBarData: [{ index: number; role: string }]) {
    this.barData = newBarData;
  }

  addChaserDown() {
    let highestChaserIndex = -1;
    this.barData.forEach((bar) => {
      if (bar.role === 'chaser' && bar.index > highestChaserIndex) {
        highestChaserIndex = bar.index;
      }
    });
    const newChaserIndex = highestChaserIndex + 1;
    if (this.barData[highestChaserIndex + 1].role === 'candidate') {
      return console.log('game over!');
    }
    this.barData[newChaserIndex] = { index: newChaserIndex, role: 'chaser' };
  }

  moveCandidateDown() {
    let highestCandidateIndex = 99;
    this.barData.forEach((bar) => {
      if (bar.role === 'candidate' && bar.index < highestCandidateIndex) {
        highestCandidateIndex = bar.index;
      }
    });
    const newCandidateIndex = highestCandidateIndex + 1;
    this.barData[newCandidateIndex] = {
      index: newCandidateIndex,
      role: 'candidate',
      price: this.barData[highestCandidateIndex].price,
    };
    this.barData[highestCandidateIndex] = {
      index: highestCandidateIndex,
      role: 'empty',
      price: '',
    };
  }
  higher() {
    this.barData = [
      { index: 0, role: 'empty' },
      { index: 1, role: 'candidate', price: '5.000€' },
      { index: 2, role: 'candidate', price: '' },
      { index: 3, role: 'candidate', price: '' },
      { index: 4, role: 'candidate', price: '' },
      { index: 5, role: 'candidate', price: '' },
      { index: 6, role: 'candidate', price: '' },
    ];
  }
  middle() {
    this.barData = [
      { index: 0, role: 'empty' },
      { index: 1, role: 'empty', price: '' },
      { index: 2, role: 'candidate', price: '1.000€' },
      { index: 3, role: 'empty', price: '' },
      { index: 4, role: 'empty', price: '' },
      { index: 5, role: 'empty', price: '' },
      { index: 6, role: 'empty', price: '' },
    ];
  }
  lower() {
    this.barData = [
      { index: 0, role: 'empty' },
      { index: 1, role: 'empty', price: '' },
      { index: 2, role: 'empty', price: '' },
      { index: 3, role: 'candidate', price: '250€' },
      { index: 4, role: 'empty', price: '' },
      { index: 5, role: 'empty', price: '' },
      { index: 6, role: 'empty', price: '' },
    ];
  }
}
