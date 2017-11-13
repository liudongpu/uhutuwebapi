import {ServiceHttp} from './http.service';
import {Injectable} from '@angular/core';
import {Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

import * as AirFaceHttp from '../../air/face/http';

@Injectable()
export class ServiceInfo implements Resolve < AirFaceHttp.IFitInfoResult > {
    constructor(private router : Router, private serviceHttp : ServiceHttp) {}

    resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Promise < AirFaceHttp.IFitInfoResult > {

        let sCode = route
            .paramMap
            .get('code');

        return this.serviceHttp.upPostData < AirFaceHttp.IFitInfoInput,
        AirFaceHttp.IFitInfoResult > ('com.uhutu.zooweb.api.fit.FitInfo', {apiCode: sCode});
    }
}