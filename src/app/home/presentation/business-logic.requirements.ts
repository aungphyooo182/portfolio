import {InjectionToken} from '@angular/core';
import { Observable } from 'rxjs';

export interface BusinessLogicRequirements {
  getAllUsers(): Observable<any>;
  createUser(body): Observable<any>;
}

export const BusinessRequirementsInjectionToken = new InjectionToken<BusinessLogicRequirements>('home Business Requirements')
