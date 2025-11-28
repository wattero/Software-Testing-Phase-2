/**
 * AI-Assisted Unit Tests for toString.js
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
 * Function under test: toString(value) -> string
 * - value: The value to convert
 * - Returns: The converted string
 * 
 * Per documentation:
 * - Empty string is returned for null and undefined
 * - The sign of -0 is preserved (returns '-0')
 * - Arrays are converted to comma-separated strings
 */

import toString from '../src/toString.js';

describe('toString.js - AI-Assisted Test Suite', () => {

  /**
   * ============================================
   * EQUIVALENCE CLASSES FOR value PARAMETER:
   * ============================================
   * 
   * EC1: null (Expected: '')
   * EC2: undefined (Expected: '')
   * EC3: String values (already strings, return as-is)
   * EC4: Number values (integers, floats, special numbers)
   * EC5: Negative zero -0 (Expected: '-0')
   * EC6: Boolean values
   * EC7: Arrays (Expected: comma-separated values)
   * EC8: Objects
   * EC9: Symbols
   * EC10: Functions
   * EC11: BigInt values
   */

  // ==========================================
  // EC1: null (Expected: '')
  // ==========================================
  describe('EC1: null', () => {
    
    it('should return empty string for null: toString(null) => ""', () => {
      expect(toString(null)).toBe('');
    });
  });

  // ==========================================
  // EC2: undefined (Expected: '')
  // ==========================================
  describe('EC2: undefined', () => {
    
    it('should return empty string for undefined: toString(undefined) => ""', () => {
      expect(toString(undefined)).toBe('');
    });

    it('should return empty string when called with no arguments', () => {
      expect(toString()).toBe('');
    });
  });

  // ==========================================
  // EC3: String Values (return as-is)
  // ==========================================
  describe('EC3: String Values', () => {
    
    it('should return empty string as-is: toString("")', () => {
      expect(toString('')).toBe('');
    });

    it('should return string as-is: toString("hello")', () => {
      expect(toString('hello')).toBe('hello');
    });

    it('should return single character string as-is', () => {
      expect(toString('a')).toBe('a');
    });

    it('should return string with spaces as-is', () => {
      expect(toString('hello world')).toBe('hello world');
    });

    it('should return string with special characters as-is', () => {
      expect(toString('!@#$%^&*()')).toBe('!@#$%^&*()');
    });

    it('should return numeric string as-is', () => {
      expect(toString('123')).toBe('123');
    });

    it('should return string "null" as-is', () => {
      expect(toString('null')).toBe('null');
    });

    it('should return string "undefined" as-is', () => {
      expect(toString('undefined')).toBe('undefined');
    });

    it('should return unicode string as-is', () => {
      expect(toString('äöü')).toBe('äöü');
    });

    it('should return emoji string as-is', () => {
      expect(toString('😀')).toBe('😀');
    });

    it('should return whitespace string as-is', () => {
      expect(toString('   ')).toBe('   ');
    });

    it('should return newline string as-is', () => {
      expect(toString('\n')).toBe('\n');
    });

    it('should return tab string as-is', () => {
      expect(toString('\t')).toBe('\t');
    });
  });

  // ==========================================
  // EC4: Number Values
  // ==========================================
  describe('EC4: Number Values', () => {
    
    it('should convert zero: toString(0) => "0"', () => {
      expect(toString(0)).toBe('0');
    });

    it('should convert positive integer: toString(42) => "42"', () => {
      expect(toString(42)).toBe('42');
    });

    it('should convert negative integer: toString(-42) => "-42"', () => {
      expect(toString(-42)).toBe('-42');
    });

    it('should convert positive float: toString(3.14) => "3.14"', () => {
      expect(toString(3.14)).toBe('3.14');
    });

    it('should convert negative float: toString(-3.14) => "-3.14"', () => {
      expect(toString(-3.14)).toBe('-3.14');
    });

    it('should convert Infinity: toString(Infinity) => "Infinity"', () => {
      expect(toString(Infinity)).toBe('Infinity');
    });

    it('should convert -Infinity: toString(-Infinity) => "-Infinity"', () => {
      expect(toString(-Infinity)).toBe('-Infinity');
    });

    it('should convert NaN: toString(NaN) => "NaN"', () => {
      expect(toString(NaN)).toBe('NaN');
    });

    it('should convert large number', () => {
      expect(toString(1000000)).toBe('1000000');
    });

    it('should convert small decimal', () => {
      expect(toString(0.0001)).toBe('0.0001');
    });

    it('should convert scientific notation number', () => {
      const result = toString(1e10);
      expect(result).toBe('10000000000');
    });

    it('should convert Number.MAX_SAFE_INTEGER', () => {
      expect(toString(Number.MAX_SAFE_INTEGER)).toBe('9007199254740991');
    });

    it('should convert Number.MIN_SAFE_INTEGER', () => {
      expect(toString(Number.MIN_SAFE_INTEGER)).toBe('-9007199254740991');
    });
  });

  // ==========================================
  // EC5: Negative Zero -0 (Expected: '-0')
  // ==========================================
  describe('EC5: Negative Zero', () => {
    
    it('should preserve sign of -0: toString(-0) => "-0"', () => {
      expect(toString(-0)).toBe('-0');
    });
  });

  // ==========================================
  // EC6: Boolean Values
  // ==========================================
  describe('EC6: Boolean Values', () => {
    
    it('should convert true: toString(true) => "true"', () => {
      expect(toString(true)).toBe('true');
    });

    it('should convert false: toString(false) => "false"', () => {
      expect(toString(false)).toBe('false');
    });
  });

  // ==========================================
  // EC7: Arrays (Expected: comma-separated)
  // ==========================================
  describe('EC7: Arrays', () => {
    
    it('should convert empty array: toString([]) => ""', () => {
      expect(toString([])).toBe('');
    });

    it('should convert array with single element: toString([1]) => "1"', () => {
      expect(toString([1])).toBe('1');
    });

    it('should convert array with numbers: toString([1, 2, 3]) => "1,2,3"', () => {
      // Per documentation: toString([1, 2, 3]) => '1,2,3'
      expect(toString([1, 2, 3])).toBe('1,2,3');
    });

    it('should convert array with strings', () => {
      expect(toString(['a', 'b', 'c'])).toBe('a,b,c');
    });

    it('should convert array with mixed types', () => {
      expect(toString([1, 'a', true])).toBe('1,a,true');
    });

    it('should handle array with null elements', () => {
      // null in array should become empty (per documentation null => '')
      expect(toString([1, null, 3])).toBe('1,,3');
    });

    it('should handle array with undefined elements', () => {
      // undefined in array should become empty (per documentation undefined => '')
      expect(toString([1, undefined, 3])).toBe('1,,3');
    });

    it('should convert nested arrays', () => {
      expect(toString([[1, 2], [3, 4]])).toBe('1,2,3,4');
    });

    it('should convert array with negative zero', () => {
      expect(toString([-0])).toBe('-0');
    });

    it('should handle array with empty string', () => {
      expect(toString([''])).toBe('');
    });

    it('should handle array with spaces', () => {
      expect(toString(['a', ' ', 'b'])).toBe('a, ,b');
    });
  });

  // ==========================================
  // EC8: Objects
  // ==========================================
  describe('EC8: Objects', () => {
    
    it('should convert empty object: toString({}) => "[object Object]"', () => {
      expect(toString({})).toBe('[object Object]');
    });

    it('should convert object with properties', () => {
      expect(toString({ a: 1 })).toBe('[object Object]');
    });

    it('should convert object with custom toString method', () => {
      const obj = {
        toString() {
          return 'custom';
        }
      };
      expect(toString(obj)).toBe('custom');
    });

    it('should convert object with valueOf method', () => {
      const obj = {
        valueOf() {
          return 42;
        }
      };
      // Template literal uses valueOf for primitives but toString for objects
      expect(toString(obj)).toBe('[object Object]');
    });

    it('should convert Date object', () => {
      const date = new Date('2024-01-01T00:00:00.000Z');
      const result = toString(date);
      expect(typeof result).toBe('string');
      expect(result.length).toBeGreaterThan(0);
    });

    it('should convert RegExp object', () => {
      expect(toString(/abc/)).toBe('/abc/');
    });

    it('should convert RegExp with flags', () => {
      expect(toString(/test/gi)).toBe('/test/gi');
    });
  });

  // ==========================================
  // EC9: Symbols
  // ==========================================
  describe('EC9: Symbols', () => {
    
    it('should convert Symbol to its string representation', () => {
      const sym = Symbol('test');
      expect(toString(sym)).toBe('Symbol(test)');
    });

    it('should convert Symbol without description', () => {
      const sym = Symbol();
      expect(toString(sym)).toBe('Symbol()');
    });

    it('should convert Symbol.for()', () => {
      const sym = Symbol.for('key');
      expect(toString(sym)).toBe('Symbol(key)');
    });

    it('should convert well-known Symbol', () => {
      const result = toString(Symbol.iterator);
      expect(result).toBe('Symbol(Symbol.iterator)');
    });
  });

  // ==========================================
  // EC10: Functions
  // ==========================================
  describe('EC10: Functions', () => {
    
    it('should convert named function', () => {
      function testFn() {}
      const result = toString(testFn);
      expect(result).toContain('function');
      expect(result).toContain('testFn');
    });

    it('should convert arrow function', () => {
      const arrowFn = () => {};
      const result = toString(arrowFn);
      expect(result).toContain('=>');
    });

    it('should convert anonymous function', () => {
      const result = toString(function() {});
      expect(result).toContain('function');
    });
  });

  // ==========================================
  // EC11: BigInt Values
  // ==========================================
  describe('EC11: BigInt Values', () => {
    
    it('should convert BigInt zero: toString(0n) => "0"', () => {
      expect(toString(0n)).toBe('0');
    });

    it('should convert positive BigInt: toString(42n) => "42"', () => {
      expect(toString(42n)).toBe('42');
    });

    it('should convert negative BigInt: toString(-42n) => "-42"', () => {
      expect(toString(-42n)).toBe('-42');
    });

    it('should convert large BigInt', () => {
      expect(toString(BigInt('9007199254740991'))).toBe('9007199254740991');
    });
  });

  // ==========================================
  // Boundary Value Analysis
  // ==========================================
  describe('Boundary Value Analysis', () => {
    
    describe('BVA: Empty/Nullish Values', () => {
      
      it('BVA: null => ""', () => {
        expect(toString(null)).toBe('');
      });

      it('BVA: undefined => ""', () => {
        expect(toString(undefined)).toBe('');
      });

      it('BVA: empty string => ""', () => {
        expect(toString('')).toBe('');
      });

      it('BVA: empty array => ""', () => {
        expect(toString([])).toBe('');
      });
    });

    describe('BVA: Zero Boundary', () => {
      
      it('BVA: 0 => "0"', () => {
        expect(toString(0)).toBe('0');
      });

      it('BVA: -0 => "-0" (preserves sign)', () => {
        expect(toString(-0)).toBe('-0');
      });

      it('BVA: smallest positive number', () => {
        expect(toString(Number.MIN_VALUE)).toBe('5e-324');
      });
    });

    describe('BVA: String Length', () => {
      
      it('BVA: single character string', () => {
        expect(toString('a')).toBe('a');
      });

      it('BVA: two character string', () => {
        expect(toString('ab')).toBe('ab');
      });

      it('BVA: long string (1000 chars)', () => {
        const longStr = 'a'.repeat(1000);
        expect(toString(longStr)).toBe(longStr);
      });
    });

    describe('BVA: Array Length', () => {
      
      it('BVA: empty array', () => {
        expect(toString([])).toBe('');
      });

      it('BVA: single element array', () => {
        expect(toString([1])).toBe('1');
      });

      it('BVA: two element array', () => {
        expect(toString([1, 2])).toBe('1,2');
      });

      it('BVA: many element array', () => {
        const arr = Array.from({ length: 100 }, (_, i) => i);
        const result = toString(arr);
        expect(result).toBe(arr.join(','));
      });
    });
  });

  // ==========================================
  // Edge Cases and Special Scenarios
  // ==========================================
  describe('Edge Cases and Special Scenarios', () => {
    
    it('should handle object with null prototype', () => {
      const obj = Object.create(null);
      // Expected: should convert to some string representation
      expect(typeof toString(obj)).toBe('string');
    });

    it('should handle boxed Number', () => {
      expect(toString(new Number(42))).toBe('42');
    });

    it('should handle boxed String', () => {
      expect(toString(new String('hello'))).toBe('hello');
    });

    it('should handle boxed Boolean', () => {
      expect(toString(new Boolean(true))).toBe('true');
    });

    it('should handle array with only null values', () => {
      expect(toString([null, null, null])).toBe(',,');
    });

    it('should handle array with only undefined values', () => {
      expect(toString([undefined, undefined])).toBe(',');
    });

    it('should handle deeply nested array', () => {
      expect(toString([[[1]]])).toBe('1');
    });

    it('should handle Map (converts to string representation)', () => {
      const map = new Map();
      expect(toString(map)).toBe('[object Map]');
    });

    it('should handle Set (converts to string representation)', () => {
      const set = new Set();
      expect(toString(set)).toBe('[object Set]');
    });

    it('should handle Error object', () => {
      const error = new Error('test error');
      const result = toString(error);
      expect(result).toContain('Error');
      expect(result).toContain('test error');
    });
  });

  // ==========================================
  // Documentation Examples
  // ==========================================
  describe('Documentation Examples', () => {
    
    it('toString(null) => ""', () => {
      expect(toString(null)).toBe('');
    });

    it('toString(-0) => "-0"', () => {
      expect(toString(-0)).toBe('-0');
    });

    it('toString([1, 2, 3]) => "1,2,3"', () => {
      expect(toString([1, 2, 3])).toBe('1,2,3');
    });
  });

});
