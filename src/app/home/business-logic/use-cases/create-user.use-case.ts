import {Inject, Injectable} from '@angular/core';
import {DataRequirements, DataRequirementsInjectionToken} from '../data.requirements';

@Injectable({
    providedIn: 'root'
})
export class CreateUserUseCase {
    constructor(
        @Inject(DataRequirementsInjectionToken) private data: DataRequirements
    ) {}

    run(body) {
      return this.data.createUser(body);
    }
}
