import {Component, OnInit} from '@angular/core';
import {ServiceHttp} from '../service/http.service';
import {ActivatedRoute, Route,Router,ParamMap} from '@angular/router';

import * as AirFaceHttp from '../../air/face/http';

@Component({templateUrl: "info.component.html"})
export class CommonInfo implements OnInit {

  propStructInfo : AirFaceHttp.IApiStructInfo;


  propUrl : string;

  constructor(private serviceHttp : ServiceHttp, private activeRoute : ActivatedRoute,private router:Router) {}

  ngOnInit() {

    this
      .activeRoute
      .data
      .subscribe((data : {
        crisis: AirFaceHttp.IFitInfoResult
      }) => {

        

        this.propUrl = this
          .router
          .url;
        this.propStructInfo = data.crisis.structInfo;

      });

  }

}