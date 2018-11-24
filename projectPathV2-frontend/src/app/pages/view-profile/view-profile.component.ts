import { Component, OnInit,  } from '@angular/core';
import { ProfileModel } from './profileObject'

@Component({
  selector: 'ngx-view-profile',
  templateUrl: './view-profile.component.html',
})

export class ViewProfileComponent implements OnInit{
    private profileModel : ProfileModel = new ProfileModel();

    constructor(){}
  
    ngOnInit() {
        this.initProfile();
    }
  
    initProfile(){
        // ajax here
        this.profileModel.userId = 11;
        this.profileModel.profileName = "Juan C. Dela Cruz";
        this.profileModel.description = "I love travelling. And also doing it in Basketball..";
        this.profileModel.joinedDate = "November 21, 2018";
        this.profileModel.profileActivity.posts = 44;
        this.profileModel.profileActivity.followers = 1033;
        this.profileModel.profileActivity.reputation = 100;
    }
}