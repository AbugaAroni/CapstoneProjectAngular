import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUser = new BehaviorSubject<any>([]);
  getProjects = new BehaviorSubject<any>([]);

  private url:string;
  private projecturl:string;

  constructor(private http: HttpClient) {

    this.url = 'https://abugaaronico.herokuapp.com/user/?format=json';
    this.projecturl = 'https://abugaaronico.herokuapp.com/project/?format=json';
  }

  getthisUser() {
    return this.http.get(this.url).subscribe(getUser => {
    this.getUser.next(getUser);
  });
  }

  getthisprojects() {
    return this.http.get(this.projecturl).subscribe(getProjects => {
    this.getProjects.next(getProjects);
  });
  }

  addprojects() {
    return this.http.post(this.projecturl).subscribe(getProjects => {
    this.getProjects.next(getProjects);
  });
  }

  public addPost(postData: Object) {
  this.httpClient.post(this.projecturl, postData).subscribe(data => {
    console.log(data);
  });
}

  getUsers() {
    return this.getUser.asObservable();
  }

  getallProjects() {
    return this.getProjects.asObservable();
  }
}
