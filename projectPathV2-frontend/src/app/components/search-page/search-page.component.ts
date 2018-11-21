import { Component, OnInit } from '@angular/core';

import { SearchPageService } from '../../service/search-page/search-page.service';
import { ProfileModel } from '../../models/ProfileModel';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  private profileName: string;
  private aboutMe: string;
  private profileModelList: Array<ProfileModel>;

  constructor(private searchPageService: SearchPageService) {
    this.profileModelList = [];
   }

  ngOnInit() {
  }

  getAllProfiles(): void {

    this.searchPageService.getAllProfiles().subscribe(
      res => {
        this.profileModelList = <Array<ProfileModel>>res;
      }
    );

  }

}
