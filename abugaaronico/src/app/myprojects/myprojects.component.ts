import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { Projectclass } from '../projectclass';

@Component({
  selector: 'app-myprojects',
  templateUrl: './myprojects.component.html',
  styleUrls: ['./myprojects.component.css']
})
export class MyprojectsComponent implements OnInit, OnDestroy {

    gitProjects: Projectclass;
    subscription: Subscription;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
      this.userService.getthisprojects();
      this.subscription = this.userService.getallProjects()
      .subscribe(gitProjects => this.gitProjects = gitProjects);

    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

}
