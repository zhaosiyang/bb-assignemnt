import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import {SvgLoaderComponent} from './svg-loader/svg-loader.component';
import {InlineSVGModule} from 'ng-inline-svg';
import {ButtonDirective} from './button/button.directive';
import {InputDirective} from './input/input.directive';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputPrefixComponent } from './input-prefix/input-prefix.component';

const components = [
  PanelComponent,
  SvgLoaderComponent,
  ButtonDirective,
  InputDirective,
  InputPrefixComponent,
  FormFieldComponent,
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    InlineSVGModule,
  ],
  exports: [...components],
})
export class CommonComponentsModule { }
