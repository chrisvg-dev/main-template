import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/config/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
    <div class="overlay" *ngIf="isLoading$ | async">
    <div class="lds-ripple"><div></div><div></div></div>
    </div>
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  public isLoading$ = this.spinnerService.isLoading$;

  constructor( private spinnerService: SpinnerService ) { }
}
