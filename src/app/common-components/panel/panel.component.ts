import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bb-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent implements OnInit {

  @Input()
  headerSize: 'large' | 'medium' | 'small' = 'medium';

  @Input()
  iconSrc: string;

  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  get headerHeight(): string {
    if (this.headerSize === 'large') {
      return '4rem';
    }
    if (this.headerSize === 'small') {
      return '2rem';
    }
    return '3rem';
  }

}
