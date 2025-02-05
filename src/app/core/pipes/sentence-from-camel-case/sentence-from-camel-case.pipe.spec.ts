import { SentenceFromCamelCasePipe } from './sentence-from-camel-case.pipe';

describe('SentenceFromCamelCasePipe', () => {
  let pipe: SentenceFromCamelCasePipe;

  beforeEach(() => {
    pipe = new SentenceFromCamelCasePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform camelCase to a sentence with spaces and proper capitalization', () => {
    const input = 'thisIsASentence';
    const expected = 'This Is A Sentence';
    expect(pipe.transform(input)).toBe(expected);
  });

  it('should handle strings that are already in sentence case', () => {
    const input = 'This Is A Sentence';
    const expected = 'This Is A Sentence';
    expect(pipe.transform(input)).toBe(expected);
  });

  it('should handle single-word strings', () => {
    const input = 'word';
    const expected = 'Word';
    expect(pipe.transform(input)).toBe(expected);
  });

  it('should handle strings with numbers and special characters', () => {
    const input = 'thisIsA123TestString';
    const expected = 'This Is A123 Test String';
    expect(pipe.transform(input)).toBe(expected);
  });

  it('should return an empty string if input is null', () => {
    const input = null as unknown as string;
    const expected = '';
    expect(pipe.transform(input)).toBe(expected);
  });

  it('should return an empty string if input is undefined', () => {
    const input = undefined as unknown as string;
    const expected = '';
    expect(pipe.transform(input)).toBe(expected);
  });

  it('should return an empty string if input is an empty string', () => {
    const input = '';
    const expected = '';
    expect(pipe.transform(input)).toBe(expected);
  });

  it('should handle strings with no camelCase (flat strings)', () => {
    const input = 'flatstring';
    const expected = 'Flatstring';
    expect(pipe.transform(input)).toBe(expected);
  });
});
