import { ServiceHttp } from './../service/http.service';
import { Component, OnInit,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import * as AirFaceHttp from '../../air/face/http';

@Component({ templateUrl: "./table.component.html" ,selector:"uwb-sub-table"})
export class SubTable implements OnInit {

  
  propDataSource: MatTableDataSource<AirFaceHttp.IApiStructField>;


  propDisplayedColumns=["fieldName","fieldType"];

  @Input()
  inputFields:AirFaceHttp.IApiStructField[];


  ngOnInit() {

    
    this.propDataSource = new MatTableDataSource<AirFaceHttp.IApiStructField>(this.inputFields);

  }





}