import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatListModule, MatIconModule} from '@angular/material';

import {LayoutMain} from './layout/main.component';

import {BigList} from './big/list.component';

const crisisCenterRoutes : Routes = [
  {
    path: 'pages/webapi',
    component: LayoutMain,
    children: [
      {
        path: 'big/list',
        component:BigList
      }
    ]

  }
];

@NgModule({
  declarations: [LayoutMain,BigList],
  providers: [],
  entryComponents: [],
  imports: [
    RouterModule.forChild(crisisCenterRoutes),
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class WebapiRouterModule {}