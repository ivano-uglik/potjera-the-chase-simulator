import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"potjera-fb488","appId":"1:485775418207:web:80df5e0a67c7b565138cea","storageBucket":"potjera-fb488.appspot.com","apiKey":"AIzaSyAucat5wpdlnF5xW7GSmJRylAN0AtvbsUo","authDomain":"potjera-fb488.firebaseapp.com","messagingSenderId":"485775418207","measurementId":"G-SYPN3RDGLC"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, importProvidersFrom(provideFirestore(() => getFirestore()))]
};
