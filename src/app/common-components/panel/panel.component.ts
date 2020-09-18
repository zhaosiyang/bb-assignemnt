import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-panel',
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
      return '3rem';
    }
    if (this.headerSize === 'small') {
      return '1rem';
    }
    return '2rem';
  }

}
