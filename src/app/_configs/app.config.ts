import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  pspApiUrl: 'http://159.65.140.140:8085/tts/api',
  aspApiUrl: 'http://159.65.140.140:8085/tts/api',
  ispApiUrl: 'http://159.65.140.140:8085/tts/api',
  homeLink: '/'
};
