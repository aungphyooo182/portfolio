import {Inject, Component} from '@angular/core';
import {BusinessLogicRequirements, BusinessRequirementsInjectionToken} from '../business-logic.requirements';
import {HomePageStore} from './home-page.store'

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page-controller.component.html',
    styleUrls: ['./home-page-controller.component.css']
})
export class HomePageControllerComponent {
    constructor(
        @Inject(BusinessRequirementsInjectionToken) private business: BusinessLogicRequirements,
        private store: HomePageStore
    ) {}

    public users = [
      {
        "id":"aung",
        "name":"123"
      }
    ];

    ngOnInit(){
      this.getAllUsers();
      this.createUser();
    }

    getAllUsers() {
      this.business.getAllUsers().subscribe(data=>{
        console.log(data[0]);
        this.users = data;
      });
    }

    createUser(){
      var body = {
        username: "aungphyooo182",
        password: "182aungphyooo"
      };
      this.business.createUser(body).subscribe(data=>{
        console.log(data);
      })
    }
}
