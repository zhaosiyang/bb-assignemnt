import {Component, ContentChild, HostBinding} from '@angular/core';
import {InputPrefixComponent} from '../input-prefix/input-prefix.component';
import {InputSuffixComponent} from '../input-suffix/input-suffix.component';

@Component({
  selector: 'bb-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

  @ContentChild(InputPrefixComponent)
  inputPrefixComponent: InputPrefixComponent;

  @ContentChild(InputSuffixComponent)
  inputSuffixComponent: InputSuffixComponent;

  @HostBinding('class.has-prefix')
  get hasPrefix(): boolean {
    return !!this.inputPrefixComponent;
  }

  @HostBinding('class.has-suffix')
  get hasSuffix(): boolean {
    return !!this.inputSuffixComponent;
  }

}
