import {ServiceHttp} from './../service/http.service';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import * as AirFaceHttp from '../../air/face/http';

@Component({templateUrl: "./list.component.html"})
export class BigList implements OnInit {

  constructor(private serviceHttp : ServiceHttp) {}

  propDataNav : AirFaceHttp.IZwApiGroup[]=[]


  propDataSource:MatTableDataSource<AirFaceHttp.IZwApiGroup>;


  propDisplayedColumns = ['apiName', 'apiClass','remarkInfo'];

  propMapGroup : Map < string,
  AirFaceHttp.IZwApiGroup[] >= new Map();
  

  ngOnInit() {

    this.serviceHttp.upPostData < AirFaceHttp.IFitListResult > ('com.uhutu.zooweb.api.fit.FitList', {}).then(data => {

      this.processData(data);
    });

  }

  processData(data : AirFaceHttp.IFitListResult) {
    data
      .groups
      .forEach(fItem => {
        if (!this.propMapGroup.has(fItem.parentCode)) {
          this
            .propMapGroup
            .set(fItem.parentCode, []);
        }
        this
          .propMapGroup
          .get(fItem.parentCode)
          .push(fItem);
      });

      let aArrNav=[];

      this.propMapGroup.get('').forEach(fItem=>{


        this.propDataNav.slice()

        aArrNav= aArrNav.concat(this.propMapGroup.get(fItem.code));



      });

      this.propDataNav=aArrNav;

      this.processSelct(this.propDataNav[0].code);

  }



  processSelct(sSelect){


    let aArr=this.propMapGroup.get(sSelect);


    let oParent:AirFaceHttp.IZwApiGroup;
    this.propDataNav.forEach(fItem=>{
      if(fItem.code===sSelect){
        oParent=fItem;
      }
    })

    aArr.forEach(fItem=>{

      if(!fItem.spaceName){
        fItem.apiClass=oParent.spaceName+'.'+fItem.apiClass;
      }
    });



    this.propDataSource = new MatTableDataSource<AirFaceHttp.IZwApiGroup>(aArr);


  }



}