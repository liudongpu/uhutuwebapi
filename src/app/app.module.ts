import { CheckComponent } from './check.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { WebapiRouterModule } from '../webapi/router.module';



const routes: Routes = [
  { path: '', component:CheckComponent, pathMatch: 'full' },
  { path: '**', component:CheckComponent },
  
];


@NgModule({
  declarations: [
    AppComponent,CheckComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    
    RouterModule.forRoot(routes),
    WebapiRouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
