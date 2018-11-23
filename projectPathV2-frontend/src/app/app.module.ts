import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
    providers: [
  ],
})
export class AppModule { }
