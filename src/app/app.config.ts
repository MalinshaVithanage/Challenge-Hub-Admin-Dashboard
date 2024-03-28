import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { initializeApp } from 'firebase/app';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp as initializeApp_alias, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { environment } from '../environments/environment.development';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    provideClientHydration(), 
    importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebaseConfig))),
    importProvidersFrom(provideAuth(() => getAuth())), 
    importProvidersFrom(provideAnalytics(() => getAnalytics())), ScreenTrackingService, UserTrackingService, 
 
importProvidersFrom(provideFirestore(() => getFirestore())), 
importProvidersFrom(provideDatabase(() => getDatabase())), 
importProvidersFrom(provideFunctions(() => getFunctions())), 
importProvidersFrom(provideMessaging(() => getMessaging())), 
importProvidersFrom(providePerformance(() => getPerformance())), 
importProvidersFrom(provideStorage(() => getStorage())), 
importProvidersFrom(provideRemoteConfig(() => getRemoteConfig()))]
};
