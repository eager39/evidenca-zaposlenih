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
 
 this.user=this.auth.currentUserValue;
 alert(JSON.stringify(localStorage.getItem("curretUser")))
  }

  async userData() {
    this.data =await this._dataService.get("data").toPromise()
    console.log(this.data)
  }
 
  logout(){
    this.auth.logout();
  }

}
