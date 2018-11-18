import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AddEditPageComponent } from './components/add-edit-page/add-edit-page.component';

const routes: Routes = [

  {path: 'landing', component: LandingPageComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  {path: 'modify', component: AddEditPageComponent},
  {path: '', redirectTo: 'landing', pathMatch: 'full'}


]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SearchPageComponent,
    ProfilePageComponent,
    AddEditPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
