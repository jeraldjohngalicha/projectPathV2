import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common"

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NbThemeModule, NbLayoutModule, 
          NbSidebarModule, NbSidebarService, NbMenuModule, 
          NbCardModule, NbButtonModule, NbStepperModule, NbCheckboxModule,
          NbActionsModule, NbSearchModule, NbUserModule } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { NewestComponent } from './newest/newest.component';
import { TrendingComponent } from './trending/trending.component';
import { LoginComponent } from './login/login.component';
import { LayoutService } from './layout.service';


const PAGES_COMPONENTS = [
  PagesComponent, HomeComponent, AddEditPostComponent,
  TopRatedComponent, NewestComponent, TrendingComponent, LoginComponent
  
];

@NgModule({
  imports: [
    PagesRoutingModule, 
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule,
    NbCardModule,
    NbButtonModule,
    NbMenuModule.forRoot(),   
    NbStepperModule ,
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    NbCheckboxModule,
    NbActionsModule,
    NbSearchModule,
    NbUserModule
  ],

  declarations: [
    ...PAGES_COMPONENTS,
  ],

  providers:[NbSidebarService, LayoutService], 
})

export class PagesModule {

}
