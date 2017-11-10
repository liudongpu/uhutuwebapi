import { ServiceHttp } from './../service/http.service';
import {Component,OnInit} from '@angular/core';



@Component({templateUrl: "./list.component.html"})
export class BigList implements OnInit  {


  constructor(private serviceHttp:ServiceHttp){

  }

  ngOnInit(){


    this.serviceHttp.upPostData('com.uhutu.zooweb.api.fit.FitList',{}).then(data=>{
      console.log(data);
    });


  }

}