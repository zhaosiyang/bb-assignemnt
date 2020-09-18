import {animate, style, transition, trigger} from '@angular/animations';

export const createFadeInAnimation = (name = 'fadeIn', time = 500) => {
  return trigger(name, [
    transition(':enter', [
      style({opacity: 0}),
      animate(`${time}ms ease-out`, style({opacity: 1}))
    ])
  ]);
};

export const createFadeOutAnimation = (name = 'fadeOut', time = 500) => {
  return trigger(name, [
    transition(':leave', [
      animate(`${time}ms ease-out`, style({opacity: 0}))
    ])
  ]);
};
