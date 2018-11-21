import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

import { RouterUtils } from '../../components/shared/router-utils.component';

@Injectable({
  providedIn: 'root'
})
export class SearchPageService {

  private routerUtils: RouterUtils;

  constructor(private http: HttpClient) {
    this.routerUtils = new RouterUtils();
   }

  getAllProfiles() {
    return this.http.get(this.routerUtils.getServerRestDomain() + '/profileRoutes/getAllProfiles');
  }


}
