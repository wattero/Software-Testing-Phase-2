/**
 * AI-Assisted Unit Tests for toNumber.js
 * 
 * These tests were generated using AI assistance based on:
 * - Equivalence Partitioning Method
 * - Boundary Value Analysis
 * 
 * Test Design Methodology:
 * 1. Created equivalence classes for input parameter
 * 2. Selected representative values from each equivalence class
 * 3. Applied boundary value analysis for numeric boundaries
 * 4. Generated test cases covering all classes and boundaries
 * 
 * Function under test: toNumber(value) -> number
 * - value: The value to process (any type)
 * - Returns: The number
 */

import toNumber from '../src/toNumber.js';

describe('toNumber.js - AI-Assisted Test Suite', () => {

  /**
   * ============================================
   * EQUIVALENCE CLASSES FOR value PARAMETER:
   * ============================================
   * 
   * EC1: Number primitives (integers)
   * EC2: Number primitives (floats/decimals)
   * EC3: Special number values (Infinity, -Infinity, NaN)
   * EC4: Number boundary values (MIN_VALUE, MAX_VALUE, etc.)
   * EC5: Numeric strings (integers)
   * EC6: Numeric strings (floats/decimals)
   * EC7: Numeric strings with whitespace
   * EC8: Binary strings (0b prefix)
   * EC9: Octal strings (0o prefix)
   * EC10: Hexadecimal strings (0x prefix)
   * EC11: Bad hexadecimal strings (signed hex)
   * EC12: Non-numeric strings
   * EC13: Empty string
   * EC14: Boolean values
   * EC15: Null
   * EC16: Undefined
   * EC17: Objects with valueOf
   * EC18: Objects without valueOf
   * EC19: Arrays
   * EC20: Symbols
   * EC21: Functions
   * EC22: Date objects
   */

  describe('EC1: Number Primitives (Integers)', () => {
    
    it('should return same value for positive integer: toNumber(42) = 42', () => {
      expect(toNumber(42)).toBe(42);
    });

    it('should return same value for negative integer: toNumber(-42) = -42', () => {
      expect(toNumber(-42)).toBe(-42);
    });

    it('should return same value for zero: toNumber(0) = 0', () => {
      expect(toNumber(0)).toBe(0);
    });

    it('should return same value for negative zero: toNumber(-0) = -0', () => {
      expect(Object.is(toNumber(-0), -0)).toBe(true);
    });

    it('should return same value for large integer: toNumber(1000000) = 1000000', () => {
      expect(toNumber(1000000)).toBe(1000000);
    });
  });

  describe('EC2: Number Primitives (Floats/Decimals)', () => {
    
    it('should return same value for float (from docs): toNumber(3.2) = 3.2', () => {
      expect(toNumber(3.2)).toBe(3.2);
    });

    it('should return same value for negative float: toNumber(-3.2) = -3.2', () => {
      expect(toNumber(-3.2)).toBe(-3.2);
    });

    it('should return same value for small decimal: toNumber(0.001) = 0.001', () => {
      expect(toNumber(0.001)).toBe(0.001);
    });

    it('should handle scientific notation: toNumber(1e10) = 10000000000', () => {
      expect(toNumber(1e10)).toBe(10000000000);
    });

    it('should handle negative scientific notation: toNumber(1e-10)', () => {
      expect(toNumber(1e-10)).toBe(1e-10);
    });
  });

  describe('EC3: Special Number Values', () => {
    
    it('should return Infinity (from docs): toNumber(Infinity) = Infinity', () => {
      expect(toNumber(Infinity)).toBe(Infinity);
    });

    it('should return -Infinity: toNumber(-Infinity) = -Infinity', () => {
      expect(toNumber(-Infinity)).toBe(-Infinity);
    });

    it('should return NaN for NaN: toNumber(NaN) = NaN', () => {
      expect(toNumber(NaN)).toBeNaN();
    });
  });

  describe('EC4: Number Boundary Values', () => {
    
    it('should return MIN_VALUE (from docs): toNumber(Number.MIN_VALUE) = 5e-324', () => {
      expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
    });

    it('should return MAX_VALUE: toNumber(Number.MAX_VALUE)', () => {
      expect(toNumber(Number.MAX_VALUE)).toBe(Number.MAX_VALUE);
    });

    it('should return MAX_SAFE_INTEGER: toNumber(Number.MAX_SAFE_INTEGER)', () => {
      expect(toNumber(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
    });

    it('should return MIN_SAFE_INTEGER: toNumber(Number.MIN_SAFE_INTEGER)', () => {
      expect(toNumber(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER);
    });

    it('should return EPSILON: toNumber(Number.EPSILON)', () => {
      expect(toNumber(Number.EPSILON)).toBe(Number.EPSILON);
    });
  });

  describe('EC5: Numeric Strings (Integers)', () => {
    
    it('should convert positive integer string: toNumber("42") = 42', () => {
      expect(toNumber('42')).toBe(42);
    });

    it('should convert negative integer string: toNumber("-42") = -42', () => {
      expect(toNumber('-42')).toBe(-42);
    });

    it('should convert zero string: toNumber("0") = 0', () => {
      expect(toNumber('0')).toBe(0);
    });

    it('should convert string with plus sign: toNumber("+42") = 42', () => {
      expect(toNumber('+42')).toBe(42);
    });

    it('should convert large number string: toNumber("1000000") = 1000000', () => {
      expect(toNumber('1000000')).toBe(1000000);
    });
  });

  describe('EC6: Numeric Strings (Floats/Decimals)', () => {
    
    it('should convert float string (from docs): toNumber("3.2") = 3.2', () => {
      expect(toNumber('3.2')).toBe(3.2);
    });

    it('should convert negative float string: toNumber("-3.2") = -3.2', () => {
      expect(toNumber('-3.2')).toBe(-3.2);
    });

    it('should convert string starting with decimal: toNumber(".5") = 0.5', () => {
      expect(toNumber('.5')).toBe(0.5);
    });

    it('should convert string ending with decimal: toNumber("5.") = 5', () => {
      expect(toNumber('5.')).toBe(5);
    });

    it('should convert scientific notation string: toNumber("1e10")', () => {
      expect(toNumber('1e10')).toBe(1e10);
    });

    it('should convert negative scientific notation string: toNumber("1e-10")', () => {
      expect(toNumber('1e-10')).toBe(1e-10);
    });
  });

  describe('EC7: Numeric Strings with Whitespace', () => {
    
    it('should trim leading whitespace: toNumber("  42") = 42', () => {
      expect(toNumber('  42')).toBe(42);
    });

    it('should trim trailing whitespace: toNumber("42  ") = 42', () => {
      expect(toNumber('42  ')).toBe(42);
    });

    it('should trim both leading and trailing whitespace: toNumber("  42  ") = 42', () => {
      expect(toNumber('  42  ')).toBe(42);
    });

    it('should handle tabs: toNumber("\\t42\\t") = 42', () => {
      expect(toNumber('\t42\t')).toBe(42);
    });

    it('should handle newlines: toNumber("\\n42\\n") = 42', () => {
      expect(toNumber('\n42\n')).toBe(42);
    });

    it('should handle mixed whitespace: toNumber(" \\t\\n 3.14 \\n\\t ") = 3.14', () => {
      expect(toNumber(' \t\n 3.14 \n\t ')).toBe(3.14);
    });
  });

  describe('EC8: Binary Strings (0b prefix)', () => {
    
    it('should convert binary string: toNumber("0b101") = 5', () => {
      expect(toNumber('0b101')).toBe(5);
    });

    it('should convert binary string: toNumber("0b1111") = 15', () => {
      expect(toNumber('0b1111')).toBe(15);
    });

    it('should convert binary string: toNumber("0b0") = 0', () => {
      expect(toNumber('0b0')).toBe(0);
    });

    it('should convert binary string: toNumber("0b1") = 1', () => {
      expect(toNumber('0b1')).toBe(1);
    });

    it('should convert binary string: toNumber("0b11111111") = 255', () => {
      expect(toNumber('0b11111111')).toBe(255);
    });

    it('should handle uppercase B: toNumber("0B101") = 5', () => {
      expect(toNumber('0B101')).toBe(5);
    });
  });

  describe('EC9: Octal Strings (0o prefix)', () => {
    
    it('should convert octal string: toNumber("0o10") = 8', () => {
      expect(toNumber('0o10')).toBe(8);
    });

    it('should convert octal string: toNumber("0o77") = 63', () => {
      expect(toNumber('0o77')).toBe(63);
    });

    it('should convert octal string: toNumber("0o0") = 0', () => {
      expect(toNumber('0o0')).toBe(0);
    });

    it('should convert octal string: toNumber("0o7") = 7', () => {
      expect(toNumber('0o7')).toBe(7);
    });

    it('should convert octal string: toNumber("0o777") = 511', () => {
      expect(toNumber('0o777')).toBe(511);
    });

    it('should handle uppercase O: toNumber("0O10") = 8', () => {
      expect(toNumber('0O10')).toBe(8);
    });
  });

  describe('EC10: Hexadecimal Strings (0x prefix)', () => {
    
    it('should convert hex string: toNumber("0x10") = 16', () => {
      expect(toNumber('0x10')).toBe(16);
    });

    it('should convert hex string: toNumber("0xff") = 255', () => {
      expect(toNumber('0xff')).toBe(255);
    });

    it('should convert hex string: toNumber("0x0") = 0', () => {
      expect(toNumber('0x0')).toBe(0);
    });

    it('should convert hex string with uppercase: toNumber("0xFF") = 255', () => {
      expect(toNumber('0xFF')).toBe(255);
    });

    it('should convert hex string: toNumber("0xABCDEF") = 11259375', () => {
      expect(toNumber('0xABCDEF')).toBe(11259375);
    });
  });

  describe('EC11: Bad Hexadecimal Strings (Signed Hex)', () => {
    
    it('should return NaN for signed hex: toNumber("+0x10") = NaN', () => {
      expect(toNumber('+0x10')).toBeNaN();
    });

    it('should return NaN for negative hex: toNumber("-0x10") = NaN', () => {
      expect(toNumber('-0x10')).toBeNaN();
    });

    it('should return NaN for signed hex with lowercase: toNumber("+0xff") = NaN', () => {
      expect(toNumber('+0xff')).toBeNaN();
    });

    it('should return NaN for negative hex with uppercase: toNumber("-0xFF") = NaN', () => {
      expect(toNumber('-0xFF')).toBeNaN();
    });
  });

  describe('EC12: Non-Numeric Strings', () => {
    
    it('should return NaN for alphabetic string: toNumber("hello") = NaN', () => {
      expect(toNumber('hello')).toBeNaN();
    });

    it('should return NaN for mixed alphanumeric: toNumber("123abc") = NaN', () => {
      expect(toNumber('123abc')).toBeNaN();
    });

    it('should return NaN for alphanumeric starting with letters: toNumber("abc123") = NaN', () => {
      expect(toNumber('abc123')).toBeNaN();
    });

    it('should return NaN for special characters: toNumber("@#$%") = NaN', () => {
      expect(toNumber('@#$%')).toBeNaN();
    });

    it('should return NaN for number with comma: toNumber("1,000") = NaN', () => {
      expect(toNumber('1,000')).toBeNaN();
    });

    it('should return NaN for currency format: toNumber("$100") = NaN', () => {
      expect(toNumber('$100')).toBeNaN();
    });

    it('should return NaN for percentage: toNumber("50%") = NaN', () => {
      expect(toNumber('50%')).toBeNaN();
    });
  });

  describe('EC13: Empty String', () => {
    
    it('should convert empty string to 0: toNumber("") = 0', () => {
      expect(toNumber('')).toBe(0);
    });

    it('should convert whitespace-only string to 0: toNumber("   ") = 0', () => {
      expect(toNumber('   ')).toBe(0);
    });

    it('should convert tab-only string to 0: toNumber("\\t") = 0', () => {
      expect(toNumber('\t')).toBe(0);
    });

    it('should convert newline-only string to 0: toNumber("\\n") = 0', () => {
      expect(toNumber('\n')).toBe(0);
    });
  });

  describe('EC14: Boolean Values', () => {
    
    it('should convert true to 1: toNumber(true) = 1', () => {
      expect(toNumber(true)).toBe(1);
    });

    it('should convert false to 0: toNumber(false) = 0', () => {
      expect(toNumber(false)).toBe(0);
    });
  });

  describe('EC15: Null', () => {
    
    it('should convert null to 0: toNumber(null) = 0', () => {
      expect(toNumber(null)).toBe(0);
    });
  });

  describe('EC16: Undefined', () => {
    
    it('should convert undefined to NaN: toNumber(undefined) = NaN', () => {
      expect(toNumber(undefined)).toBeNaN();
    });
  });

  describe('EC17: Objects with valueOf', () => {
    
    it('should use valueOf method: toNumber({ valueOf: () => 42 }) = 42', () => {
      expect(toNumber({ valueOf: () => 42 })).toBe(42);
    });

    it('should use valueOf returning string: toNumber({ valueOf: () => "100" }) = 100', () => {
      expect(toNumber({ valueOf: () => '100' })).toBe(100);
    });

    it('should use valueOf returning negative: toNumber({ valueOf: () => -50 }) = -50', () => {
      expect(toNumber({ valueOf: () => -50 })).toBe(-50);
    });

    it('should handle valueOf returning object (falls back to toString)', () => {
      const obj = {
        valueOf: () => ({ nested: true }),
        toString: () => '123'
      };
      const result = toNumber(obj);
      // When valueOf returns an object, it should fall back to string conversion
      expect(typeof result).toBe('number');
    });
  });

  describe('EC18: Objects without valueOf (Plain Objects)', () => {
    
    it('should return NaN for plain empty object: toNumber({}) = NaN', () => {
      expect(toNumber({})).toBeNaN();
    });

    it('should return NaN for object with properties: toNumber({ a: 1 }) = NaN', () => {
      expect(toNumber({ a: 1 })).toBeNaN();
    });

    it('should handle object with custom toString', () => {
      const obj = { toString: () => '42' };
      expect(toNumber(obj)).toBe(42);
    });

    it('should handle object with numeric toString', () => {
      const obj = { toString: () => '3.14' };
      expect(toNumber(obj)).toBe(3.14);
    });
  });

  describe('EC19: Arrays', () => {
    
    it('should convert empty array to 0: toNumber([]) = 0', () => {
      expect(toNumber([])).toBe(0);
    });

    it('should convert single element array: toNumber([42]) = 42', () => {
      expect(toNumber([42])).toBe(42);
    });

    it('should convert single string element array: toNumber(["42"]) = 42', () => {
      expect(toNumber(['42'])).toBe(42);
    });

    it('should return NaN for multi-element array: toNumber([1, 2]) = NaN', () => {
      expect(toNumber([1, 2])).toBeNaN();
    });

    it('should convert array with single float: toNumber([3.14]) = 3.14', () => {
      expect(toNumber([3.14])).toBe(3.14);
    });

    it('should return NaN for array with non-numeric string: toNumber(["hello"]) = NaN', () => {
      expect(toNumber(['hello'])).toBeNaN();
    });
  });

  describe('EC20: Symbols', () => {
    
    it('should return NaN for Symbol: toNumber(Symbol("test")) = NaN', () => {
      expect(toNumber(Symbol('test'))).toBeNaN();
    });

    it('should return NaN for Symbol without description: toNumber(Symbol()) = NaN', () => {
      expect(toNumber(Symbol())).toBeNaN();
    });

    it('should return NaN for well-known Symbol: toNumber(Symbol.iterator) = NaN', () => {
      expect(toNumber(Symbol.iterator)).toBeNaN();
    });
  });

  describe('EC21: Functions', () => {
    
    it('should return NaN for function: toNumber(() => 42) = NaN', () => {
      expect(toNumber(() => 42)).toBeNaN();
    });

    it('should return NaN for named function: toNumber(function test() {}) = NaN', () => {
      expect(toNumber(function test() {})).toBeNaN();
    });

    it('should return NaN for arrow function: toNumber(x => x) = NaN', () => {
      expect(toNumber(x => x)).toBeNaN();
    });
  });

  describe('EC22: Date Objects', () => {
    
    it('should convert Date to timestamp: toNumber(new Date())', () => {
      const date = new Date('2025-01-01T00:00:00.000Z');
      const result = toNumber(date);
      expect(result).toBe(date.getTime());
    });

    it('should convert Date to number', () => {
      const date = new Date(0); // Unix epoch
      expect(toNumber(date)).toBe(0);
    });

    it('should handle invalid Date: toNumber(new Date("invalid")) = NaN', () => {
      expect(toNumber(new Date('invalid'))).toBeNaN();
    });
  });

  describe('Boundary Value Analysis - Numeric Boundaries', () => {
    
    it('BVA: Zero boundary', () => {
      expect(toNumber(0)).toBe(0);
      expect(toNumber(-0)).toBe(-0);
      expect(toNumber('0')).toBe(0);
    });

    it('BVA: One and negative one', () => {
      expect(toNumber(1)).toBe(1);
      expect(toNumber(-1)).toBe(-1);
      expect(toNumber('1')).toBe(1);
      expect(toNumber('-1')).toBe(-1);
    });

    it('BVA: MAX_SAFE_INTEGER boundaries', () => {
      expect(toNumber(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
      expect(toNumber(Number.MAX_SAFE_INTEGER + 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    });

    it('BVA: MIN_SAFE_INTEGER boundaries', () => {
      expect(toNumber(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER);
      expect(toNumber(Number.MIN_SAFE_INTEGER - 1)).toBe(Number.MIN_SAFE_INTEGER - 1);
    });

    it('BVA: Very small positive numbers', () => {
      expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
      expect(toNumber(Number.MIN_VALUE / 2)).toBe(0); // Underflow to 0
    });

    it('BVA: Very large numbers', () => {
      expect(toNumber(Number.MAX_VALUE)).toBe(Number.MAX_VALUE);
      expect(toNumber(Number.MAX_VALUE * 2)).toBe(Infinity); // Overflow to Infinity
    });
  });

  describe('Boundary Value Analysis - String Length', () => {
    
    it('BVA: Single digit string', () => {
      expect(toNumber('5')).toBe(5);
    });

    it('BVA: Two digit string', () => {
      expect(toNumber('42')).toBe(42);
    });

    it('BVA: Long numeric string', () => {
      expect(toNumber('12345678901234567890')).toBe(12345678901234567890);
    });

    it('BVA: String with many decimal places', () => {
      expect(toNumber('3.141592653589793')).toBeCloseTo(Math.PI);
    });
  });

  describe('Real-world E-Commerce Use Cases', () => {
    
    /**
     * These tests simulate real-world scenarios from the E-commerce application
     * as described in the test plan.
     */

    it('should convert price string to number', () => {
      expect(toNumber('19.99')).toBe(19.99);
    });

    it('should convert quantity string to number', () => {
      expect(toNumber('5')).toBe(5);
    });

    it('should handle price with leading/trailing spaces', () => {
      expect(toNumber('  24.50  ')).toBe(24.50);
    });

    it('should convert product ID string to number', () => {
      expect(toNumber('12345')).toBe(12345);
    });

    it('should handle zero price (free item)', () => {
      expect(toNumber('0')).toBe(0);
      expect(toNumber('0.00')).toBe(0);
    });

    it('should handle discount percentage calculation', () => {
      const discountStr = '0.15'; // 15% discount
      expect(toNumber(discountStr)).toBe(0.15);
    });

    it('should handle tax rate conversion', () => {
      expect(toNumber('0.24')).toBe(0.24); // 24% VAT
    });

    it('should handle inventory count', () => {
      expect(toNumber('100')).toBe(100);
    });

    it('should return NaN for invalid price format', () => {
      expect(toNumber('€19.99')).toBeNaN();
      expect(toNumber('19,99')).toBeNaN(); // European format with comma
    });

    it('should handle shipping cost conversion', () => {
      expect(toNumber('5.95')).toBe(5.95);
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    
    it('should handle string "Infinity"', () => {
      expect(toNumber('Infinity')).toBe(Infinity);
    });

    it('should handle string "-Infinity"', () => {
      expect(toNumber('-Infinity')).toBe(-Infinity);
    });

    it('should handle string "NaN"', () => {
      expect(toNumber('NaN')).toBeNaN();
    });

    it('should handle exponential notation in string', () => {
      expect(toNumber('1.5e3')).toBe(1500);
      expect(toNumber('1.5E3')).toBe(1500);
      expect(toNumber('1.5e-3')).toBe(0.0015);
    });

    it('should handle leading zeros in string', () => {
      expect(toNumber('007')).toBe(7);
      expect(toNumber('00123')).toBe(123);
    });

    it('should handle positive sign in string', () => {
      expect(toNumber('+5')).toBe(5);
      expect(toNumber('+3.14')).toBe(3.14);
    });

    it('should handle Number object wrapper', () => {
      expect(toNumber(new Number(42))).toBe(42);
    });

    it('should handle String object wrapper', () => {
      expect(toNumber(new String('42'))).toBe(42);
    });

    it('should handle Boolean object wrapper', () => {
      expect(toNumber(new Boolean(true))).toBe(1);
      expect(toNumber(new Boolean(false))).toBe(0);
    });

    it('should preserve floating point precision', () => {
      expect(toNumber(0.1 + 0.2)).toBeCloseTo(0.3);
    });

    it('should handle nested array with single element', () => {
      expect(toNumber([[42]])).toBe(42);
    });

    it('should handle deeply nested single element array', () => {
      expect(toNumber([[[[[5]]]]])).toBe(5);
    });
  });

  describe('Invalid Binary/Octal Strings', () => {
    
    it('should return NaN for invalid binary: toNumber("0b2") = NaN', () => {
      expect(toNumber('0b2')).toBeNaN();
    });

    it('should return NaN for invalid octal: toNumber("0o8") = NaN', () => {
      expect(toNumber('0o8')).toBeNaN();
    });

    it('should handle empty binary: toNumber("0b") = NaN', () => {
      expect(toNumber('0b')).toBeNaN();
    });

    it('should handle empty octal: toNumber("0o") = NaN', () => {
      expect(toNumber('0o')).toBeNaN();
    });
  });

  describe('Unicode and Special Characters', () => {
    
    it('should return NaN for unicode digits', () => {
      expect(toNumber('①②③')).toBeNaN(); // Circled digits
    });

    it('should return NaN for fullwidth digits', () => {
      expect(toNumber('１２３')).toBeNaN(); // Fullwidth digits
    });

    it('should handle unicode whitespace (NBSP) around numbers', () => {
      expect(toNumber('\u00A042')).toBe(42);
      expect(toNumber('42\u00A0')).toBe(42);
    });
  });

  describe('Type Coercion Consistency', () => {
    
    it('should be consistent with Number() for primitives', () => {
      expect(toNumber(42)).toBe(Number(42));
      expect(toNumber('42')).toBe(Number('42'));
      expect(toNumber(true)).toBe(Number(true));
      expect(toNumber(false)).toBe(Number(false));
      expect(toNumber(null)).toBe(Number(null));
    });

    it('should return NaN for undefined like Number()', () => {
      expect(toNumber(undefined)).toBeNaN();
      expect(Number(undefined)).toBeNaN();
    });
  });

});
