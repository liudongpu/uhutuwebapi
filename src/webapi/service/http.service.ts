import {Injectable} from '@angular/core';
 
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceHttp {

    constructor(private httpClient:HttpClient){

    }



    upPostData(sApiName:string,oInput:any):Promise<any>{


        

        let aData: string[] = [];
        
                aData.push("apiMethod=" + sApiName);
        
                aData.push("apiInput=" +encodeURIComponent( JSON.stringify(oInput)));

        let promise=new Promise((resolve,reject)=>{

            this.httpClient.post('zoocs/web/api/manage',aData.join('&'),{headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }}).subscribe((data)=>{
                
                resolve(data);
            });
        });

        return promise;
    }
  

}