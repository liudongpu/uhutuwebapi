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

        this.propUrl = location.pathname;
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
          'apiSecret': ''
        };

        let sLocalCache = localStorage.getItem('webapi_common_info');
        if (sLocalCache) {
          oValue = Object.assign(oValue, JSON.parse(sLocalCache));
        }

        this.options = this
          .fb
          .group(oValue);

      });

  }

  saveLocalClick() {

    let oValue = this.options.value;

    let oSave = {
      apiToken: oValue.apiToken,
      apiKey: oValue.apiKey,
      apiSecret: oValue.apiSecret
    }

    localStorage.setItem('webapi_common_info', JSON.stringify(oSave));

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