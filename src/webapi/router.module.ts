import { SubTable } from './sub/table.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatButtonToggleModule,MatSelectModule,MatInputModule,MatTableModule,MatFormFieldModule,MatGridListModule,MatCardModule, MatTabsModule,MatCheckboxModule, MatListModule, MatIconModule} from '@angular/material';

import {LayoutMain} from './layout/main.component';

import {CommonList} from './common/list.component';
import {BigFront} from './big/front.component';
import {CommonInfo} from './common/info.component';

import {ServiceHttp} from './service/http.service';
import {ServiceInfo} from './service/info.service';

const crisisCenterRoutes : Routes = [
  {
    path: 'fitapi',
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
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    BrowserModule,
    MatSelectModule
  ],
  exports: [RouterModule]
})
export class WebapiRouterModule {}