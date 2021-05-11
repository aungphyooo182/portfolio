import {HttpClient} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import { map } from "rxjs/operators";
import { of } from 'rxjs';
import { UserModel } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(private http: HttpClient) {}

    public baseUrl = environment.apiurl;

    getAllUsers() {
      let url = this.baseUrl + "/api/courses/1";
      return this.http.get(url).pipe(
        map((res: Response) => {
          let result = [res];
          return result;
        })
      );
    }

    createUser(body) {
      var testUrl = "http://localhost:3000"
      // let url = this.baseUrl + "/api/simon/users";
      let url = testUrl + "/api/simon/users";
      return this.http.post(url,body).pipe(
        map((res: Response) => {
          let result = res;
          return result;
        })
      );
    }
}
