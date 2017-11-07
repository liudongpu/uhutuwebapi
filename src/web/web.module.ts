import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';



import {MatButtonModule, MatButtonToggleModule,MatCheckboxModule,MatListModule,MatIconModule} from '@angular/material';


import {LayoutMain} from './layout/main.component';



const crisisCenterRoutes : Routes = [
  {
    path: '',
    component: LayoutMain

  }
];

@NgModule({
  declarations: [LayoutMain],
  providers: [],
  entryComponents: [],
  imports: [
    RouterModule.forRoot(crisisCenterRoutes),
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class WebModule {}