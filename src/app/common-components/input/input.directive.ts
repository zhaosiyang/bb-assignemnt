import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: 'input[bbInput]'
})
export class InputDirective {

  @HostBinding('class.bb-input')
  _ = true;

}
