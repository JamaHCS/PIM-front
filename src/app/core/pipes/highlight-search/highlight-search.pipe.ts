import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlightSearch',
})
/**
 * @pipe HighlightSearchPipe
 *
 * A pipe that highlights search terms in a string by wrapping matching text in a span with a specified CSS class.
 */
export class HighlightSearchPipe implements PipeTransform {
  /**
   * @constructor
   * Injects the DomSanitizer to securely bind HTML.
   *
   * @param {DomSanitizer} sanitizer - The Angular DomSanitizer used to bypass security and trust the generated HTML.
   */
  constructor(private sanitizer: DomSanitizer) {}

  /**
   * @method
   * Transforms the input string by highlighting the search term using a span element with the 'highlight' class.
   *
   * @param {string} value - The original string to search within.
   * @param {string} search - The search term to highlight.
   * @returns {SafeHtml} The transformed string with the search term highlighted, or the original string if no search term is provided.
   *
   * @example
   * // returns '<span class="highlight">example</span> text'
   * transform('example text', 'example');
   */
  transform(value: string, search: string): SafeHtml {
    if (!value || !search) return value;
    if (search === '') return value;

    value = '' + value;

    const regex = new RegExp(`(${search})`, 'gi');

    const highlighted: string = value.replace(regex, `<span class="highlight">$1</span>`);

    return this.sanitizer.bypassSecurityTrustHtml(highlighted);
  }
}
