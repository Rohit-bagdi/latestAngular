import { Component } from '@angular/core';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    data:any;
    usertype;
    constructor(private accountService: AccountService,
        private router: Router,
        private route: ActivatedRoute, ) {
        // this.user = this.accountService.userValue;
       
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
              this.data = this.router.getCurrentNavigation().extras.state;
              console.log('Home page',this.data);
              this.user = this.data.username
              if(this.data.UserType=="Admin"){
this.usertype=true;
              }else{
                this.usertype=false;
              }
            }
          });
    }
}