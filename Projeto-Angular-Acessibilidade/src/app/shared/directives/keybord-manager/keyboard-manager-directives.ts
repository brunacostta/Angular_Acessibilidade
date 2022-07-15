import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList
} from '@angular/core';
import { keyboardManagedItemDirective } from './keyboard-managed-item.directive';

@Directive({
  selector: '[appKm]',
})
export class KeyboardManagerDirective {
  @ContentChildren(keyboardManagedItemDirective)
  public items: QueryList<keyboardManagedItemDirective> = null;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    switch (event.key) {
      case 'ArrowUp':
        console.log('up');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
      case 'ArrowDown':
        console.log('down');
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowLeft':
        console.log('left');
        this.moveFocus(ArrowDirection.LEFT).focus();
        break;
      case 'ArrowRight':
        console.log('right');
        this.moveFocus(ArrowDirection.RIGHT).focus();
        break;
    }
  }

  public moveFocus(direction: ArrowDirection): keyboardManagedItemDirective {
    const items = this.items.toArray();
    const curentSelectIndex = items.findIndex(item => item.isFocused());
    const targetElementFocus = items[curentSelectIndex + direction];
    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction == ArrowDirection.LEFT
    ? items[items.length - 1]
    : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1
}
