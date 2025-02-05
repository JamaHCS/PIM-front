/**
 * @typedef GenericObject
 *
 * A type that represents a generic object with string keys and values of unknown types.
 * It is useful for scenarios where the shape of the object is dynamic or unknown at compile time.
 *
 * @type {Record<string, unknown>}
 */
export type GenericObject = Record<string, unknown>;
