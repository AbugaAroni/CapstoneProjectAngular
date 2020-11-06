import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { Userclass } from '../userclass';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  gitUser: Userclass;
  subscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getthisUser();
    this.subscription = this.userService.getUsers()
    .subscribe(gitUser => this.gitUser = gitUser);

    /* .subscribe((response: any) => {console.log('Data', response);}); */
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

}
