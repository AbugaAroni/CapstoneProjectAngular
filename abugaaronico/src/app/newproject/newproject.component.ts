import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(searchName: string) {
    if (searchName !== '') {
      this.userService.addpost(searchName);
    }


}
