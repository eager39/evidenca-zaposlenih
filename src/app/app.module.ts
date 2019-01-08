import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service'
import { ApiDataService } from './api-data.service'
import { AuthGuard } from './auth.guard'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    NoopAnimationsModule
  ],
  providers: [AuthService,ApiDataService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
