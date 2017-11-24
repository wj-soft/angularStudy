import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatButton, MatCheckboxModule, 
  MatFormFieldModule, MatInputModule, MatRadioModule, 
  MatSelectModule, MatSliderModule, MatSlideToggleModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule,
     MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule],
  exports: [MatButtonModule, MatCheckboxModule, MatFormFieldModule, 
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule]
})
export class MaterialModule { }