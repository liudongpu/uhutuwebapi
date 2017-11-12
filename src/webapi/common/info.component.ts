import { Component, OnInit } from '@angular/core';
import { ServiceHttp } from '../service/http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import * as AirFaceHttp from '../../air/face/http';

@Component({ templateUrl: "info.component.html" })
export class CommonInfo implements OnInit {



    propStructInfo: AirFaceHttp.IApiStructInfo;

    constructor(private serviceHttp: ServiceHttp, private route: ActivatedRoute) { }


    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {


            let sCode = params.get('code');

            this.serviceHttp.upPostData<AirFaceHttp.IFitInfoInput, AirFaceHttp.IFitInfoResult>('com.uhutu.zooweb.api.fit.FitInfo', { apiCode: sCode }).then(data => {

                this.propStructInfo = data.structInfo;
            });

        });

    }

}