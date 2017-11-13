import { SubTable } from './sub/table.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatButtonToggleModule,MatTableModule,MatGridListModule,MatCardModule, MatTabsModule,MatCheckboxModule, MatListModule, MatIconModule} from '@angular/material';

import {LayoutMain} from './layout/main.component';

import {CommonList} from './common/list.component';
import {BigFront} from './big/front.component';
import {CommonInfo} from './common/info.component';

import {ServiceHttp} from './service/http.service';
import {ServiceInfo} from './service/info.service';

const crisisCenterRoutes : Routes = [
  {
    path: 'pages/webapi',
    component: LayoutMain,
    children: [
      
      {
        path: 'list/:code',
        component:CommonList
      },
      {
        path:'big/front',
        component:BigFront
      },
      {
        path:'info/:code',
        resolve: {
          crisis: ServiceInfo
        },
        component:CommonInfo
      }
    ]

  }
];

@NgModule({
  declarations: [LayoutMain,CommonList,BigFront,CommonInfo,SubTable],
  providers: [ServiceHttp,ServiceInfo],
  entryComponents: [SubTable],
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
    MatCardModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class WebapiRouterModule {}