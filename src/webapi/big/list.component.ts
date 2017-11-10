import { ServiceHttp } from './../service/http.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import * as AirFaceHttp from '../../air/face/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({ templateUrl: "./list.component.html" })
export class BigList implements OnInit {

  constructor(private serviceHttp: ServiceHttp, private route: ActivatedRoute, private router: Router) { }

  propDataNav: AirFaceHttp.IZwApiGroup[] = []


  propDataSource: MatTableDataSource<AirFaceHttp.IZwApiGroup>;


  propDisplayedColumns = ['apiClass', 'apiName', 'remarkInfo'];

  propMapGroup: Map<string,
  AirFaceHttp.IZwApiGroup[]> = new Map();



  propCurrentCode: string = '';


  ngOnInit() {

    this.serviceHttp.upPostData<AirFaceHttp.IFitListResult>('com.uhutu.zooweb.api.fit.FitList', {}).then(data => {

      this.processData(data);

    });

    this.route.paramMap.subscribe((params: ParamMap) => {


      let sCode = params.get('code');
      if (sCode && sCode != 'default') {

        if (this.propCurrentCode) {
          this.processSelct(sCode);
        }
        else {
          this.propCurrentCode = sCode;
        }


      }



    })



  }


  processNavChange(sCode: string) {
    console.log(sCode);
    return [];
  }



  processData(data: AirFaceHttp.IFitListResult) {
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

    let aArrNav = [];
    this.propMapGroup.get('').forEach(fItem => {
      aArrNav = aArrNav.concat(this.propMapGroup.get(fItem.code));
    });


    aArrNav.forEach(fSub => {
      this.propMapGroup.get(fSub.code).forEach(fItem => {
        if (!fItem.spaceName) {
          fItem.apiClass = fSub.spaceName + '.' + fItem.apiClass;
        }
      });
    })


    this.propDataNav = aArrNav;




    this.processSelct(this.propCurrentCode);

  }



  processSelct(sSelect) {


    if (!(sSelect && this.propMapGroup.has(sSelect))) {

      sSelect = this.propDataNav[0].code;
    }





    let aArr = this.propMapGroup.get(sSelect);






    this.propDataSource = new MatTableDataSource<AirFaceHttp.IZwApiGroup>(aArr);


  }



}