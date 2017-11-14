import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import * as AirFaceHttp from '../../air/face/http';

@Injectable()
export class ServiceHttp {

    constructor(private httpClient : HttpClient) {}

    upPostData < Tinput,
    Tresut > (sApiName : string, oInput : Tinput) : Promise < Tresut > {

        

        return this.justCallApi({
            apiMethod: sApiName,
            apiInput: JSON.stringify(oInput),
            apiToken: ''
        });
    }

    justCallApi < Tinput,
    Tresult > (oApiParam : AirFaceHttp.IApiParamInfo) : Promise < Tresult > {

        let aData: string[] = [];

        aData.push("apiMethod=" + oApiParam.apiMethod);

        aData.push("apiInput=" + encodeURIComponent(oApiParam.apiInput));


        aData.push("apiToken=" + oApiParam.apiToken);
        
        let promise = new Promise < Tresult > ((resolve, reject) => {

            this
                .httpClient
                .post('zoocs/web/api/manage', aData.join('&'), {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .subscribe((data) => {
                    let oResult : any = data;
                    resolve(oResult);
                },(error)=>{reject(error)});
        });

        return promise;

    }

}