import {Component, OnInit} from '@angular/core';
import {Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute} from '@angular/router';


@Component({template: 'check'})
export class CheckComponent implements OnInit {
  constructor(private router : Router, private route : ActivatedRoute) {}

  ngOnInit() {

     
      if (this.route.snapshot.queryParams['b_redirect']) {

        let oUrl = decodeURIComponent(this.route.snapshot.queryParams['b_redirect']);

        this
          .router
          .navigate([oUrl])
      } else {
        this
          .router
          .navigate(['/pages/webapi/big/list'])
      }
     

  }
}
