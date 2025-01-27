/**
 * @typedef Typing
 *
 * A union type representing the possible data types used in the application. This type ensures
 * consistency in data handling by specifying the allowed types for fields such as headers or properties.
 *
 * @type {'Int64' | 'String' | 'string' | 'guid' | 'datetime' | 'button' | 'code' | 'bool' | 'Boolean' | 'long' | 'int' | 'number' | 'dynamic'}
 *
 * @property {'Int64'} Int64 - Represents a 64-bit integer data type.
 * @property {'String'} String - Represents a string data type (used with uppercase convention).
 * @property {'string'} string - Represents a standard string data type (lowercase).
 * @property {'guid'} guid - Represents a globally unique identifier (GUID).
 * @property {'datetime'} datetime - Represents a date and time data type.
 * @property {'button'} button - Represents a button action within a table.
 * @property {'code'} code - Represents a code block, often used for formatting purposes.
 * @property {'bool'} bool - Represents a boolean (true/false) value.
 * @property {'Boolean'} bool - Represents a boolean (true/false) value.
 * @property {'long'} long - Represents a long integer data type.
 * @property {'int'} int - Represents a standard integer data type.
 * @property {'number'} number - Represents a numeric value (could be float, integer, etc.).
 * @property {'dynamic'} dynamic - Represents a dynamic type where the data type can vary.
 */
export type Typing =
  | 'Int64'
  | 'String'
  | 'string'
  | 'guid'
  | 'datetime'
  | 'button'
  | 'code'
  | 'bool'
  | 'Boolean'
  | 'long'
  | 'int'
  | 'number'
  | 'dynamic'
  | 'List`1'
  | 'ICollection`1';
