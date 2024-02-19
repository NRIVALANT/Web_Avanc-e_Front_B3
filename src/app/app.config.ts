import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';// Import the missing providerHttpClient

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()] // Add providerHttpClient to the providers array
};
