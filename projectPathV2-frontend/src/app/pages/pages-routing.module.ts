import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from '../app.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { NewestComponent } from './newest/newest.component';
import { TrendingComponent } from './trending/trending.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'add-edit-post',
    component: AddEditPostComponent,
  },
  {
    path: 'trending',
    component: TrendingComponent,
  },
  {
    path: 'top-rated',
    component: TopRatedComponent,
  },    
  {
    path: 'newest',
    component: NewestComponent,
  },
  {
    path: 'view-profile',
    component: ViewProfileComponent,
  },
  {
    path: 'search-result',
    component: SearchResultComponent,
  },
   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], 
})
export class PagesRoutingModule {
}