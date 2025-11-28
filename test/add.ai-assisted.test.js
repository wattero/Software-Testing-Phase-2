/**
 * AI-Assisted Unit Tests for add.js
 * 
 * These tests were generated using AI assistance based on:
 * - Equivalence Partitioning Method
 * - Boundary Value Analysis
 * 
 * Test Design Methodology:
 * 1. Created equivalence classes for input parameters
 * 2. Selected representative values from each equivalence class
 * 3. Applied boundary value analysis for numeric parameters
 * 4. Generated test cases covering all classes and boundaries
 * 
 * Function under test: add(augend, addend) -> number
 * - augend: The first number in an addition
 * - addend: The second number in an addition
 * - Returns: The sum of the two numbers
 */

import add from '../src/add.js';

describe('add.js - AI-Assisted Test Suite', () => {

  /**
   * ============================================
   * EQUIVALENCE CLASSES FOR augend AND addend:
   * ============================================
   * 
   * EC1: Positive integers (1 to Number.MAX_SAFE_INTEGER)
   * EC2: Negative integers (Number.MIN_SAFE_INTEGER to -1)
   * EC3: Zero (0)
   * EC4: Positive floating-point numbers (0 < x < 1, and x > 1)
   * EC5: Negative floating-point numbers (-1 < x < 0, and x < -1)
   * EC6: Special numeric values (Infinity, -Infinity, NaN)
   * EC7: Numeric strings (e.g., "5", "3.14")
   * EC8: Non-numeric strings (e.g., "abc", "hello")
   * EC9: Boolean values (true, false)
   * EC10: Null
   * EC11: Undefined
   * EC12: Objects and Arrays
   * EC13: Very large numbers (near overflow)
   * EC14: Very small numbers (near underflow)
   */

  describe('EC1 & EC2: Positive and Negative Integers', () => {
    
    it('should add two positive integers: add(5, 3) = 8', () => {
      expect(add(5, 3)).toBe(8);
    });

    it('should add two negative integers: add(-5, -3) = -8', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    it('should add positive and negative integer: add(10, -4) = 6', () => {
      expect(add(10, -4)).toBe(6);
    });

    it('should add negative and positive integer: add(-10, 4) = -6', () => {
      expect(add(-10, 4)).toBe(-6);
    });

    it('should add large positive integers: add(1000000, 2000000) = 3000000', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });

    it('should add large negative integers: add(-1000000, -2000000) = -3000000', () => {
      expect(add(-1000000, -2000000)).toBe(-3000000);
    });
  });

  describe('EC3: Zero Values', () => {
    
    it('should return second number when first is zero: add(0, 5) = 5', () => {
      expect(add(0, 5)).toBe(5);
    });

    it('should return first number when second is zero: add(5, 0) = 5', () => {
      expect(add(5, 0)).toBe(5);
    });

    it('should return zero when both are zero: add(0, 0) = 0', () => {
      expect(add(0, 0)).toBe(0);
    });

    it('should handle negative zero: add(-0, 0) = 0', () => {
      expect(add(-0, 0)).toBe(0);
    });

    it('should handle zero and negative: add(0, -5) = -5', () => {
      expect(add(0, -5)).toBe(-5);
    });
  });

  describe('EC4 & EC5: Floating-Point Numbers', () => {
    
    it('should add two positive decimals: add(1.5, 2.5) = 4', () => {
      expect(add(1.5, 2.5)).toBe(4);
    });

    it('should add two negative decimals: add(-1.5, -2.5) = -4', () => {
      expect(add(-1.5, -2.5)).toBe(-4);
    });

    it('should add positive and negative decimals: add(3.7, -1.2) ≈ 2.5', () => {
      expect(add(3.7, -1.2)).toBeCloseTo(2.5);
    });

    it('should handle small decimals: add(0.1, 0.2) ≈ 0.3', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    it('should handle very small positive numbers: add(0.0001, 0.0002) ≈ 0.0003', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003);
    });

    it('should handle mixed integer and decimal: add(5, 2.5) = 7.5', () => {
      expect(add(5, 2.5)).toBe(7.5);
    });
  });

  describe('EC6: Special Numeric Values (Infinity, NaN)', () => {
    
    it('should handle positive Infinity: add(Infinity, 5) = Infinity', () => {
      expect(add(Infinity, 5)).toBe(Infinity);
    });

    it('should handle negative Infinity: add(-Infinity, 5) = -Infinity', () => {
      expect(add(-Infinity, 5)).toBe(-Infinity);
    });

    it('should handle Infinity + Infinity: add(Infinity, Infinity) = Infinity', () => {
      expect(add(Infinity, Infinity)).toBe(Infinity);
    });

    it('should handle Infinity + -Infinity: add(Infinity, -Infinity) = NaN', () => {
      expect(add(Infinity, -Infinity)).toBeNaN();
    });

    it('should propagate NaN: add(NaN, 5) = NaN', () => {
      expect(add(NaN, 5)).toBeNaN();
    });

    it('should propagate NaN from second argument: add(5, NaN) = NaN', () => {
      expect(add(5, NaN)).toBeNaN();
    });

    it('should handle NaN + NaN: add(NaN, NaN) = NaN', () => {
      expect(add(NaN, NaN)).toBeNaN();
    });
  });

  describe('EC7: Numeric Strings (Should Convert to Numbers)', () => {
    
    /**
     * According to documentation:
     * - @param {number} augend The first number in an addition.
     * - @param {number} addend The second number in an addition.
     * - @returns {number} Returns the total.
     * 
     * Since return type is {number}, numeric strings should be converted
     * to numbers and added mathematically.
     */
    it('should convert and add: add("5", 3) should return 8', () => {
      const result = add("5", 3);
      // Expected: 8 (numeric addition)
      expect(result).toBe(8);
    });

    it('should convert and add: add(5, "3") should return 8', () => {
      const result = add(5, "3");
      // Expected: 8 (numeric addition)
      expect(result).toBe(8);
    });

    it('should convert and add: add("5", "3") should return 8', () => {
      const result = add("5", "3");
      // Expected: 8 (numeric addition)
      expect(result).toBe(8);
    });

    it('should convert and add decimals: add("1.5", "2.5") should return 4', () => {
      const result = add("1.5", "2.5");
      // Expected: 4 (numeric addition)
      expect(result).toBe(4);
    });

    it('should convert and add negative: add("-5", "3") should return -2', () => {
      const result = add("-5", "3");
      // Expected: -2 (numeric addition)
      expect(result).toBe(-2);
    });
  });

  describe('EC8: Non-Numeric Strings (Invalid - Should Return NaN)', () => {
    
    /**
     * Since return type is {number}, non-numeric strings cannot be 
     * converted to valid numbers and should return NaN.
     */
    it('should return NaN for non-numeric strings: add("abc", "def")', () => {
      const result = add("abc", "def");
      // Expected: NaN (cannot convert to number)
      expect(result).toBeNaN();
    });

    it('should return NaN for mixed non-numeric and number: add("hello", 5)', () => {
      const result = add("hello", 5);
      // Expected: NaN ("hello" cannot be converted to a number)
      expect(result).toBeNaN();
    });

    it('should return NaN for number and non-numeric string: add(5, "hello")', () => {
      const result = add(5, "hello");
      // Expected: NaN ("hello" cannot be converted to a number)
      expect(result).toBeNaN();
    });

    it('should return NaN for non-numeric string and numeric string: add("abc", "5")', () => {
      const result = add("abc", "5");
      // Expected: NaN ("abc" cannot be converted to a number)
      expect(result).toBeNaN();
    });

    it('should return NaN for numeric string and non-numeric string: add("5", "abc")', () => {
      const result = add("5", "abc");
      // Expected: NaN ("abc" cannot be converted to a number)
      expect(result).toBeNaN();
    });

    it('should return NaN for non-numeric and negative numeric string: add("xyz", "-10")', () => {
      const result = add("xyz", "-10");
      // Expected: NaN ("xyz" cannot be converted to a number)
      expect(result).toBeNaN();
    });

    it('should return NaN for decimal numeric string and non-numeric: add("3.14", "pi")', () => {
      const result = add("3.14", "pi");
      // Expected: NaN ("pi" cannot be converted to a number)
      expect(result).toBeNaN();
    });

    it('should return NaN for empty strings: add("", "") = NaN', () => {
      const result = add("", "");
      // Expected: NaN (empty string is non-numeric)
      expect(result).toBeNaN();
    });

    it('should return NaN for whitespace strings: add(" ", " ")', () => {
      const result = add(" ", " ");
      // Expected: NaN (whitespace strings are non-numeric)
      expect(result).toBeNaN();
    });

    it('should return NaN for empty string and number: add("", 5)', () => {
      const result = add("", 5);
      // Expected: NaN (empty string is non-numeric)
      expect(result).toBeNaN();
    });

    it('should return NaN for number and empty string: add(5, "")', () => {
      const result = add(5, "");
      // Expected: NaN (empty string is non-numeric)
      expect(result).toBeNaN();
    });

    it('should return NaN for empty string and numeric string: add("", "5")', () => {
      const result = add("", "5");
      // Expected: NaN (empty string is non-numeric)
      expect(result).toBeNaN();
    });

    it('should return NaN for numeric string and empty string: add("5", "")', () => {
      const result = add("5", "");
      // Expected: NaN (empty string is non-numeric)
      expect(result).toBeNaN();
    });
  });

  describe('EC9: Boolean Values', () => {
    
    it('should handle true as number (1): add(true, 5)', () => {
      const result = add(true, 5);
      // true converts to 1, so expected: 6
      expect(result).toBe(6);
    });

    it('should handle false as number (0): add(false, 5)', () => {
      const result = add(false, 5);
      // false converts to 0, so expected: 5
      expect(result).toBe(5);
    });

    it('should handle two booleans: add(true, true)', () => {
      const result = add(true, true);
      // 1 + 1 = 2
      expect(result).toBe(2);
    });

    it('should handle true and false: add(true, false)', () => {
      const result = add(true, false);
      // 1 + 0 = 1
      expect(result).toBe(1);
    });
  });

  describe('EC10: Null Values', () => {
    
    /**
     * null should convert to 0 in numeric context.
     * So add(number, null) should return the number (number + 0).
     */
    it('should treat null as 0: add(null, 5) = 5', () => {
      const result = add(null, 5);
      // null converts to 0, so expected: 0 + 5 = 5
      expect(result).toBe(5);
    });

    it('should treat null as 0: add(5, null) = 5', () => {
      const result = add(5, null);
      // null converts to 0, so expected: 5 + 0 = 5
      expect(result).toBe(5);
    });

    it('should return 0 for both null: add(null, null) = 0', () => {
      const result = add(null, null);
      // 0 + 0 = 0
      expect(result).toBe(0);
    });
  });

  describe('EC11: Undefined Values', () => {
    
    /**
     * According to the return type {number}, when one argument is undefined,
     * the function should return NaN (cannot perform addition with undefined).
     */
    it('should return NaN when first is undefined: add(undefined, 5) = NaN', () => {
      const result = add(undefined, 5);
      // undefined cannot be converted to a valid number for addition
      expect(result).toBeNaN();
    });

    it('should return NaN when second is undefined: add(5, undefined) = NaN', () => {
      const result = add(5, undefined);
      // undefined cannot be converted to a valid number for addition
      expect(result).toBeNaN();
    });

    it('should return NaN when both undefined: add(undefined, undefined) = NaN', () => {
      const result = add(undefined, undefined);
      // undefined cannot be converted to a valid number
      expect(result).toBeNaN();
    });

    it('should return NaN for single argument (second undefined): add(10) = NaN', () => {
      const result = add(10);
      // Missing second argument means undefined, should return NaN
      expect(result).toBeNaN();
    });

    it('should return NaN for no arguments: add() = NaN', () => {
      const result = add();
      // Both arguments undefined, should return NaN
      expect(result).toBeNaN();
    });
  });

  describe('EC12: Objects and Arrays', () => {
    
    it('should handle empty object: add({}, 5)', () => {
      const result = add({}, 5);
      // {} converts to NaN, NaN + 5 = NaN
      expect(result).toBeNaN();
    });

    it('should handle object with valueOf: add({valueOf: () => 10}, 5)', () => {
      const result = add({valueOf: () => 10}, 5);
      // Should use valueOf, so expected: 15
      expect(result).toBe(15);
    });

    it('should handle empty array: add([], 5)', () => {
      const result = add([], 5);
      // [] converts to 0, so expected: 5
      expect(result).toBe(5);
    });

    it('should handle single element array: add([10], 5)', () => {
      const result = add([10], 5);
      // [10] converts to 10, so expected: 15
      expect(result).toBe(15);
    });

    it('should handle multi-element array: add([1, 2], 5)', () => {
      const result = add([1, 2], 5);
      // [1,2] converts to NaN, so expected: NaN
      expect(result).toBeNaN();
    });
  });

  describe('EC13 & EC14: Boundary Value Analysis - Extreme Numbers', () => {
    
    it('should handle MAX_SAFE_INTEGER: add(Number.MAX_SAFE_INTEGER, 1)', () => {
      const result = add(Number.MAX_SAFE_INTEGER, 1);
      expect(result).toBe(Number.MAX_SAFE_INTEGER + 1);
    });

    it('should handle MIN_SAFE_INTEGER: add(Number.MIN_SAFE_INTEGER, -1)', () => {
      const result = add(Number.MIN_SAFE_INTEGER, -1);
      expect(result).toBe(Number.MIN_SAFE_INTEGER - 1);
    });

    it('should handle MAX_VALUE: add(Number.MAX_VALUE, 1)', () => {
      const result = add(Number.MAX_VALUE, 1);
      expect(result).toBe(Number.MAX_VALUE); // 1 is negligible at this scale
    });

    it('should handle MAX_VALUE overflow: add(Number.MAX_VALUE, Number.MAX_VALUE)', () => {
      const result = add(Number.MAX_VALUE, Number.MAX_VALUE);
      expect(result).toBe(Infinity);
    });

    it('should handle MIN_VALUE (smallest positive): add(Number.MIN_VALUE, Number.MIN_VALUE)', () => {
      const result = add(Number.MIN_VALUE, Number.MIN_VALUE);
      expect(result).toBeCloseTo(Number.MIN_VALUE * 2);
    });

    it('should handle EPSILON: add(1, Number.EPSILON)', () => {
      const result = add(1, Number.EPSILON);
      expect(result).toBeGreaterThan(1);
    });
  });

  describe('Boundary Value Analysis - Around Zero', () => {
    
    it('should handle values just above zero: add(0.000001, 0.000001)', () => {
      expect(add(0.000001, 0.000001)).toBeCloseTo(0.000002);
    });

    it('should handle values just below zero: add(-0.000001, -0.000001)', () => {
      expect(add(-0.000001, -0.000001)).toBeCloseTo(-0.000002);
    });

    it('should handle transition across zero: add(-0.000001, 0.000002)', () => {
      expect(add(-0.000001, 0.000002)).toBeCloseTo(0.000001);
    });

    it('should handle 1 and -1: add(1, -1)', () => {
      expect(add(1, -1)).toBe(0);
    });

    it('should handle boundary at 1: add(0.9999999, 0.0000001)', () => {
      expect(add(0.9999999, 0.0000001)).toBeCloseTo(1);
    });
  });

  describe('Boundary Value Analysis - Integer Boundaries', () => {
    
    it('should handle 32-bit signed max: add(2147483647, 1)', () => {
      expect(add(2147483647, 1)).toBe(2147483648);
    });

    it('should handle 32-bit signed min: add(-2147483648, -1)', () => {
      expect(add(-2147483648, -1)).toBe(-2147483649);
    });

    it('should handle crossing from negative to positive: add(-1, 2)', () => {
      expect(add(-1, 2)).toBe(1);
    });

    it('should handle crossing from positive to negative: add(1, -2)', () => {
      expect(add(1, -2)).toBe(-1);
    });
  });

  describe('Commutative Property Tests', () => {
    
    it('should be commutative for integers: add(3, 5) = add(5, 3)', () => {
      expect(add(3, 5)).toBe(add(5, 3));
    });

    it('should be commutative for decimals: add(1.5, 2.5) = add(2.5, 1.5)', () => {
      expect(add(1.5, 2.5)).toBe(add(2.5, 1.5));
    });

    it('should be commutative for negative numbers: add(-3, 5) = add(5, -3)', () => {
      expect(add(-3, 5)).toBe(add(5, -3));
    });
  });

  describe('Symbol Values', () => {
    
    it('should handle Symbol as first argument', () => {
      const sym = Symbol('test');
      const result = add(sym, 5);
      // Symbol converts to NaN
      expect(result).toBeNaN();
    });

    it('should handle Symbol as second argument', () => {
      const sym = Symbol('test');
      const result = add(5, sym);
      // Symbol converts to NaN
      expect(result).toBeNaN();
    });
  });

});
