import { Component, OnInit } from '@angular/core';

import { SearchPageService } from '../../service/search-page/search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  private profileName: string;
  private aboutMe: string;

  constructor(private searchPageService: SearchPageService) { }

  ngOnInit() {
  }

  fetchDataTest(): void {

    this.searchPageService.getAllProfiles().subscribe(
      res => {
        console.log('inside component ');
        console.log(res);
        
      }
    );

  }

}
