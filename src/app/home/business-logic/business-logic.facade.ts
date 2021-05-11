import {BusinessLogicRequirements} from '../presentation/business-logic.requirements';
import {NgModule} from '@angular/core';
import {DataRequirementsInjectionToken} from './data.requirements';
import {DataFacade} from '../data/data.facade';
import { GetAllUsersUseCase } from './use-cases/get-all-users.use-case';
import { Observable } from 'rxjs';
import { CreateUserUseCase } from './use-cases/create-user.use-case';

@NgModule({
    imports: [DataFacade],

    providers: [
        {
            provide: DataRequirementsInjectionToken,
            useClass: DataFacade
        }
    ]
})
export class BusinessLogicFacade implements BusinessLogicRequirements {
    constructor(
      private getAllUsersUseCase : GetAllUsersUseCase,
      private createUserUseCase : CreateUserUseCase
    ) {}

    getAllUsers(): Observable<any> {
      return this.getAllUsersUseCase.run();
    }

    createUser(body): Observable<any> {
      return this.createUserUseCase.run(body);
    }
}
