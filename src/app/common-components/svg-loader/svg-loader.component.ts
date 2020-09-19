import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'svg-loader',
  templateUrl: './svg-loader.component.html',
  styleUrls: ['./svg-loader.component.scss']
})
export class SvgLoaderComponent {

  @Input()
  src: string;

  @Input()
  color: string;

  @HostBinding('style.height.px')
  @HostBinding('style.width.px')
  @Input()
  size = 24;

}
