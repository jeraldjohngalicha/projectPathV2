import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NbCheckboxModule, NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NbCheckboxModule, NbCardModule,
    NbInputModule, NbButtonModule
  ],
  bootstrap: [AppComponent],
    providers: [
  ],
})
export class AppModule { }
