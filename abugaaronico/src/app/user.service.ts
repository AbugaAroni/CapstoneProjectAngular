import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser = new BehaviorSubject<any>([]);
  getProfile = new BehaviorSubject<any>([]);

  private url:string;

  constructor(private http: HttpClient) {

    this.url = 'https://abugaaronico.herokuapp.com/user/?format=json';
  }

  getthisUser() {
    return this.http.get(this.url).subscribe(getUser => {
    this.getUser.next(getUser);
  }); 

      /*  ('https://abugaaronico.herokuapp.com/user/');*/
  }

  getUsers() {
    return this.getUser.asObservable();
  }
}
