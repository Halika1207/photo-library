import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageLoaderService } from './core/services/page-loader.service';
import { NavigationCancel, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading$ = this.pageLoader.isLoading$;
  unsubscribe$ = new Subject<void>();

  constructor(
    private readonly pageLoader: PageLoaderService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntil(this.unsubscribe$),
    )
    .subscribe((e) => {
      if(e instanceof NavigationStart) {
        this.pageLoader.isLoading$.next(true);
      }

      if(
        e instanceof NavigationEnd
        || e instanceof NavigationEnd
        || e instanceof NavigationCancel
      ) {
        this.pageLoader.isLoading$.next(false);
      }
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
