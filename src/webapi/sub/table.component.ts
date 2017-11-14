import { ServiceHttp } from './../service/http.service';
import { Component, OnInit,Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import * as AirFaceHttp from '../../air/face/http';
import {  ActivatedRoute } from '@angular/router';

@Component({ templateUrl: "./table.component.html" ,selector:"uwb-sub-table"})
export class SubTable implements OnInit {

  
  propDataSource: MatTableDataSource<AirFaceHttp.IApiStructField>;


  propDisplayedColumns=["fieldName","fieldType","fieldNote","filedRemark"];

  @Input()
  inputFields:AirFaceHttp.IApiStructField[];


  @Input()
  inputUrl:string;



  

  ngOnInit() {

    
    this.propDataSource = new MatTableDataSource<AirFaceHttp.IApiStructField>(this.inputFields);

  }





}