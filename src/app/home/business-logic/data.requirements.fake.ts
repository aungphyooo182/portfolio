import { Observable, of } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import {DataRequirements} from './data.requirements';

export class DataRequirementsFake implements DataRequirements {
  getAllUsers(): Observable<any>{
    return of (new UserModel());
  };
  createUser(body): Observable<any>{
    return of (true);
  };
}
