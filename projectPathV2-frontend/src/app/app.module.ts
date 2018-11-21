import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AddEditPageComponent } from './components/add-edit-page/add-edit-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { SearchPageService } from './service/search-page/search-page.service';

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
    AddEditPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchPageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
