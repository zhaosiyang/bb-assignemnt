import {Component, ContentChild, HostBinding} from '@angular/core';
import {InputPrefixComponent} from '../input-prefix/input-prefix.component';

@Component({
  selector: 'bb-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

  @ContentChild(InputPrefixComponent)
  inputPrefixComponent: InputPrefixComponent;

  @HostBinding('class.has-prefix')
  get hasPrefix(): boolean {
    return !!this.inputPrefixComponent;
  }

}
