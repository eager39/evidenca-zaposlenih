import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-dodaj',
  templateUrl: './dodaj.component.html',
  styleUrls: ['./dodaj.component.css']
})
export class DodajComponent implements OnInit {

  constructor() { }
  delavec = new FormGroup({
    ime: new FormControl(''),
    priimek: new FormControl(''),
    kraj_rojstva:new FormControl(""),
    drzava_rojstva:new FormControl(""),
    maticna_st:new FormControl(""),
    drzavljanstvo:new FormControl(""),
    stalni_naslov:new FormControl(""),
    zacasni_naslov:new FormControl(""),
    izobrazba:new FormControl(""),
    invalidnost:new FormControl(""),
    kat_inv:new FormControl(""),
    delna_upok:new FormControl(""),
    ime_delo_dop:new FormControl(""),
    naslov_delo_dop:new FormControl(""),

   
  });
  ngOnInit() {
  }

}
