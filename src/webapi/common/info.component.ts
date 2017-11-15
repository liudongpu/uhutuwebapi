import {Component, OnInit} from '@angular/core';
import {ServiceHttp} from '../service/http.service';
import {ActivatedRoute, Route, Router, ParamMap} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import * as AirFaceHttp from '../../air/face/http';

@Component({templateUrl: "info.component.html"})
export class CommonInfo implements OnInit {

  propStructInfo : AirFaceHttp.IApiStructInfo;

  options : FormGroup;

  propUrl : string;

  propApiResult : string;

  constructor(private serviceHttp : ServiceHttp, private activeRoute : ActivatedRoute, private router : Router, private fb : FormBuilder) {}

  ngOnInit() {

    this
      .activeRoute
      .data
      .subscribe((data : {
        crisis: AirFaceHttp.IFitInfoResult
      }) => {

        this.propUrl = this.router.url;
        this.propStructInfo = data.crisis.structInfo;

        let oInput = {};
        this
          .propStructInfo
          .structInput
          .classFields
          .forEach(fItem => {

            oInput[fItem.fieldName] = '';
          });

        let sInputJson = JSON.stringify(oInput, null, 4);

        let oValue = {
          'apiMethod': this.propStructInfo.structGroup.apiClass,
          'apiInput': sInputJson,
          'apiToken': '',
          'apiKey': '',
          'apiSecret': '',
        };

        this.options = this
          .fb
          .group(oValue);

      });

  }

  processClick() {

    let oValue : AirFaceHttp.IApiParamInfo = this.options.value;

    this.propApiResult = '';
    this
      .serviceHttp
      .justCallApi(oValue)
      .then(data => {
        this.propApiResult = JSON.stringify(data, null, 4);
      })
      .catch((e) => {
        this.propApiResult = JSON.stringify(e);
      });

  }

}