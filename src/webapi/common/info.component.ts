import { Component, OnInit } from '@angular/core';
import { ServiceHttp } from '../service/http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import * as AirFaceHttp from '../../air/face/http';

@Component({ templateUrl: "info.component.html" })
export class CommonInfo implements OnInit {



    propStructInfo: AirFaceHttp.IApiStructInfo;


    propDisplayedColumns=["fieldName","fieldType"];

    constructor(private serviceHttp: ServiceHttp, private route: ActivatedRoute) { }


    ngOnInit() {


        this
        .route
        .data
        .subscribe((data : {
          crisis:  AirFaceHttp.IFitInfoResult
        }) => {
  
          this.propStructInfo=data.crisis.structInfo;


        });


        

    }

}