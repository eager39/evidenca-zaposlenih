import { Injectable } from '@angular/core';
import { ApiDataService } from './api-data.service';
import { Router, ActivatedRoute } from '@angular/router';




@Injectable()
export class AuthService {
   data;
    currentUserSubject
    constructor(
      private _dataService: ApiDataService,
      private route: ActivatedRoute,
      private router: Router,
      
      
      )
       {
        this.currentUserSubject =JSON.parse(localStorage.getItem('currentUser'));
      }
    public get currentUserValue() {
      return this.currentUserSubject;
  }

    

   async login() {
      this.data=await this._dataService.add({user:"user",password:"password"},"auth").toPromise()
           
      if(this.data.status==false){
            console.log("horay");
            }else{
            
            localStorage.setItem('currentUser', JSON.stringify([{"user":"user","token":"supertoken"}]));
            console.log(localStorage.getItem("currentUser"));
            this.router.navigate(["home"]);
            }
         
         
}

               
          
    

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        
    }
}