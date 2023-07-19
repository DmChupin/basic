import { InjectionToken } from '@angular/core';
import { baseUrl } from './base-url.consts';

export const BASE_URL = new InjectionToken('App base URL', {
	providedIn: 'root',
	factory: () => baseUrl,
});
