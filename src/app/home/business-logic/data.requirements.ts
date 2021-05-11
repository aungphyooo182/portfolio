import {InjectionToken} from '@angular/core';
import { Observable } from 'rxjs';

export interface DataRequirements {
  getAllUsers(): Observable<any>;
  createUser(body): Observable<any>;
}

export const DataRequirementsInjectionToken = new InjectionToken<DataRequirements>('home Data Requirements')
