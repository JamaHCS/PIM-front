import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [CommonModule],
  template: `<h3 [ngClass]="{ 'border-active': borderEnabled }" class="title-generic">{{ content }}</h3>`,
})
/**
 * @class TitleComponent
 *
 * A simple component that displays a title using the provided content.
 * It renders the content within an `<h3>` HTML element.
 */
export class TitleComponent {
  /**
   * @property {string} content
   * The text content to display as the title.
   * This input binds to the content displayed within the `<h3>` element.
   */
  @Input() content: string = '';

  /**
   * @property {boolean} borderEnabled
   * Controls whether a border is displayed under the expanded row.
   * If set to `true`, a border will be added; if `false`, the border will be hidden.
   * Defaults to `false`.
   */
  @Input() borderEnabled: boolean = false;
}
