import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-delavci',
  templateUrl: './delavci.component.html',
  styleUrls: ['./delavci.component.css']
})
export class DelavciComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
