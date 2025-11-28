/**
 * AI-Assisted Unit Tests for defaultTo.js
 * 
 * These tests were generated using AI assistance based on:
 * - Equivalence Partitioning Method
 * - Boundary Value Analysis
 * 
 * Test Design Methodology:
 * 1. Created equivalence classes for input parameters
 * 2. Selected representative values from each equivalence class
 * 3. Applied boundary value analysis where applicable
 * 4. Generated test cases covering all classes and boundaries
 * 
 * Function under test: defaultTo(value, defaultValue) -> *
 * - value: The value to check
 * - defaultValue: The default value to return if value is NaN, null, or undefined
 * - Returns: The resolved value
 * 
 * Per documentation:
 * - Returns defaultValue if value is NaN, null, or undefined
 * - Returns value otherwise
 */

import defaultTo from '../src/defaultTo.js';

describe('defaultTo.js - AI-Assisted Test Suite', () => {

  /**
   * ============================================
   * EQUIVALENCE CLASSES FOR value PARAMETER:
   * ============================================
   * 
   * VALUES THAT SHOULD RETURN defaultValue:
   * EC1: null
   * EC2: undefined  
   * EC3: NaN
   * 
   * VALUES THAT SHOULD RETURN value (pass-through):
   * EC4: Numbers (including 0, -0, Infinity, -Infinity)
   * EC5: Strings (including empty string)
   * EC6: Booleans (true, false)
   * EC7: Objects
   * EC8: Arrays
   * EC9: Functions
   * EC10: Symbols
   * EC11: BigInt
   * 
   * EQUIVALENCE CLASSES FOR defaultValue PARAMETER:
   * EC12: Various default value types
   */

  // ==========================================
  // EC1: null (Expected: return defaultValue)
  // ==========================================
  describe('EC1: null value', () => {
    
    it('should return defaultValue when value is null: defaultTo(null, 10) => 10', () => {
      expect(defaultTo(null, 10)).toBe(10);
    });

    it('should return string default when value is null', () => {
      expect(defaultTo(null, 'default')).toBe('default');
    });

    it('should return object default when value is null', () => {
      const defaultObj = { a: 1 };
      expect(defaultTo(null, defaultObj)).toBe(defaultObj);
    });

    it('should return array default when value is null', () => {
      const defaultArr = [1, 2, 3];
      expect(defaultTo(null, defaultArr)).toBe(defaultArr);
    });

    it('should return 0 as default when value is null', () => {
      expect(defaultTo(null, 0)).toBe(0);
    });

    it('should return false as default when value is null', () => {
      expect(defaultTo(null, false)).toBe(false);
    });

    it('should return empty string as default when value is null', () => {
      expect(defaultTo(null, '')).toBe('');
    });
  });

  // ==========================================
  // EC2: undefined (Expected: return defaultValue)
  // ==========================================
  describe('EC2: undefined value', () => {
    
    it('should return defaultValue when value is undefined: defaultTo(undefined, 10) => 10', () => {
      // Per documentation: defaultTo(undefined, 10) => 10
      expect(defaultTo(undefined, 10)).toBe(10);
    });

    it('should return string default when value is undefined', () => {
      expect(defaultTo(undefined, 'fallback')).toBe('fallback');
    });

    it('should return object default when value is undefined', () => {
      const defaultObj = { x: 'y' };
      expect(defaultTo(undefined, defaultObj)).toBe(defaultObj);
    });

    it('should return 0 as default when value is undefined', () => {
      expect(defaultTo(undefined, 0)).toBe(0);
    });

    it('should return false as default when value is undefined', () => {
      expect(defaultTo(undefined, false)).toBe(false);
    });

    it('should return null as default when value is undefined', () => {
      expect(defaultTo(undefined, null)).toBe(null);
    });
  });

  // ==========================================
  // EC3: NaN (Expected: return defaultValue)
  // ==========================================
  describe('EC3: NaN value', () => {
    
    it('should return defaultValue when value is NaN: defaultTo(NaN, 10) => 10', () => {
      // Per documentation: defaultValue is returned if value is NaN
      expect(defaultTo(NaN, 10)).toBe(10);
    });

    it('should return string default when value is NaN', () => {
      expect(defaultTo(NaN, 'not a number')).toBe('not a number');
    });

    it('should return 0 as default when value is NaN', () => {
      expect(defaultTo(NaN, 0)).toBe(0);
    });

    it('should return object default when value is NaN', () => {
      const defaultObj = { error: 'NaN' };
      expect(defaultTo(NaN, defaultObj)).toBe(defaultObj);
    });

    it('should return array default when value is NaN', () => {
      const defaultArr = [];
      expect(defaultTo(NaN, defaultArr)).toBe(defaultArr);
    });
  });

  // ==========================================
  // EC4: Numbers (Expected: return value)
  // ==========================================
  describe('EC4: Number values (should return value)', () => {
    
    it('should return value when value is positive number: defaultTo(1, 10) => 1', () => {
      // Per documentation: defaultTo(1, 10) => 1
      expect(defaultTo(1, 10)).toBe(1);
    });

    it('should return value when value is negative number', () => {
      expect(defaultTo(-5, 10)).toBe(-5);
    });

    it('should return value when value is zero', () => {
      expect(defaultTo(0, 10)).toBe(0);
    });

    it('should return value when value is negative zero', () => {
      expect(Object.is(defaultTo(-0, 10), -0)).toBe(true);
    });

    it('should return value when value is float', () => {
      expect(defaultTo(3.14, 10)).toBe(3.14);
    });

    it('should return value when value is Infinity', () => {
      expect(defaultTo(Infinity, 10)).toBe(Infinity);
    });

    it('should return value when value is -Infinity', () => {
      expect(defaultTo(-Infinity, 10)).toBe(-Infinity);
    });

    it('should return value when value is very small number', () => {
      expect(defaultTo(0.0001, 10)).toBe(0.0001);
    });

    it('should return value when value is MAX_SAFE_INTEGER', () => {
      expect(defaultTo(Number.MAX_SAFE_INTEGER, 10)).toBe(Number.MAX_SAFE_INTEGER);
    });

    it('should return value when value is MIN_SAFE_INTEGER', () => {
      expect(defaultTo(Number.MIN_SAFE_INTEGER, 10)).toBe(Number.MIN_SAFE_INTEGER);
    });
  });

  // ==========================================
  // EC5: Strings (Expected: return value)
  // ==========================================
  describe('EC5: String values (should return value)', () => {
    
    it('should return value when value is non-empty string', () => {
      expect(defaultTo('hello', 'default')).toBe('hello');
    });

    it('should return value when value is empty string', () => {
      expect(defaultTo('', 'default')).toBe('');
    });

    it('should return value when value is whitespace string', () => {
      expect(defaultTo('   ', 'default')).toBe('   ');
    });

    it('should return value when value is string "null"', () => {
      expect(defaultTo('null', 'default')).toBe('null');
    });

    it('should return value when value is string "undefined"', () => {
      expect(defaultTo('undefined', 'default')).toBe('undefined');
    });

    it('should return value when value is string "NaN"', () => {
      expect(defaultTo('NaN', 'default')).toBe('NaN');
    });

    it('should return value when value is numeric string', () => {
      expect(defaultTo('123', 'default')).toBe('123');
    });

    it('should return value when value is string "0"', () => {
      expect(defaultTo('0', 'default')).toBe('0');
    });

    it('should return value when value is string "false"', () => {
      expect(defaultTo('false', 'default')).toBe('false');
    });
  });

  // ==========================================
  // EC6: Booleans (Expected: return value)
  // ==========================================
  describe('EC6: Boolean values (should return value)', () => {
    
    it('should return value when value is true', () => {
      expect(defaultTo(true, false)).toBe(true);
    });

    it('should return value when value is false', () => {
      expect(defaultTo(false, true)).toBe(false);
    });

    it('should return false even when default is truthy', () => {
      expect(defaultTo(false, 'default')).toBe(false);
    });

    it('should return false even when default is 1', () => {
      expect(defaultTo(false, 1)).toBe(false);
    });
  });

  // ==========================================
  // EC7: Objects (Expected: return value)
  // ==========================================
  describe('EC7: Object values (should return value)', () => {
    
    it('should return value when value is empty object', () => {
      const obj = {};
      expect(defaultTo(obj, { default: true })).toBe(obj);
    });

    it('should return value when value is object with properties', () => {
      const obj = { a: 1, b: 2 };
      expect(defaultTo(obj, {})).toBe(obj);
    });

    it('should return value when value is Date object', () => {
      const date = new Date();
      expect(defaultTo(date, new Date(0))).toBe(date);
    });

    it('should return value when value is RegExp', () => {
      const regex = /test/;
      expect(defaultTo(regex, /default/)).toBe(regex);
    });

    it('should return value when value is Error', () => {
      const error = new Error('test');
      expect(defaultTo(error, new Error('default'))).toBe(error);
    });

    it('should return value when value is Map', () => {
      const map = new Map();
      expect(defaultTo(map, new Map())).toBe(map);
    });

    it('should return value when value is Set', () => {
      const set = new Set();
      expect(defaultTo(set, new Set())).toBe(set);
    });
  });

  // ==========================================
  // EC8: Arrays (Expected: return value)
  // ==========================================
  describe('EC8: Array values (should return value)', () => {
    
    it('should return value when value is empty array', () => {
      const arr = [];
      expect(defaultTo(arr, [1, 2, 3])).toBe(arr);
    });

    it('should return value when value is array with elements', () => {
      const arr = [1, 2, 3];
      expect(defaultTo(arr, [])).toBe(arr);
    });

    it('should return value when value is nested array', () => {
      const arr = [[1], [2]];
      expect(defaultTo(arr, [])).toBe(arr);
    });

    it('should return value when value is array with null elements', () => {
      const arr = [null, null];
      expect(defaultTo(arr, [])).toBe(arr);
    });
  });

  // ==========================================
  // EC9: Functions (Expected: return value)
  // ==========================================
  describe('EC9: Function values (should return value)', () => {
    
    it('should return value when value is function', () => {
      const fn = () => {};
      expect(defaultTo(fn, () => 'default')).toBe(fn);
    });

    it('should return value when value is named function', () => {
      function namedFn() {}
      expect(defaultTo(namedFn, () => {})).toBe(namedFn);
    });

    it('should return value when value is async function', () => {
      const asyncFn = async () => {};
      expect(defaultTo(asyncFn, () => {})).toBe(asyncFn);
    });
  });

  // ==========================================
  // EC10: Symbols (Expected: return value)
  // ==========================================
  describe('EC10: Symbol values (should return value)', () => {
    
    it('should return value when value is Symbol', () => {
      const sym = Symbol('test');
      expect(defaultTo(sym, Symbol('default'))).toBe(sym);
    });

    it('should return value when value is Symbol without description', () => {
      const sym = Symbol();
      expect(defaultTo(sym, 'default')).toBe(sym);
    });

    it('should return value when value is well-known Symbol', () => {
      expect(defaultTo(Symbol.iterator, 'default')).toBe(Symbol.iterator);
    });
  });

  // ==========================================
  // EC11: BigInt (Expected: return value)
  // ==========================================
  describe('EC11: BigInt values (should return value)', () => {
    
    it('should return value when value is BigInt zero', () => {
      expect(defaultTo(0n, 10n)).toBe(0n);
    });

    it('should return value when value is positive BigInt', () => {
      expect(defaultTo(42n, 10n)).toBe(42n);
    });

    it('should return value when value is negative BigInt', () => {
      expect(defaultTo(-42n, 10n)).toBe(-42n);
    });
  });

  // ==========================================
  // EC12: Various defaultValue types
  // ==========================================
  describe('EC12: Various defaultValue types', () => {
    
    it('should return undefined as default when specified', () => {
      expect(defaultTo(null, undefined)).toBe(undefined);
    });

    it('should return null as default when specified', () => {
      expect(defaultTo(undefined, null)).toBe(null);
    });

    it('should return NaN as default when specified', () => {
      expect(Number.isNaN(defaultTo(null, NaN))).toBe(true);
    });

    it('should return function as default', () => {
      const defaultFn = () => 'default';
      expect(defaultTo(null, defaultFn)).toBe(defaultFn);
    });

    it('should return Symbol as default', () => {
      const defaultSym = Symbol('default');
      expect(defaultTo(null, defaultSym)).toBe(defaultSym);
    });
  });

  // ==========================================
  // Boundary Value Analysis
  // ==========================================
  describe('Boundary Value Analysis', () => {
    
    describe('BVA: Nullish boundary', () => {
      
      it('BVA: null => defaultValue', () => {
        expect(defaultTo(null, 'default')).toBe('default');
      });

      it('BVA: undefined => defaultValue', () => {
        expect(defaultTo(undefined, 'default')).toBe('default');
      });

      it('BVA: NaN => defaultValue', () => {
        expect(defaultTo(NaN, 'default')).toBe('default');
      });
    });

    describe('BVA: Falsy but valid values', () => {
      
      it('BVA: 0 should return 0, not default', () => {
        expect(defaultTo(0, 10)).toBe(0);
      });

      it('BVA: "" should return "", not default', () => {
        expect(defaultTo('', 'default')).toBe('');
      });

      it('BVA: false should return false, not default', () => {
        expect(defaultTo(false, true)).toBe(false);
      });
    });

    describe('BVA: Number boundaries', () => {
      
      it('BVA: Number.MAX_VALUE should return value', () => {
        expect(defaultTo(Number.MAX_VALUE, 0)).toBe(Number.MAX_VALUE);
      });

      it('BVA: Number.MIN_VALUE should return value', () => {
        expect(defaultTo(Number.MIN_VALUE, 0)).toBe(Number.MIN_VALUE);
      });

      it('BVA: -0 should return -0', () => {
        expect(Object.is(defaultTo(-0, 1), -0)).toBe(true);
      });
    });
  });

  // ==========================================
  // Edge Cases and Special Scenarios
  // ==========================================
  describe('Edge Cases and Special Scenarios', () => {
    
    it('should handle both arguments being null', () => {
      expect(defaultTo(null, null)).toBe(null);
    });

    it('should handle both arguments being undefined', () => {
      expect(defaultTo(undefined, undefined)).toBe(undefined);
    });

    it('should handle both arguments being NaN', () => {
      expect(Number.isNaN(defaultTo(NaN, NaN))).toBe(true);
    });

    it('should handle no arguments (both undefined)', () => {
      expect(defaultTo()).toBe(undefined);
    });

    it('should handle only value argument (defaultValue undefined)', () => {
      expect(defaultTo(5)).toBe(5);
    });

    it('should handle only value argument being null', () => {
      expect(defaultTo(null)).toBe(undefined);
    });

    it('should handle value being boxed Number(0)', () => {
      const boxedZero = new Number(0);
      expect(defaultTo(boxedZero, 10)).toBe(boxedZero);
    });

    it('should handle value being boxed String("")', () => {
      const boxedEmpty = new String('');
      expect(defaultTo(boxedEmpty, 'default')).toBe(boxedEmpty);
    });

    it('should handle value being boxed Boolean(false)', () => {
      const boxedFalse = new Boolean(false);
      expect(defaultTo(boxedFalse, true)).toBe(boxedFalse);
    });

    it('should preserve reference identity for objects', () => {
      const obj = { a: 1 };
      expect(defaultTo(obj, {})).toBe(obj);
    });

    it('should preserve reference identity for default objects', () => {
      const defaultObj = { b: 2 };
      expect(defaultTo(null, defaultObj)).toBe(defaultObj);
    });
  });

  // ==========================================
  // Documentation Examples
  // ==========================================
  describe('Documentation Examples', () => {
    
    it('defaultTo(1, 10) => 1', () => {
      expect(defaultTo(1, 10)).toBe(1);
    });

    it('defaultTo(undefined, 10) => 10', () => {
      expect(defaultTo(undefined, 10)).toBe(10);
    });
  });

  // ==========================================
  // Real-world Use Cases
  // ==========================================
  describe('Real-world Use Cases', () => {
    
    it('should provide default for missing config value', () => {
      const config = { port: undefined };
      expect(defaultTo(config.port, 3000)).toBe(3000);
    });

    it('should preserve explicit zero port', () => {
      const config = { port: 0 };
      expect(defaultTo(config.port, 3000)).toBe(0);
    });

    it('should provide default for null user preference', () => {
      const preference = null;
      expect(defaultTo(preference, 'light')).toBe('light');
    });

    it('should preserve empty string preference', () => {
      const preference = '';
      expect(defaultTo(preference, 'default')).toBe('');
    });

    it('should provide default for NaN calculation result', () => {
      const result = parseInt('not a number');
      expect(defaultTo(result, 0)).toBe(0);
    });

    it('should preserve false boolean setting', () => {
      const setting = false;
      expect(defaultTo(setting, true)).toBe(false);
    });
  });

});
