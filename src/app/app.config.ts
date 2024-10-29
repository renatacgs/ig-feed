import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { registerLicense } from '@syncfusion/ej2-base';
import { provideHttpClient, withFetch } from '@angular/common/http';

registerLicense('ORg4AjUWIQA/Gnt2UlhhQlVMfV5DQmFBYVF2R2dJfFRxdF9GY0wxOX1dQl9nSH5Rf0RmWH9beX1dRmc=');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch())
  ]
};
