import {Injectable} from '@angular/core';
 
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceHttp {

    constructor(private httpClient:HttpClient){

    }



    upPostData<T>(sApiName:string,oInput:any):Promise<T>{


        

        let aData: string[] = [];
        
                aData.push("apiMethod=" + sApiName);
        
                aData.push("apiInput=" +encodeURIComponent( JSON.stringify(oInput)));

        let promise=new Promise<T>((resolve,reject)=>{

            this.httpClient.post('zoocs/web/api/manage',aData.join('&'),{headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }}).subscribe((data)=>{
                let oResult:any=data;
                resolve(oResult);
            });
        });

        return promise;
    }
  

}