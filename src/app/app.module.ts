import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import {NoopAnimationsModule} from '@angular/platform-browser/animations'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './home/home.component'
import {MatSidenavModule} from '@angular/material/sidenav'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginComponent } from './login/login.component'
import { AuthService } from './auth.service'
import { ApiDataService } from './api-data.service'
import { AuthGuard } from './auth.guard'
import {JwtInterceptor} from './jwt'
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DelavciComponent } from './delavci/delavci.component';
import { PregledComponent } from './delavci/pregled/pregled.component';
import { DodajComponent } from './delavci/dodaj/dodaj.component';
import { DelavecComponent } from './delavci/delavec/delavec.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DelavciComponent,
    PregledComponent,
    DodajComponent,
    DelavecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    NoopAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    NgbModule,
  
   
   
  ],
  providers: [AuthService,ApiDataService,AuthGuard,     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
