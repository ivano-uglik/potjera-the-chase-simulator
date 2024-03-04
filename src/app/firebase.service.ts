import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  firestore = inject(Firestore);
  questionsCollection = collection(this.firestore, 'questions');
  getQuestionsCollection(): Observable<any> {
    return collectionData(this.questionsCollection) as Observable<any>;
  }
}
