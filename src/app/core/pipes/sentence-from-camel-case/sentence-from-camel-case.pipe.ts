import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceFromCamelCase',
})
/**
 * @pipe SentenceFromCamelCasePipe
 *
 * A pipe that transforms a camelCase string into a sentence with spaces and proper capitalization.
 */
export class SentenceFromCamelCasePipe implements PipeTransform {
  /**
   * @method
   * Transforms a camelCase string into a sentence by inserting spaces before capital letters and capitalizing the first letter of the resulting sentence.
   *
   * @param {string} value - The camelCase string to transform.
   * @returns {string} The transformed sentence with spaces and proper capitalization.
   *
   * @example
   * // returns 'This Is A Sentence'
   * transform('thisIsASentence');
   */
  transform = (value: string): string =>
    !value
      ? ''
      : value
          .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
          .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
          .replace(/^./, str => str.toUpperCase());
}
