import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <button mat-button>Click!</button>
    <mat-checkbox>Check me!</mat-checkbox>
    <div class="example-container">
      <mat-form-field>
        <input matInput placeholder="Input">
      </mat-form-field>
    </div>
    <mat-radio-group>
      <mat-radio-button value="1">Option 1</mat-radio-button>
      <mat-radio-button value="2">Option 2</mat-radio-button>
    </mat-radio-group>
    <mat-form-field>
      <mat-select placeholder="choice">
        <mat-option *ngFor="let item of list" [value]="item">
        {{ item }}
        </mat-option>
      </mat-select>
    </mat-form-field>
    <mat-slider min="1" max="5" step="0.5" value="1.5"></mat-slider>
    <mat-slider vertical></mat-slider>
    <mat-slider invert></mat-slider>
    <mat-slider thumbLabel tickInterval="1"></mat-slider>
    <mat-slider step="4" tickInterval="3"></mat-slider>
    <mat-slider tickInterval="auto"></mat-slider>
    <mat-slide-toggle>Slide me!</mat-slide-toggle>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  list = [1,2,3]
}
