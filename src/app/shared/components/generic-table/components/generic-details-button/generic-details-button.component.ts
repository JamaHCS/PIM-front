import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { GenericObject } from 'src/app/core/types/GenericObject.type';
import { DialogModule } from 'primeng/dialog';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-generic-details-button',
  imports: [ButtonModule, DialogModule, JsonPipe],
  templateUrl: './generic-details-button.component.html',
})
/**
 * @component GenericDetailsButtonComponent
 *
 * This component represents a button that, when clicked, opens a dialog displaying detailed information.
 * The detailed information is passed as an input property in the form of a `GenericObject`.
 */
export class GenericDetailsButtonComponent {
  public visible: boolean = false;

  /**
   * @property data
   * The detailed data to be displayed in the dialog. This is passed as an input from the parent component.
   */
  @Input() data!: GenericObject;

  /**
   * @method showDialog
   * This method sets the visibility flag to `true`, which opens the dialog.
   */
  showDialog() {
    this.visible = true;
  }
}
