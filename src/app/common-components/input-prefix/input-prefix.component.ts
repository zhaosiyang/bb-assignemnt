import {Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'bb-input-prefix',
  templateUrl: './input-prefix.component.html',
  styleUrls: ['./input-prefix.component.scss']
})
export class InputPrefixComponent {

  @ViewChild(TemplateRef, {static: true})
  templateRef: TemplateRef<any>;

}
