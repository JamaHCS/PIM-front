import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { GenericTableService } from 'src/app/core/services/generic-table/generic-table.service';
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { HighlightSearchPipe } from 'src/app/core/pipes/highlight-search/highlight-search.pipe';

@Component({
  selector: 'app-generic-expanded-row',
  imports: [Toast, ButtonModule, HighlightSearchPipe],
  providers: [MessageService],
  templateUrl: './generic-expanded-row.component.html',
})
/**
 * @component GenericExpandedRowComponent
 *
 * This component represents an expanded row within a table that provides additional actions like copying content or formatting code.
 * It is used to display and manage content in an expanded view, with options to copy or format the content.
 */
export class GenericExpandedRowComponent implements OnInit, OnDestroy {
  public statusFormattingCode: boolean = false;

  /**
   * @property globalFilterValue
   * The global filter value, used to highlight the filtered text in the expanded row content.
   */
  @Input() globalFilterValue: string = '';

  /**
   * @property data
   * The data string displayed in the expanded row. It may be formatted or copied depending on the user action.
   */
  @Input() data: string = '';

  private onFormatCodeSubscription: Subscription;

  private MessageService: MessageService = inject(MessageService);
  private GenericTableService: GenericTableService = inject(GenericTableService);

  /**
   * @method ngOnInit
   * Lifecycle hook that initializes the component. Sets up the menu items based on the formatting status and available actions.
   */
  ngOnInit(): void {
    this.GenericTableService.onFormatCode().subscribe({
      next: res => {
        this.statusFormattingCode = res;
      },
    });
  }

  /**
   * @method ngOnDestroy
   * Lifecycle hook that is called when the component is about to be destroyed.
   * It unsubscribes from the `onFormatCodeSubscription` to prevent memory leaks.
   */
  ngOnDestroy(): void {
    if (this.onFormatCodeSubscription) this.onFormatCodeSubscription.unsubscribe();
  }

  /**
   * @method copyAction
   * Copies the formatted `data` content to the clipboard. Displays a notification to confirm the action.
   */
  copyAction = () =>
    navigator.clipboard
      .writeText(this.data)
      .then(() =>
        this.MessageService.add({ severity: 'info', summary: 'Info', detail: 'Cell copied to clipboard.', life: 3000 })
      );
}
