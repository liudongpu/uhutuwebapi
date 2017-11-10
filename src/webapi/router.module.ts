import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatButtonToggleModule,MatTableModule,MatGridListModule, MatTabsModule,MatCheckboxModule, MatListModule, MatIconModule} from '@angular/material';

import {LayoutMain} from './layout/main.component';

import {BigList} from './big/list.component';
import {BigFront} from './big/front.component';
import {InfoApi} from './info/api.component';

import {ServiceHttp} from './service/http.service';

const crisisCenterRoutes : Routes = [
  {
    path: 'pages/webapi',
    component: LayoutMain,
    children: [
      {
        path: 'big/list',
        component:BigList
      },
      {
        path: 'list/:code',
        component:BigList
      },
      {
        path:'big/front',
        component:BigFront
      },
      {
        path:'info/:api',
        component:InfoApi
      }
    ]

  }
];

@NgModule({
  declarations: [LayoutMain,BigList,BigFront,InfoApi],
  providers: [ServiceHttp],
  entryComponents: [],
  imports: [
    RouterModule.forChild(crisisCenterRoutes),
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatListModule,
    MatIconModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class WebapiRouterModule {}