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
       
      }
  public get currentUserValue() {
    this.currentUserSubject =localStorage.getItem('currentUser');
      return this.currentUserSubject;
  }

    

   async login(logindata) {
      this.data=await this._dataService.add(logindata,"auth").toPromise()
           
      if(this.data==false){
            
            }else{
            
            localStorage.setItem('currentUser', this.data);
            this.router.navigate(["home"]);
            

            }
         
         
}

               
          
    

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['']); 
        
    }
}