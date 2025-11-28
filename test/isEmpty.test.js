/**
 * AI-Assisted Test Suite for isEmpty.js
 * 
 * Testing approach: Equivalence Partitioning and Boundary Value Analysis
 * 
 * Function: isEmpty(value)
 * Purpose: Checks if value is an empty object, collection, map, or set.
 * 
 * Documentation states:
 * - Objects are considered empty if they have no own enumerable string keyed properties.
 * - Array-like values (arguments, arrays, buffers, strings, jQuery-like) are empty if length === 0.
 * - Maps and sets are empty if size === 0.
 * - null returns true
 * - true (boolean) returns true (booleans are considered "empty")
 * - 1 (number) returns true (numbers are considered "empty")
 * 
 * Equivalence Classes:
 * EC1: null value => true
 * EC2: undefined value => true
 * EC3: Boolean values => true (booleans have no iterable properties)
 * EC4: Number values => true (numbers have no iterable properties)
 * EC5: Symbol values => true (symbols have no iterable properties)
 * EC6: Empty arrays => true
 * EC7: Non-empty arrays => false
 * EC8: Empty strings => true
 * EC9: Non-empty strings => false
 * EC10: Empty objects => true
 * EC11: Non-empty objects => false
 * EC12: Empty Map => true
 * EC13: Non-empty Map => false
 * EC14: Empty Set => true
 * EC15: Non-empty Set => false
 * EC16: Empty Buffer => true
 * EC17: Non-empty Buffer => false
 * EC18: Empty TypedArray => true
 * EC19: Non-empty TypedArray => false
 * EC20: Empty arguments object => true
 * EC21: Non-empty arguments object => false
 * EC22: Functions => true (functions are not iterable collections)
 * EC23: Prototype objects
 */

import isEmpty from '../src/isEmpty.js';

describe('isEmpty.js - AI-Assisted Test Suite', () => {
  
  // ==========================================
  // EC1: null value
  // ==========================================
  describe('EC1: null value', () => {
    it('should return true for null: isEmpty(null) => true', () => {
      expect(isEmpty(null)).toBe(true);
    });
  });

  // ==========================================
  // EC2: undefined value
  // ==========================================
  describe('EC2: undefined value', () => {
    it('should return true for undefined: isEmpty(undefined) => true', () => {
      expect(isEmpty(undefined)).toBe(true);
    });

    it('should return true when called with no arguments', () => {
      expect(isEmpty()).toBe(true);
    });
  });

  // ==========================================
  // EC3: Boolean values (per docs: isEmpty(true) => true)
  // ==========================================
  describe('EC3: Boolean values', () => {
    it('should return true for true: isEmpty(true) => true', () => {
      // Per documentation example: isEmpty(true) => true
      expect(isEmpty(true)).toBe(true);
    });

    it('should return true for false', () => {
      expect(isEmpty(false)).toBe(true);
    });

    it('should return false for Boolean object with no own properties', () => {
      // Boxed Boolean is an object - empty object
      expect(isEmpty(new Boolean(true))).toBe(true);
    });

    it('should return false for Boolean object with own properties', () => {
      const bool = new Boolean(false);
      bool.custom = 'value';
      expect(isEmpty(bool)).toBe(false);
    });
  });

  // ==========================================
  // EC4: Number values (per docs: isEmpty(1) => true)
  // ==========================================
  describe('EC4: Number values', () => {
    it('should return true for positive number: isEmpty(1) => true', () => {
      // Per documentation example: isEmpty(1) => true
      expect(isEmpty(1)).toBe(true);
    });

    it('should return true for zero', () => {
      expect(isEmpty(0)).toBe(true);
    });

    it('should return true for negative zero', () => {
      expect(isEmpty(-0)).toBe(true);
    });

    it('should return true for negative number', () => {
      expect(isEmpty(-1)).toBe(true);
    });

    it('should return true for float', () => {
      expect(isEmpty(3.14)).toBe(true);
    });

    it('should return true for Infinity', () => {
      expect(isEmpty(Infinity)).toBe(true);
    });

    it('should return true for -Infinity', () => {
      expect(isEmpty(-Infinity)).toBe(true);
    });

    it('should return true for NaN', () => {
      expect(isEmpty(NaN)).toBe(true);
    });

    it('should return true for Number.MAX_VALUE', () => {
      expect(isEmpty(Number.MAX_VALUE)).toBe(true);
    });

    it('should return true for Number.MIN_VALUE', () => {
      expect(isEmpty(Number.MIN_VALUE)).toBe(true);
    });

    it('should return true for Number object with no own properties', () => {
      expect(isEmpty(new Number(42))).toBe(true);
    });

    it('should return false for Number object with own properties', () => {
      const num = new Number(42);
      num.custom = 'value';
      expect(isEmpty(num)).toBe(false);
    });
  });

  // ==========================================
  // EC5: Symbol values
  // ==========================================
  describe('EC5: Symbol values', () => {
    it('should return true for Symbol', () => {
      expect(isEmpty(Symbol('test'))).toBe(true);
    });

    it('should return true for Symbol without description', () => {
      expect(isEmpty(Symbol())).toBe(true);
    });

    it('should return true for well-known Symbol', () => {
      expect(isEmpty(Symbol.iterator)).toBe(true);
    });
  });

  // ==========================================
  // EC6: Empty arrays
  // ==========================================
  describe('EC6: Empty arrays', () => {
    it('should return true for empty array', () => {
      expect(isEmpty([])).toBe(true);
    });

    it('should return true for Array constructor with no elements', () => {
      expect(isEmpty(new Array())).toBe(true);
    });

    it('should return true for Array.from with empty input', () => {
      expect(isEmpty(Array.from(''))).toBe(true);
    });
  });

  // ==========================================
  // EC7: Non-empty arrays
  // ==========================================
  describe('EC7: Non-empty arrays', () => {
    it('should return false for array with elements: isEmpty([1, 2, 3]) => false', () => {
      // Per documentation example
      expect(isEmpty([1, 2, 3])).toBe(false);
    });

    it('should return false for array with single element', () => {
      expect(isEmpty([1])).toBe(false);
    });

    it('should return false for array with null element', () => {
      expect(isEmpty([null])).toBe(false);
    });

    it('should return false for array with undefined element', () => {
      expect(isEmpty([undefined])).toBe(false);
    });

    it('should return false for array with empty string element', () => {
      expect(isEmpty([''])).toBe(false);
    });

    it('should return false for array with zero element', () => {
      expect(isEmpty([0])).toBe(false);
    });

    it('should return false for array with false element', () => {
      expect(isEmpty([false])).toBe(false);
    });

    it('should return false for sparse array with holes', () => {
      // eslint-disable-next-line no-sparse-arrays
      const sparse = [, , ,];
      // Sparse arrays have length > 0
      expect(isEmpty(sparse)).toBe(false);
    });

    it('should return false for array with object element', () => {
      expect(isEmpty([{}])).toBe(false);
    });

    it('should return false for nested empty arrays', () => {
      expect(isEmpty([[]])).toBe(false);
    });

    it('should return false for array created with new Array(3)', () => {
      // Array(3) creates sparse array with length 3
      expect(isEmpty(new Array(3))).toBe(false);
    });
  });

  // ==========================================
  // EC8: Empty strings
  // ==========================================
  describe('EC8: Empty strings', () => {
    it('should return true for empty string', () => {
      expect(isEmpty('')).toBe(true);
    });

    it('should return true for String object with empty string', () => {
      expect(isEmpty(new String(''))).toBe(true);
    });
  });

  // ==========================================
  // EC9: Non-empty strings
  // ==========================================
  describe('EC9: Non-empty strings', () => {
    it('should return false for non-empty string: isEmpty("abc") => false', () => {
      // Per documentation example
      expect(isEmpty('abc')).toBe(false);
    });

    it('should return false for single character string', () => {
      expect(isEmpty('a')).toBe(false);
    });

    it('should return false for whitespace string', () => {
      expect(isEmpty(' ')).toBe(false);
    });

    it('should return false for tab string', () => {
      expect(isEmpty('\t')).toBe(false);
    });

    it('should return false for newline string', () => {
      expect(isEmpty('\n')).toBe(false);
    });

    it('should return false for string "null"', () => {
      expect(isEmpty('null')).toBe(false);
    });

    it('should return false for string "undefined"', () => {
      expect(isEmpty('undefined')).toBe(false);
    });

    it('should return false for string "0"', () => {
      expect(isEmpty('0')).toBe(false);
    });

    it('should return false for string "false"', () => {
      expect(isEmpty('false')).toBe(false);
    });

    it('should return false for String object with value', () => {
      expect(isEmpty(new String('hello'))).toBe(false);
    });

    it('should return false for emoji string', () => {
      expect(isEmpty('😀')).toBe(false);
    });

    it('should return false for unicode string', () => {
      expect(isEmpty('\u0000')).toBe(false);
    });
  });

  // ==========================================
  // EC10: Empty objects
  // ==========================================
  describe('EC10: Empty objects', () => {
    it('should return true for empty object literal', () => {
      expect(isEmpty({})).toBe(true);
    });

    it('should return true for Object.create(null)', () => {
      expect(isEmpty(Object.create(null))).toBe(true);
    });

    it('should return true for new Object()', () => {
      expect(isEmpty(new Object())).toBe(true);
    });

    it('should return true for object with only inherited properties', () => {
      const proto = { inherited: 'value' };
      const obj = Object.create(proto);
      // Object has no OWN properties, only inherited
      expect(isEmpty(obj)).toBe(true);
    });

    it('should return true for object with non-enumerable property', () => {
      const obj = {};
      Object.defineProperty(obj, 'hidden', {
        value: 'secret',
        enumerable: false
      });
      // Non-enumerable properties don't count
      expect(isEmpty(obj)).toBe(true);
    });

    it('should return true for object with Symbol key only', () => {
      const sym = Symbol('key');
      const obj = { [sym]: 'value' };
      // Symbol keys are not "string keyed properties"
      expect(isEmpty(obj)).toBe(true);
    });
  });

  // ==========================================
  // EC11: Non-empty objects
  // ==========================================
  describe('EC11: Non-empty objects', () => {
    it('should return false for object with property: isEmpty({ a: 1 }) => false', () => {
      // Per documentation example
      expect(isEmpty({ 'a': 1 })).toBe(false);
    });

    it('should return false for object with single property', () => {
      expect(isEmpty({ key: 'value' })).toBe(false);
    });

    it('should return false for object with multiple properties', () => {
      expect(isEmpty({ a: 1, b: 2, c: 3 })).toBe(false);
    });

    it('should return false for object with null value property', () => {
      expect(isEmpty({ key: null })).toBe(false);
    });

    it('should return false for object with undefined value property', () => {
      expect(isEmpty({ key: undefined })).toBe(false);
    });

    it('should return false for object with empty string key', () => {
      expect(isEmpty({ '': 'value' })).toBe(false);
    });

    it('should return false for object with numeric string key', () => {
      expect(isEmpty({ '0': 'value' })).toBe(false);
    });

    it('should return false for nested empty object', () => {
      expect(isEmpty({ nested: {} })).toBe(false);
    });

    it('should return false for object with function property', () => {
      expect(isEmpty({ fn: () => {} })).toBe(false);
    });
  });

  // ==========================================
  // EC12: Empty Map
  // ==========================================
  describe('EC12: Empty Map', () => {
    it('should return true for empty Map', () => {
      expect(isEmpty(new Map())).toBe(true);
    });

    it('should return true for Map cleared after adding', () => {
      const map = new Map([['key', 'value']]);
      map.clear();
      expect(isEmpty(map)).toBe(true);
    });
  });

  // ==========================================
  // EC13: Non-empty Map
  // ==========================================
  describe('EC13: Non-empty Map', () => {
    it('should return false for Map with single entry', () => {
      expect(isEmpty(new Map([['key', 'value']]))).toBe(false);
    });

    it('should return false for Map with multiple entries', () => {
      const map = new Map();
      map.set('a', 1);
      map.set('b', 2);
      expect(isEmpty(map)).toBe(false);
    });

    it('should return false for Map with null key', () => {
      expect(isEmpty(new Map([[null, 'value']]))).toBe(false);
    });

    it('should return false for Map with undefined key', () => {
      expect(isEmpty(new Map([[undefined, 'value']]))).toBe(false);
    });

    it('should return false for Map with object key', () => {
      const objKey = {};
      expect(isEmpty(new Map([[objKey, 'value']]))).toBe(false);
    });
  });

  // ==========================================
  // EC14: Empty Set
  // ==========================================
  describe('EC14: Empty Set', () => {
    it('should return true for empty Set', () => {
      expect(isEmpty(new Set())).toBe(true);
    });

    it('should return true for Set cleared after adding', () => {
      const set = new Set([1, 2, 3]);
      set.clear();
      expect(isEmpty(set)).toBe(true);
    });
  });

  // ==========================================
  // EC15: Non-empty Set
  // ==========================================
  describe('EC15: Non-empty Set', () => {
    it('should return false for Set with single element', () => {
      expect(isEmpty(new Set([1]))).toBe(false);
    });

    it('should return false for Set with multiple elements', () => {
      expect(isEmpty(new Set([1, 2, 3]))).toBe(false);
    });

    it('should return false for Set with null element', () => {
      expect(isEmpty(new Set([null]))).toBe(false);
    });

    it('should return false for Set with undefined element', () => {
      expect(isEmpty(new Set([undefined]))).toBe(false);
    });

    it('should return false for Set with object element', () => {
      expect(isEmpty(new Set([{}]))).toBe(false);
    });
  });

  // ==========================================
  // EC16: Empty Buffer (Node.js specific)
  // ==========================================
  describe('EC16: Empty Buffer', () => {
    it('should return true for empty Buffer', () => {
      expect(isEmpty(Buffer.alloc(0))).toBe(true);
    });

    it('should return true for Buffer.from empty array', () => {
      expect(isEmpty(Buffer.from([]))).toBe(true);
    });

    it('should return true for Buffer.from empty string', () => {
      expect(isEmpty(Buffer.from(''))).toBe(true);
    });
  });

  // ==========================================
  // EC17: Non-empty Buffer (Node.js specific)
  // ==========================================
  describe('EC17: Non-empty Buffer', () => {
    it('should return false for Buffer with data', () => {
      expect(isEmpty(Buffer.from([1, 2, 3]))).toBe(false);
    });

    it('should return false for Buffer.alloc with size', () => {
      expect(isEmpty(Buffer.alloc(1))).toBe(false);
    });

    it('should return false for Buffer.from string', () => {
      expect(isEmpty(Buffer.from('hello'))).toBe(false);
    });
  });

  // ==========================================
  // EC18: Empty TypedArray
  // ==========================================
  describe('EC18: Empty TypedArray', () => {
    it('should return true for empty Uint8Array', () => {
      expect(isEmpty(new Uint8Array(0))).toBe(true);
    });

    it('should return true for empty Int8Array', () => {
      expect(isEmpty(new Int8Array(0))).toBe(true);
    });

    it('should return true for empty Uint16Array', () => {
      expect(isEmpty(new Uint16Array(0))).toBe(true);
    });

    it('should return true for empty Int16Array', () => {
      expect(isEmpty(new Int16Array(0))).toBe(true);
    });

    it('should return true for empty Uint32Array', () => {
      expect(isEmpty(new Uint32Array(0))).toBe(true);
    });

    it('should return true for empty Int32Array', () => {
      expect(isEmpty(new Int32Array(0))).toBe(true);
    });

    it('should return true for empty Float32Array', () => {
      expect(isEmpty(new Float32Array(0))).toBe(true);
    });

    it('should return true for empty Float64Array', () => {
      expect(isEmpty(new Float64Array(0))).toBe(true);
    });

    it('should return true for empty BigInt64Array', () => {
      expect(isEmpty(new BigInt64Array(0))).toBe(true);
    });

    it('should return true for empty BigUint64Array', () => {
      expect(isEmpty(new BigUint64Array(0))).toBe(true);
    });
  });

  // ==========================================
  // EC19: Non-empty TypedArray
  // ==========================================
  describe('EC19: Non-empty TypedArray', () => {
    it('should return false for Uint8Array with data', () => {
      expect(isEmpty(new Uint8Array([1, 2, 3]))).toBe(false);
    });

    it('should return false for Int8Array with data', () => {
      expect(isEmpty(new Int8Array([1]))).toBe(false);
    });

    it('should return false for Uint16Array with data', () => {
      expect(isEmpty(new Uint16Array([1]))).toBe(false);
    });

    it('should return false for Int16Array with data', () => {
      expect(isEmpty(new Int16Array([1]))).toBe(false);
    });

    it('should return false for Uint32Array with data', () => {
      expect(isEmpty(new Uint32Array([1]))).toBe(false);
    });

    it('should return false for Int32Array with data', () => {
      expect(isEmpty(new Int32Array([1]))).toBe(false);
    });

    it('should return false for Float32Array with data', () => {
      expect(isEmpty(new Float32Array([1.5]))).toBe(false);
    });

    it('should return false for Float64Array with data', () => {
      expect(isEmpty(new Float64Array([1.5]))).toBe(false);
    });

    it('should return false for BigInt64Array with data', () => {
      expect(isEmpty(new BigInt64Array([BigInt(1)]))).toBe(false);
    });

    it('should return false for BigUint64Array with data', () => {
      expect(isEmpty(new BigUint64Array([BigInt(1)]))).toBe(false);
    });

    it('should return false for TypedArray with size 1 (zeros)', () => {
      // Even if the content is zeros, length > 0 means not empty
      expect(isEmpty(new Uint8Array(1))).toBe(false);
    });
  });

  // ==========================================
  // EC20: Empty arguments object
  // ==========================================
  describe('EC20: Empty arguments object', () => {
    it('should return true for empty arguments', () => {
      function getArgs() {
        return arguments;
      }
      expect(isEmpty(getArgs())).toBe(true);
    });
  });

  // ==========================================
  // EC21: Non-empty arguments object
  // ==========================================
  describe('EC21: Non-empty arguments object', () => {
    it('should return false for arguments with single element', () => {
      function getArgs() {
        return arguments;
      }
      expect(isEmpty(getArgs(1))).toBe(false);
    });

    it('should return false for arguments with multiple elements', () => {
      function getArgs() {
        return arguments;
      }
      expect(isEmpty(getArgs(1, 2, 3))).toBe(false);
    });

    it('should return false for arguments with null element', () => {
      function getArgs() {
        return arguments;
      }
      expect(isEmpty(getArgs(null))).toBe(false);
    });

    it('should return false for arguments with undefined element', () => {
      function getArgs() {
        return arguments;
      }
      expect(isEmpty(getArgs(undefined))).toBe(false);
    });
  });

  // ==========================================
  // EC22: Functions
  // ==========================================
  describe('EC22: Functions', () => {
    it('should return true for function', () => {
      // Functions are not iterable collections
      expect(isEmpty(() => {})).toBe(true);
    });

    it('should return true for named function', () => {
      function namedFn() {}
      expect(isEmpty(namedFn)).toBe(true);
    });

    it('should return true for async function', () => {
      expect(isEmpty(async () => {})).toBe(true);
    });

    it('should return true for generator function', () => {
      function* genFn() {}
      expect(isEmpty(genFn)).toBe(true);
    });

    it('should return true for class constructor', () => {
      class MyClass {}
      expect(isEmpty(MyClass)).toBe(true);
    });

    it('should return true for built-in function', () => {
      expect(isEmpty(Array.isArray)).toBe(true);
    });

    it('should return false for function with own enumerable properties', () => {
      // Functions are objects, and per docs: "Objects are considered empty if they 
      // have no own enumerable string keyed properties."
      // A function with added properties has own enumerable properties, so not empty.
      const fn = () => {};
      fn.custom = 'value';
      expect(isEmpty(fn)).toBe(false);
    });
  });

  // ==========================================
  // EC23: Prototype objects
  // ==========================================
  describe('EC23: Prototype objects', () => {
    it('should return true for Object.prototype', () => {
      expect(isEmpty(Object.prototype)).toBe(true);
    });

    it('should return true for Array.prototype', () => {
      expect(isEmpty(Array.prototype)).toBe(true);
    });

    it('should return true for Function.prototype', () => {
      expect(isEmpty(Function.prototype)).toBe(true);
    });

    it('should return true for custom class prototype', () => {
      class MyClass {
        myMethod() {}
      }
      // Prototype has method but those are not enumerable own properties
      expect(isEmpty(MyClass.prototype)).toBe(true);
    });
  });

  // ==========================================
  // EC24: Date objects
  // ==========================================
  describe('EC24: Date objects', () => {
    it('should return true for Date object with no own properties', () => {
      expect(isEmpty(new Date())).toBe(true);
    });

    it('should return false for Date object with own properties', () => {
      const date = new Date();
      date.custom = 'value';
      expect(isEmpty(date)).toBe(false);
    });

    it('should return true for invalid Date', () => {
      expect(isEmpty(new Date('invalid'))).toBe(true);
    });
  });

  // ==========================================
  // EC25: RegExp objects
  // ==========================================
  describe('EC25: RegExp objects', () => {
    it('should return true for RegExp with no own properties', () => {
      expect(isEmpty(/test/)).toBe(true);
    });

    it('should return true for RegExp constructor', () => {
      expect(isEmpty(new RegExp('test'))).toBe(true);
    });

    it('should return false for RegExp with own properties', () => {
      const regex = /test/;
      regex.custom = 'value';
      expect(isEmpty(regex)).toBe(false);
    });
  });

  // ==========================================
  // EC26: Error objects
  // ==========================================
  describe('EC26: Error objects', () => {
    it('should return true for Error object with no extra own properties', () => {
      // Error objects have message, name, stack as non-enumerable
      expect(isEmpty(new Error('test'))).toBe(true);
    });

    it('should return false for Error object with own enumerable property', () => {
      const error = new Error('test');
      error.code = 'ERR_TEST';
      expect(isEmpty(error)).toBe(false);
    });

    it('should return true for TypeError', () => {
      expect(isEmpty(new TypeError('test'))).toBe(true);
    });

    it('should return true for RangeError', () => {
      expect(isEmpty(new RangeError('test'))).toBe(true);
    });
  });

  // ==========================================
  // EC27: WeakMap and WeakSet
  // ==========================================
  describe('EC27: WeakMap and WeakSet', () => {
    it('should return true for empty WeakMap', () => {
      // WeakMap doesn't have size property, treated as regular object
      expect(isEmpty(new WeakMap())).toBe(true);
    });

    it('should return true for WeakMap with entries', () => {
      // Can't enumerate WeakMap, so it appears empty
      const wm = new WeakMap();
      wm.set({}, 'value');
      expect(isEmpty(wm)).toBe(true);
    });

    it('should return true for empty WeakSet', () => {
      expect(isEmpty(new WeakSet())).toBe(true);
    });

    it('should return true for WeakSet with entries', () => {
      // Can't enumerate WeakSet
      const ws = new WeakSet();
      ws.add({});
      expect(isEmpty(ws)).toBe(true);
    });
  });

  // ==========================================
  // EC28: BigInt values
  // ==========================================
  describe('EC28: BigInt values', () => {
    it('should return true for BigInt zero', () => {
      expect(isEmpty(BigInt(0))).toBe(true);
    });

    it('should return true for positive BigInt', () => {
      expect(isEmpty(BigInt(123))).toBe(true);
    });

    it('should return true for negative BigInt', () => {
      expect(isEmpty(BigInt(-123))).toBe(true);
    });

    it('should return true for large BigInt', () => {
      expect(isEmpty(BigInt('12345678901234567890'))).toBe(true);
    });
  });

  // ==========================================
  // EC29: Array-like objects (with length property)
  // ==========================================
  describe('EC29: Array-like objects', () => {
    it('should return false for plain object with length 0 (not a recognized array-like type)', () => {
      // Per docs: only arguments, arrays, buffers, strings, jQuery-like (with splice) are 
      // treated as array-like for emptiness check. Plain object with just length is treated
      // as regular object with one own property.
      const arrayLike = { length: 0 };
      expect(isEmpty(arrayLike)).toBe(false);
    });

    it('should return false for array-like object with length > 0 and elements', () => {
      const arrayLike = { 0: 'a', 1: 'b', length: 2 };
      expect(isEmpty(arrayLike)).toBe(false);
    });

    it('should return false for array-like object with length > 0 but no indexed properties', () => {
      // This has a length property but no actual indexed elements
      // It still has the 'length' property as own enumerable
      const arrayLike = { length: 5 };
      // Has own property 'length', so not empty as an object
      expect(isEmpty(arrayLike)).toBe(false);
    });

    it('should return true for jQuery-like object with length 0 (has splice)', () => {
      // jQuery-like: has length AND splice function
      // Per docs: jQuery-like collections are empty if length === 0
      const jQueryLike = { length: 0, splice: Array.prototype.splice };
      expect(isEmpty(jQueryLike)).toBe(true);
    });

    it('should return false for jQuery-like object with length > 0', () => {
      const jQueryLike = { 0: 'elem', length: 1, splice: Array.prototype.splice };
      expect(isEmpty(jQueryLike)).toBe(false);
    });
  });

  // ==========================================
  // Boundary Value Analysis
  // ==========================================
  describe('Boundary Value Analysis', () => {
    describe('BVA: Array length boundaries', () => {
      it('BVA: array length = 0 => true', () => {
        expect(isEmpty([])).toBe(true);
      });

      it('BVA: array length = 1 => false', () => {
        expect(isEmpty([1])).toBe(false);
      });

      it('BVA: string length = 0 => true', () => {
        expect(isEmpty('')).toBe(true);
      });

      it('BVA: string length = 1 => false', () => {
        expect(isEmpty('a')).toBe(false);
      });
    });

    describe('BVA: Map/Set size boundaries', () => {
      it('BVA: Map size = 0 => true', () => {
        expect(isEmpty(new Map())).toBe(true);
      });

      it('BVA: Map size = 1 => false', () => {
        expect(isEmpty(new Map([['k', 'v']]))).toBe(false);
      });

      it('BVA: Set size = 0 => true', () => {
        expect(isEmpty(new Set())).toBe(true);
      });

      it('BVA: Set size = 1 => false', () => {
        expect(isEmpty(new Set([1]))).toBe(false);
      });
    });

    describe('BVA: Object property count boundaries', () => {
      it('BVA: object with 0 own properties => true', () => {
        expect(isEmpty({})).toBe(true);
      });

      it('BVA: object with 1 own property => false', () => {
        expect(isEmpty({ a: 1 })).toBe(false);
      });
    });

    describe('BVA: Buffer/TypedArray length boundaries', () => {
      it('BVA: Buffer length = 0 => true', () => {
        expect(isEmpty(Buffer.alloc(0))).toBe(true);
      });

      it('BVA: Buffer length = 1 => false', () => {
        expect(isEmpty(Buffer.alloc(1))).toBe(false);
      });

      it('BVA: Uint8Array length = 0 => true', () => {
        expect(isEmpty(new Uint8Array(0))).toBe(true);
      });

      it('BVA: Uint8Array length = 1 => false', () => {
        expect(isEmpty(new Uint8Array(1))).toBe(false);
      });
    });
  });

  // ==========================================
  // Edge Cases and Special Scenarios
  // ==========================================
  describe('Edge Cases and Special Scenarios', () => {
    it('should handle object with getter that throws', () => {
      const obj = {};
      Object.defineProperty(obj, 'prop', {
        get: () => { throw new Error('getter error'); },
        enumerable: true
      });
      // Property exists and is enumerable, so object is not empty
      expect(isEmpty(obj)).toBe(false);
    });

    it('should handle frozen empty object', () => {
      const frozen = Object.freeze({});
      expect(isEmpty(frozen)).toBe(true);
    });

    it('should handle frozen non-empty object', () => {
      const frozen = Object.freeze({ a: 1 });
      expect(isEmpty(frozen)).toBe(false);
    });

    it('should handle sealed empty object', () => {
      const sealed = Object.seal({});
      expect(isEmpty(sealed)).toBe(true);
    });

    it('should handle sealed non-empty object', () => {
      const sealed = Object.seal({ a: 1 });
      expect(isEmpty(sealed)).toBe(false);
    });

    it('should handle object with only prototype chain properties', () => {
      function Parent() {}
      Parent.prototype.inherited = 'value';
      const child = new Parent();
      // No own enumerable properties
      expect(isEmpty(child)).toBe(true);
    });

    it('should handle object with constructor property', () => {
      const obj = { constructor: 'custom' };
      expect(isEmpty(obj)).toBe(false);
    });

    it('should handle ArrayBuffer', () => {
      // ArrayBuffer is not array-like (no length enumerable)
      expect(isEmpty(new ArrayBuffer(0))).toBe(true);
    });

    it('should handle DataView', () => {
      const buffer = new ArrayBuffer(8);
      const view = new DataView(buffer);
      expect(isEmpty(view)).toBe(true);
    });

    it('should handle Promise', () => {
      const promise = new Promise(() => {});
      expect(isEmpty(promise)).toBe(true);
    });

    it('should handle class instance with no own properties', () => {
      class MyClass {
        myMethod() { return 'value'; }
      }
      const instance = new MyClass();
      expect(isEmpty(instance)).toBe(true);
    });

    it('should handle class instance with own properties', () => {
      class MyClass {
        constructor() {
          this.value = 1;
        }
      }
      const instance = new MyClass();
      expect(isEmpty(instance)).toBe(false);
    });
  });

  // ==========================================
  // Documentation Examples Verification
  // ==========================================
  describe('Documentation Examples', () => {
    it('isEmpty(null) => true', () => {
      expect(isEmpty(null)).toBe(true);
    });

    it('isEmpty(true) => true', () => {
      expect(isEmpty(true)).toBe(true);
    });

    it('isEmpty(1) => true', () => {
      expect(isEmpty(1)).toBe(true);
    });

    it('isEmpty([1, 2, 3]) => false', () => {
      expect(isEmpty([1, 2, 3])).toBe(false);
    });

    it("isEmpty('abc') => false", () => {
      expect(isEmpty('abc')).toBe(false);
    });

    it("isEmpty({ 'a': 1 }) => false", () => {
      expect(isEmpty({ 'a': 1 })).toBe(false);
    });
  });

  // ==========================================
  // Real-world Use Cases
  // ==========================================
  describe('Real-world Use Cases', () => {
    it('should check if shopping cart is empty', () => {
      const emptyCart = [];
      const fullCart = [{ id: 1, name: 'Product', qty: 2 }];
      expect(isEmpty(emptyCart)).toBe(true);
      expect(isEmpty(fullCart)).toBe(false);
    });

    it('should check if user input is empty string', () => {
      const noInput = '';
      const hasInput = 'search query';
      expect(isEmpty(noInput)).toBe(true);
      expect(isEmpty(hasInput)).toBe(false);
    });

    it('should check if API response data is empty', () => {
      const emptyResponse = {};
      const dataResponse = { users: [], total: 0 };
      expect(isEmpty(emptyResponse)).toBe(true);
      expect(isEmpty(dataResponse)).toBe(false);
    });

    it('should check if filter criteria Map is empty', () => {
      const noFilters = new Map();
      const hasFilters = new Map([['category', 'electronics']]);
      expect(isEmpty(noFilters)).toBe(true);
      expect(isEmpty(hasFilters)).toBe(false);
    });

    it('should check if selected items Set is empty', () => {
      const noSelection = new Set();
      const hasSelection = new Set([1, 2, 3]);
      expect(isEmpty(noSelection)).toBe(true);
      expect(isEmpty(hasSelection)).toBe(false);
    });

    it('should validate null user session', () => {
      const noSession = null;
      const hasSession = { userId: 123, token: 'abc' };
      expect(isEmpty(noSession)).toBe(true);
      expect(isEmpty(hasSession)).toBe(false);
    });

    it('should check undefined configuration', () => {
      const noConfig = undefined;
      const hasConfig = { theme: 'dark' };
      expect(isEmpty(noConfig)).toBe(true);
      expect(isEmpty(hasConfig)).toBe(false);
    });
  });
});
