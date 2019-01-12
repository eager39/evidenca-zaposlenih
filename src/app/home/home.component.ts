import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _dataService: ApiDataService,
    private auth:AuthService
   
    ) { }
  data;
  user;
  ngOnInit() {
  this.userData()  
 
 

  }

  async userData() {
    try{
      this.data =await this._dataService.get("data").toPromise()
    this.user=this.data[0].username
    }catch(err){
      console.log(err);
    }
    
   
  }
 
  logout(){
    this.auth.logout();
  }

}
