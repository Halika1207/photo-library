import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { PageLoaderService } from './core/services/page-loader.service';
import { } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentChecked  {
  isLoading$ = this.pageLoader.isLoading$;
  unsubscribe$ = new Subject<void>();

  constructor(
    private readonly pageLoader: PageLoaderService,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngAfterContentChecked(): void {
    //TODO: Read deeper about this problem:ERROR Error: ExpressionChangedAfterItHasBeenCheckedError 
    this.changeDetector.detectChanges();
  }
}
