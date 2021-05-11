import {DataRequirements} from '../business-logic/data.requirements';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { UserService } from './api-services/user.service';

@NgModule({
    imports: [HttpClientModule]
})
export class DataFacade implements DataRequirements {
    constructor(
      private userApi : UserService
    ) {}

    getAllUsers(){
      return this.userApi.getAllUsers();
    }

    createUser(body){
      return this.userApi.createUser(body);
    }
}
