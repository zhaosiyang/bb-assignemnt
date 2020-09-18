import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';

const components = [
  PanelComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components],
})
export class CommonComponentsModule { }
