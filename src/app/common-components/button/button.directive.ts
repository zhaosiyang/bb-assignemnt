import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[bbButton]'
})
export class ButtonDirective {

  @HostBinding('class.bb-button') _ = true;

  @HostBinding('class')
  @Input()
  bbButton: 'primary' | 'secondary' = 'primary';

  constructor() { }

}
