/**
 * AI-Assisted Unit Tests for isObject.js
 * 
 * These tests were generated using AI assistance based on:
 * - Equivalence Partitioning Method
 * - Boundary Value Analysis
 * 
 * Test Design Methodology:
 * 1. Created equivalence classes for input parameter
 * 2. Selected representative values from each equivalence class
 * 3. Applied boundary value analysis where applicable
 * 4. Generated test cases covering all classes and boundaries
 * 
 * Function under test: isObject(value) -> boolean
 * - value: The value to check
 * - Returns: true if value is an object (per ECMAScript language types), else false
 * 
 * Per documentation, returns true for:
 * - arrays, functions, objects, regexes, new Number(0), new String('')
 * Returns false for:
 * - null, primitives (numbers, strings, booleans, undefined, symbols, bigints)
 */

import isObject from '../src/isObject.js';

describe('isObject.js - AI-Assisted Test Suite', () => {

  /**
   * ============================================
   * EQUIVALENCE CLASSES FOR value PARAMETER:
   * ============================================
   * 
   * OBJECTS (Expected: true)
   * EC1: Plain objects (e.g., {}, {a: 1})
   * EC2: Arrays (e.g., [], [1, 2, 3])
   * EC3: Functions (regular functions, arrow functions, async functions)
   * EC4: Regular expressions (e.g., /abc/, new RegExp())
   * EC5: Boxed primitives (new Number(), new String(), new Boolean())
   * EC6: Built-in objects (Date, Map, Set, WeakMap, WeakSet, Error)
   * EC7: Class instances
   * 
   * NON-OBJECTS (Expected: false)
   * EC8: null
   * EC9: undefined
   * EC10: Number primitives (integers, floats, special values)
   * EC11: String primitives
   * EC12: Boolean primitives
   * EC13: Symbol primitives
   * EC14: BigInt primitives
   */

  // ==========================================
  // EC1: Plain Objects (Expected: true)
  // ==========================================
  describe('EC1: Plain Objects', () => {
    
    it('should return true for empty object: isObject({})', () => {
      expect(isObject({})).toBe(true);
    });

    it('should return true for object with properties: isObject({a: 1})', () => {
      expect(isObject({ a: 1 })).toBe(true);
    });

    it('should return true for nested object', () => {
      expect(isObject({ a: { b: { c: 1 } } })).toBe(true);
    });

    it('should return true for Object.create(null)', () => {
      expect(isObject(Object.create(null))).toBe(true);
    });

    it('should return true for Object.create({})', () => {
      expect(isObject(Object.create({}))).toBe(true);
    });
  });

  // ==========================================
  // EC2: Arrays (Expected: true)
  // ==========================================
  describe('EC2: Arrays', () => {
    
    it('should return true for empty array: isObject([])', () => {
      expect(isObject([])).toBe(true);
    });

    it('should return true for array with elements: isObject([1, 2, 3])', () => {
      expect(isObject([1, 2, 3])).toBe(true);
    });

    it('should return true for nested array', () => {
      expect(isObject([[1], [2], [3]])).toBe(true);
    });

    it('should return true for array with mixed types', () => {
      expect(isObject([1, 'a', true, null, {}])).toBe(true);
    });

    it('should return true for Array constructor: isObject(new Array())', () => {
      expect(isObject(new Array())).toBe(true);
    });

    it('should return true for Array.from result', () => {
      expect(isObject(Array.from('abc'))).toBe(true);
    });
  });

  // ==========================================
  // EC3: Functions (Expected: true)
  // ==========================================
  describe('EC3: Functions', () => {
    
    it('should return true for regular function', () => {
      function testFn() {}
      expect(isObject(testFn)).toBe(true);
    });

    it('should return true for arrow function', () => {
      const arrowFn = () => {};
      expect(isObject(arrowFn)).toBe(true);
    });

    it('should return true for async function', () => {
      async function asyncFn() {}
      expect(isObject(asyncFn)).toBe(true);
    });

    it('should return true for generator function', () => {
      function* genFn() {}
      expect(isObject(genFn)).toBe(true);
    });

    it('should return true for Function constructor', () => {
      expect(isObject(Function)).toBe(true);
    });

    it('should return true for built-in function (Array.isArray)', () => {
      expect(isObject(Array.isArray)).toBe(true);
    });

    it('should return true for class (classes are functions)', () => {
      class TestClass {}
      expect(isObject(TestClass)).toBe(true);
    });

    it('should return true for bound function', () => {
      function test() {}
      expect(isObject(test.bind(null))).toBe(true);
    });
  });

  // ==========================================
  // EC4: Regular Expressions (Expected: true)
  // ==========================================
  describe('EC4: Regular Expressions', () => {
    
    it('should return true for regex literal: isObject(/abc/)', () => {
      expect(isObject(/abc/)).toBe(true);
    });

    it('should return true for RegExp constructor: isObject(new RegExp("abc"))', () => {
      expect(isObject(new RegExp('abc'))).toBe(true);
    });

    it('should return true for regex with flags', () => {
      expect(isObject(/test/gi)).toBe(true);
    });

    it('should return true for empty regex', () => {
      expect(isObject(/(?:)/)).toBe(true);
    });
  });

  // ==========================================
  // EC5: Boxed Primitives (Expected: true)
  // ==========================================
  describe('EC5: Boxed Primitives', () => {
    
    it('should return true for new Number(0)', () => {
      expect(isObject(new Number(0))).toBe(true);
    });

    it('should return true for new Number(42)', () => {
      expect(isObject(new Number(42))).toBe(true);
    });

    it('should return true for new String("")', () => {
      expect(isObject(new String(''))).toBe(true);
    });

    it('should return true for new String("hello")', () => {
      expect(isObject(new String('hello'))).toBe(true);
    });

    it('should return true for new Boolean(false)', () => {
      expect(isObject(new Boolean(false))).toBe(true);
    });

    it('should return true for new Boolean(true)', () => {
      expect(isObject(new Boolean(true))).toBe(true);
    });

    it('should return true for Object(42) (boxed number)', () => {
      expect(isObject(Object(42))).toBe(true);
    });

    it('should return true for Object("str") (boxed string)', () => {
      expect(isObject(Object('str'))).toBe(true);
    });
  });

  // ==========================================
  // EC6: Built-in Objects (Expected: true)
  // ==========================================
  describe('EC6: Built-in Objects', () => {
    
    it('should return true for Date object', () => {
      expect(isObject(new Date())).toBe(true);
    });

    it('should return true for Map', () => {
      expect(isObject(new Map())).toBe(true);
    });

    it('should return true for Set', () => {
      expect(isObject(new Set())).toBe(true);
    });

    it('should return true for WeakMap', () => {
      expect(isObject(new WeakMap())).toBe(true);
    });

    it('should return true for WeakSet', () => {
      expect(isObject(new WeakSet())).toBe(true);
    });

    it('should return true for Error', () => {
      expect(isObject(new Error('test'))).toBe(true);
    });

    it('should return true for TypeError', () => {
      expect(isObject(new TypeError('test'))).toBe(true);
    });

    it('should return true for Promise', () => {
      expect(isObject(new Promise(() => {}))).toBe(true);
    });

    it('should return true for ArrayBuffer', () => {
      expect(isObject(new ArrayBuffer(8))).toBe(true);
    });

    it('should return true for Uint8Array (typed array)', () => {
      expect(isObject(new Uint8Array(8))).toBe(true);
    });

    it('should return true for DataView', () => {
      expect(isObject(new DataView(new ArrayBuffer(8)))).toBe(true);
    });
  });

  // ==========================================
  // EC7: Class Instances (Expected: true)
  // ==========================================
  describe('EC7: Class Instances', () => {
    
    it('should return true for class instance', () => {
      class Person {
        constructor(name) {
          this.name = name;
        }
      }
      expect(isObject(new Person('John'))).toBe(true);
    });

    it('should return true for class instance with inheritance', () => {
      class Animal {}
      class Dog extends Animal {}
      expect(isObject(new Dog())).toBe(true);
    });

    it('should return true for instance from constructor function', () => {
      function Car(model) {
        this.model = model;
      }
      expect(isObject(new Car('Tesla'))).toBe(true);
    });
  });

  // ==========================================
  // EC8: null (Expected: false)
  // ==========================================
  describe('EC8: null', () => {
    
    it('should return false for null: isObject(null)', () => {
      // Per documentation: isObject(null) => false
      expect(isObject(null)).toBe(false);
    });
  });

  // ==========================================
  // EC9: undefined (Expected: false)
  // ==========================================
  describe('EC9: undefined', () => {
    
    it('should return false for undefined: isObject(undefined)', () => {
      expect(isObject(undefined)).toBe(false);
    });

    it('should return false for void 0', () => {
      expect(isObject(void 0)).toBe(false);
    });

    it('should return false when called with no arguments', () => {
      expect(isObject()).toBe(false);
    });
  });

  // ==========================================
  // EC10: Number Primitives (Expected: false)
  // ==========================================
  describe('EC10: Number Primitives', () => {
    
    it('should return false for zero: isObject(0)', () => {
      expect(isObject(0)).toBe(false);
    });

    it('should return false for negative zero: isObject(-0)', () => {
      expect(isObject(-0)).toBe(false);
    });

    it('should return false for positive integer: isObject(42)', () => {
      expect(isObject(42)).toBe(false);
    });

    it('should return false for negative integer: isObject(-42)', () => {
      expect(isObject(-42)).toBe(false);
    });

    it('should return false for float: isObject(3.14)', () => {
      expect(isObject(3.14)).toBe(false);
    });

    it('should return false for negative float: isObject(-3.14)', () => {
      expect(isObject(-3.14)).toBe(false);
    });

    it('should return false for Infinity: isObject(Infinity)', () => {
      expect(isObject(Infinity)).toBe(false);
    });

    it('should return false for -Infinity: isObject(-Infinity)', () => {
      expect(isObject(-Infinity)).toBe(false);
    });

    it('should return false for NaN: isObject(NaN)', () => {
      expect(isObject(NaN)).toBe(false);
    });

    it('should return false for Number.MAX_VALUE', () => {
      expect(isObject(Number.MAX_VALUE)).toBe(false);
    });

    it('should return false for Number.MIN_VALUE', () => {
      expect(isObject(Number.MIN_VALUE)).toBe(false);
    });

    it('should return false for Number.MAX_SAFE_INTEGER', () => {
      expect(isObject(Number.MAX_SAFE_INTEGER)).toBe(false);
    });
  });

  // ==========================================
  // EC11: String Primitives (Expected: false)
  // ==========================================
  describe('EC11: String Primitives', () => {
    
    it('should return false for empty string: isObject("")', () => {
      expect(isObject('')).toBe(false);
    });

    it('should return false for non-empty string: isObject("hello")', () => {
      expect(isObject('hello')).toBe(false);
    });

    it('should return false for single character string', () => {
      expect(isObject('a')).toBe(false);
    });

    it('should return false for string with spaces', () => {
      expect(isObject('   ')).toBe(false);
    });

    it('should return false for template literal', () => {
      expect(isObject(`template`)).toBe(false);
    });

    it('should return false for string "null"', () => {
      expect(isObject('null')).toBe(false);
    });

    it('should return false for string "undefined"', () => {
      expect(isObject('undefined')).toBe(false);
    });

    it('should return false for string "object"', () => {
      expect(isObject('object')).toBe(false);
    });

    it('should return false for numeric string', () => {
      expect(isObject('123')).toBe(false);
    });
  });

  // ==========================================
  // EC12: Boolean Primitives (Expected: false)
  // ==========================================
  describe('EC12: Boolean Primitives', () => {
    
    it('should return false for true: isObject(true)', () => {
      expect(isObject(true)).toBe(false);
    });

    it('should return false for false: isObject(false)', () => {
      expect(isObject(false)).toBe(false);
    });
  });

  // ==========================================
  // EC13: Symbol Primitives (Expected: false)
  // ==========================================
  describe('EC13: Symbol Primitives', () => {
    
    it('should return false for Symbol(): isObject(Symbol())', () => {
      expect(isObject(Symbol())).toBe(false);
    });

    it('should return false for Symbol with description', () => {
      expect(isObject(Symbol('test'))).toBe(false);
    });

    it('should return false for Symbol.for()', () => {
      expect(isObject(Symbol.for('key'))).toBe(false);
    });

    it('should return false for well-known Symbol', () => {
      expect(isObject(Symbol.iterator)).toBe(false);
    });
  });

  // ==========================================
  // EC14: BigInt Primitives (Expected: false)
  // ==========================================
  describe('EC14: BigInt Primitives', () => {
    
    it('should return false for BigInt: isObject(BigInt(0))', () => {
      expect(isObject(BigInt(0))).toBe(false);
    });

    it('should return false for BigInt literal: isObject(42n)', () => {
      expect(isObject(42n)).toBe(false);
    });

    it('should return false for large BigInt', () => {
      expect(isObject(BigInt('9007199254740991'))).toBe(false);
    });

    it('should return false for negative BigInt', () => {
      expect(isObject(-42n)).toBe(false);
    });
  });

  // ==========================================
  // Boundary Value Analysis
  // ==========================================
  describe('Boundary Value Analysis', () => {
    
    describe('BVA: Object/Non-Object Boundary', () => {
      // The key boundary is between objects and primitives
      // null is the tricky case - typeof null === 'object' but it's not an object
      
      it('BVA: null (boundary - typeof returns "object" but is not an object)', () => {
        expect(isObject(null)).toBe(false);
      });

      it('BVA: empty object (simplest object)', () => {
        expect(isObject({})).toBe(true);
      });

      it('BVA: empty array (array is object)', () => {
        expect(isObject([])).toBe(true);
      });

      it('BVA: empty function (function is object)', () => {
        expect(isObject(() => {})).toBe(true);
      });
    });

    describe('BVA: Primitive vs Boxed Primitive Boundary', () => {
      
      it('BVA: number primitive 0 (not object)', () => {
        expect(isObject(0)).toBe(false);
      });

      it('BVA: boxed number new Number(0) (is object)', () => {
        expect(isObject(new Number(0))).toBe(true);
      });

      it('BVA: string primitive "" (not object)', () => {
        expect(isObject('')).toBe(false);
      });

      it('BVA: boxed string new String("") (is object)', () => {
        expect(isObject(new String(''))).toBe(true);
      });

      it('BVA: boolean primitive false (not object)', () => {
        expect(isObject(false)).toBe(false);
      });

      it('BVA: boxed boolean new Boolean(false) (is object)', () => {
        expect(isObject(new Boolean(false))).toBe(true);
      });
    });
  });

  // ==========================================
  // Edge Cases and Special Scenarios
  // ==========================================
  describe('Edge Cases and Special Scenarios', () => {
    
    it('should return true for arguments object', () => {
      function test() {
        return isObject(arguments);
      }
      expect(test()).toBe(true);
    });

    it('should return true for object with null prototype', () => {
      const obj = Object.create(null);
      expect(isObject(obj)).toBe(true);
    });

    it('should return true for frozen object', () => {
      const frozen = Object.freeze({ a: 1 });
      expect(isObject(frozen)).toBe(true);
    });

    it('should return true for sealed object', () => {
      const sealed = Object.seal({ a: 1 });
      expect(isObject(sealed)).toBe(true);
    });

    it('should return true for proxy object', () => {
      const proxy = new Proxy({}, {});
      expect(isObject(proxy)).toBe(true);
    });

    it('should return true for Math object', () => {
      expect(isObject(Math)).toBe(true);
    });

    it('should return true for JSON object', () => {
      expect(isObject(JSON)).toBe(true);
    });

    it('should return true for globalThis', () => {
      expect(isObject(globalThis)).toBe(true);
    });

    it('should return true for Reflect', () => {
      expect(isObject(Reflect)).toBe(true);
    });
  });

  // ==========================================
  // Documentation Examples
  // ==========================================
  describe('Documentation Examples', () => {
    
    it('isObject({}) => true', () => {
      expect(isObject({})).toBe(true);
    });

    it('isObject([1, 2, 3]) => true', () => {
      expect(isObject([1, 2, 3])).toBe(true);
    });

    it('isObject(Function) => true', () => {
      expect(isObject(Function)).toBe(true);
    });

    it('isObject(null) => false', () => {
      expect(isObject(null)).toBe(false);
    });
  });

});
