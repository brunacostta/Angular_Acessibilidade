import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KeyboardManagerDirective } from './keyboard-manager-directives';
import { keyboardManagedItemDirective } from './keyboard-managed-item.directive';

@NgModule({
  declarations: [KeyboardManagerDirective, keyboardManagedItemDirective],
  imports: [CommonModule],
  exports: [KeyboardManagerDirective, keyboardManagedItemDirective],
})
export class KeyboardManagerModule {}
