import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import { AuthGuard } from './auth.guard';
import { DelavciComponent } from './delavci/delavci.component';
import { PregledComponent } from './delavci/pregled/pregled.component';
import { DodajComponent } from './delavci/dodaj/dodaj.component';
import { DelavecComponent } from './delavci/delavec/delavec.component';


const routes: Routes = [
  {
    path:"home",
    component:HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path:"*",
    component:AppComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"delavci",
    component:DelavciComponent,
    children: [
    
      { path: 'dodaj', component: DodajComponent },
      {path:":id",component:DelavecComponent}
  ]
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
