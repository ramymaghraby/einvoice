import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})


export class NavigationComponent implements OnInit {



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authSrv: AuthService
    ) {}
  ngOnInit() {
    this.getGroupToken();

  }

  getGroupToken() {
    this.authSrv.getGroupToken().subscribe(res => console.log(res))
  }

  getTaxToken() {
    this.authSrv.getTaxToken().subscribe(res => console.log(res))
  }



}
