import {Component, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'bb-input-suffix',
  templateUrl: './input-suffix.component.html',
  styleUrls: ['./input-suffix.component.scss']
})
export class InputSuffixComponent {
  @ViewChild(TemplateRef, {static: true})
  templateRef: TemplateRef<any>;
}
