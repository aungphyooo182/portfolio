import { Observable, of } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import {BusinessLogicRequirements} from './business-logic.requirements';

export class BusinessLogicRequirementsFake implements BusinessLogicRequirements {
  getAllUsers(): Observable<any>{
    return of (new UserModel());
  }
  createUser(body): Observable<any>{
    return of (true);
  }
}
