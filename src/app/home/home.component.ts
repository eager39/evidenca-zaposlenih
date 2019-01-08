import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _dataService: ApiDataService,
   
    ) { }
  data;
  
  ngOnInit() {
  this.userData()  
  
  }

  async userData() {
    this.data =await this._dataService.get("data").toPromise()
    console.log(this.data)
  }
 

}
