/**
 * AI-Assisted Unit Tests for capitalize.js
 * 
 * These tests were generated using AI assistance based on:
 * - Equivalence Partitioning Method
 * - Boundary Value Analysis
 * 
 * Test Design Methodology:
 * 1. Created equivalence classes for input parameter
 * 2. Selected representative values from each equivalence class
 * 3. Applied boundary value analysis for string length boundaries
 * 4. Generated test cases covering all classes and boundaries
 * 
 * Function under test: capitalize(string) -> string
 * - string: The string to capitalize
 * - Returns: The capitalized string (first char uppercase, rest lowercase)
 */

import capitalize from '../src/capitalize.js';

describe('capitalize.js - AI-Assisted Test Suite', () => {

  /**
   * ============================================
   * EQUIVALENCE CLASSES FOR string PARAMETER:
   * ============================================
   * 
   * EC1: All uppercase strings (e.g., "HELLO")
   * EC2: All lowercase strings (e.g., "hello")
   * EC3: Already capitalized strings (e.g., "Hello")
   * EC4: Mixed case strings starting with uppercase (e.g., "HeLLo")
   * EC5: Mixed case strings starting with lowercase (e.g., "hELLO")
   * EC6: Single character strings - lowercase (e.g., "a")
   * EC7: Single character strings - uppercase (e.g., "A")
   * EC8: Empty string ("")
   * EC9: Strings with leading/trailing whitespace
   * EC10: Strings with spaces between words
   * EC11: Strings with numbers
   * EC12: Strings with special characters
   * EC13: Strings with Unicode characters
   * EC14: Non-string inputs (numbers, booleans, objects, null, undefined)
   * EC15: Strings starting with numbers
   * EC16: Strings starting with special characters
   */

  describe('EC1: All Uppercase Strings', () => {
    
    it('should capitalize "HELLO" to "Hello"', () => {
      expect(capitalize('HELLO')).toBe('Hello');
    });

    it('should capitalize "WORLD" to "World"', () => {
      expect(capitalize('WORLD')).toBe('World');
    });

    it('should capitalize "ABC" to "Abc"', () => {
      expect(capitalize('ABC')).toBe('Abc');
    });

    it('should capitalize "TESTING" to "Testing"', () => {
      expect(capitalize('TESTING')).toBe('Testing');
    });

    it('should capitalize "XYZ" to "Xyz"', () => {
      expect(capitalize('XYZ')).toBe('Xyz');
    });
  });

  describe('EC2: All Lowercase Strings', () => {
    
    it('should capitalize "hello" to "Hello"', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    it('should capitalize "world" to "World"', () => {
      expect(capitalize('world')).toBe('World');
    });

    it('should capitalize "javascript" to "Javascript"', () => {
      expect(capitalize('javascript')).toBe('Javascript');
    });

    it('should capitalize "testing" to "Testing"', () => {
      expect(capitalize('testing')).toBe('Testing');
    });
  });

  describe('EC3: Already Capitalized Strings', () => {
    
    it('should keep "Hello" as "Hello"', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });

    it('should keep "World" as "World"', () => {
      expect(capitalize('World')).toBe('World');
    });

    it('should transform "Fred" to "Fred" (already correct)', () => {
      expect(capitalize('Fred')).toBe('Fred');
    });
  });

  describe('EC4: Mixed Case Starting with Uppercase', () => {
    
    it('should capitalize "HeLLo" to "Hello"', () => {
      expect(capitalize('HeLLo')).toBe('Hello');
    });

    it('should capitalize "FRED" to "Fred" (from docs)', () => {
      expect(capitalize('FRED')).toBe('Fred');
    });

    it('should capitalize "JaVaScRiPt" to "Javascript"', () => {
      expect(capitalize('JaVaScRiPt')).toBe('Javascript');
    });

    it('should capitalize "AbCdEf" to "Abcdef"', () => {
      expect(capitalize('AbCdEf')).toBe('Abcdef');
    });
  });

  describe('EC5: Mixed Case Starting with Lowercase', () => {
    
    it('should capitalize "hELLO" to "Hello"', () => {
      expect(capitalize('hELLO')).toBe('Hello');
    });

    it('should capitalize "jAVASCRIPT" to "Javascript"', () => {
      expect(capitalize('jAVASCRIPT')).toBe('Javascript');
    });

    it('should capitalize "tEST" to "Test"', () => {
      expect(capitalize('tEST')).toBe('Test');
    });

    it('should capitalize "aBcDeF" to "Abcdef"', () => {
      expect(capitalize('aBcDeF')).toBe('Abcdef');
    });
  });

  describe('EC6: Single Character - Lowercase', () => {
    
    it('should capitalize "a" to "A"', () => {
      expect(capitalize('a')).toBe('A');
    });

    it('should capitalize "z" to "Z"', () => {
      expect(capitalize('z')).toBe('Z');
    });

    it('should capitalize "m" to "M"', () => {
      expect(capitalize('m')).toBe('M');
    });
  });

  describe('EC7: Single Character - Uppercase', () => {
    
    it('should keep "A" as "A"', () => {
      expect(capitalize('A')).toBe('A');
    });

    it('should keep "Z" as "Z"', () => {
      expect(capitalize('Z')).toBe('Z');
    });

    it('should keep "M" as "M"', () => {
      expect(capitalize('M')).toBe('M');
    });
  });

  describe('EC8: Empty String', () => {
    
    it('should return empty string for empty input: capitalize("")', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('EC9: Strings with Leading/Trailing Whitespace', () => {
    
    it('should capitalize " hello" to " hello" (space preserved, no uppercase change)', () => {
      const result = capitalize(' hello');
      // First char is space, which has no uppercase, rest lowercased
      expect(result).toBe(' hello');
    });

    it('should capitalize "hello " to "Hello "', () => {
      expect(capitalize('hello ')).toBe('Hello ');
    });

    it('should capitalize "  HELLO  " to "  hello  "', () => {
      expect(capitalize('  HELLO  ')).toBe('  hello  ');
    });

    it('should handle tab character: capitalize("\\thello")', () => {
      const result = capitalize('\thello');
      expect(result).toBe('\thello');
    });

    it('should handle newline: capitalize("\\nhello")', () => {
      const result = capitalize('\nhello');
      expect(result).toBe('\nhello');
    });
  });

  describe('EC10: Strings with Spaces Between Words', () => {
    
    it('should only capitalize first word: "hello world" -> "Hello world"', () => {
      expect(capitalize('hello world')).toBe('Hello world');
    });

    it('should only capitalize first word: "HELLO WORLD" -> "Hello world"', () => {
      expect(capitalize('HELLO WORLD')).toBe('Hello world');
    });

    it('should handle multiple spaces: "hello  world" -> "Hello  world"', () => {
      expect(capitalize('hello  world')).toBe('Hello  world');
    });

    it('should handle three words: "one two three" -> "One two three"', () => {
      expect(capitalize('one two three')).toBe('One two three');
    });
  });

  describe('EC11: Strings with Numbers', () => {
    
    it('should handle pure numeric string: "123"', () => {
      const result = capitalize('123');
      // Numbers don\'t have case, should return "123"
      expect(result).toBe('123');
    });

    it('should handle alphanumeric starting with letter: "abc123"', () => {
      expect(capitalize('abc123')).toBe('Abc123');
    });

    it('should handle alphanumeric starting with number: "123abc"', () => {
      const result = capitalize('123abc');
      // First char is number (no uppercase), rest lowercased
      expect(result).toBe('123abc');
    });

    it('should handle mixed: "test123TEST"', () => {
      expect(capitalize('test123TEST')).toBe('Test123test');
    });
  });

  describe('EC12: Strings with Special Characters', () => {
    
    it('should handle string starting with special char: "!hello"', () => {
      const result = capitalize('!hello');
      // First char is !, rest lowercased
      expect(result).toBe('!hello');
    });

    it('should handle string with special chars: "hello!"', () => {
      expect(capitalize('hello!')).toBe('Hello!');
    });

    it('should handle pure special characters: "!@#$%"', () => {
      const result = capitalize('!@#$%');
      expect(result).toBe('!@#$%');
    });

    it('should handle hyphenated: "hello-world"', () => {
      expect(capitalize('hello-world')).toBe('Hello-world');
    });

    it('should handle underscored: "hello_world"', () => {
      expect(capitalize('hello_world')).toBe('Hello_world');
    });

    it('should handle period: "hello.world"', () => {
      expect(capitalize('hello.world')).toBe('Hello.world');
    });
  });

  describe('EC13: Unicode Characters', () => {
    
    it('should handle accented characters: "école" -> "École"', () => {
      expect(capitalize('école')).toBe('École');
    });

    it('should handle uppercase accented: "ÉCOLE" -> "École"', () => {
      expect(capitalize('ÉCOLE')).toBe('École');
    });

    it('should handle German umlaut: "über" -> "Über"', () => {
      expect(capitalize('über')).toBe('Über');
    });

    it('should handle Nordic characters: "åland" -> "Åland"', () => {
      expect(capitalize('åland')).toBe('Åland');
    });

    it('should handle Finnish characters: "äiti" -> "Äiti"', () => {
      expect(capitalize('äiti')).toBe('Äiti');
    });

    it('should handle mixed unicode: "KÄYTTÖ" -> "Käyttö"', () => {
      expect(capitalize('KÄYTTÖ')).toBe('Käyttö');
    });

    it('should handle emoji at start: "😀hello" -> "😀hello"', () => {
      const result = capitalize('😀hello');
      // Emoji is first character (no case change), rest lowercased
      expect(result).toBe('😀hello');
    });

    it('should handle Chinese characters: "你好world" -> "你好world"', () => {
      const result = capitalize('你好world');
      // Chinese char doesn't have case, rest lowercased
      expect(result).toBe('你好world');
    });

    it('should handle Cyrillic: "привет" -> "Привет"', () => {
      expect(capitalize('привет')).toBe('Привет');
    });
  });

  describe('EC14: Non-String Inputs', () => {
    
    it('should handle number input: capitalize(123)', () => {
      const result = capitalize(123);
      // toString converts 123 to "123", then capitalize
      expect(result).toBe('123');
    });

    it('should handle negative number: capitalize(-456)', () => {
      const result = capitalize(-456);
      // "-456" -> first char is "-"
      expect(result).toBe('-456');
    });

    it('should handle float: capitalize(3.14)', () => {
      const result = capitalize(3.14);
      expect(result).toBe('3.14');
    });

    it('should handle boolean true: capitalize(true)', () => {
      const result = capitalize(true);
      // "true" -> "True"
      expect(result).toBe('True');
    });

    it('should handle boolean false: capitalize(false)', () => {
      const result = capitalize(false);
      // "false" -> "False"
      expect(result).toBe('False');
    });

    it('should handle null: capitalize(null) = ""', () => {
      const result = capitalize(null);
      // null should return empty string
      expect(result).toBe('');
    });

    it('should handle undefined: capitalize(undefined) = ""', () => {
      const result = capitalize(undefined);
      // undefined should return empty string
      expect(result).toBe('');
    });

    it('should handle empty object: capitalize({})', () => {
      const result = capitalize({});
      // {} -> "[object Object]" -> "[object object]"
      expect(result).toBe('[object object]');
    });

    it('should handle array: capitalize(["hello"])', () => {
      const result = capitalize(['hello']);
      // ["hello"] -> "hello" -> "Hello"
      expect(result).toBe('Hello');
    });

    it('should handle empty array: capitalize([])', () => {
      const result = capitalize([]);
      // [] -> "" -> ""
      expect(result).toBe('');
    });

    it('should handle NaN: capitalize(NaN)', () => {
      const result = capitalize(NaN);
      // NaN -> "NaN" -> "Nan"
      expect(result).toBe('Nan');
    });

    it('should handle Infinity: capitalize(Infinity)', () => {
      const result = capitalize(Infinity);
      // Infinity -> "Infinity" -> "Infinity"
      expect(result).toBe('Infinity');
    });
  });

  describe('EC15: Strings Starting with Numbers', () => {
    
    it('should handle "1st" -> "1st"', () => {
      expect(capitalize('1st')).toBe('1st');
    });

    it('should handle "2ND" -> "2nd"', () => {
      expect(capitalize('2ND')).toBe('2nd');
    });

    it('should handle "99bottles" -> "99bottles"', () => {
      expect(capitalize('99bottles')).toBe('99bottles');
    });
  });

  describe('EC16: Strings Starting with Special Characters', () => {
    
    it('should handle "@username" -> "@username"', () => {
      expect(capitalize('@username')).toBe('@username');
    });

    it('should handle "#hashtag" -> "#hashtag"', () => {
      expect(capitalize('#hashtag')).toBe('#hashtag');
    });

    it('should handle "$money" -> "$money"', () => {
      expect(capitalize('$money')).toBe('$money');
    });

    it('should handle "_private" -> "_private"', () => {
      expect(capitalize('_private')).toBe('_private');
    });
  });

  describe('Boundary Value Analysis - String Length', () => {
    
    it('BVA: Empty string (length 0)', () => {
      expect(capitalize('')).toBe('');
    });

    it('BVA: Single char lowercase (length 1)', () => {
      expect(capitalize('x')).toBe('X');
    });

    it('BVA: Single char uppercase (length 1)', () => {
      expect(capitalize('X')).toBe('X');
    });

    it('BVA: Two chars (length 2)', () => {
      expect(capitalize('ab')).toBe('Ab');
    });

    it('BVA: Two chars uppercase (length 2)', () => {
      expect(capitalize('AB')).toBe('Ab');
    });

    it('BVA: Long string (100 chars)', () => {
      const input = 'A' + 'B'.repeat(99);
      const expected = 'A' + 'b'.repeat(99);
      expect(capitalize(input)).toBe(expected);
    });

    it('BVA: Very long string (1000 chars)', () => {
      const input = 'HELLO' + 'X'.repeat(995);
      const result = capitalize(input);
      expect(result.length).toBe(1000);
      expect(result[0]).toBe('H');
      expect(result[1]).toBe('e');
    });
  });

  describe('Boundary Value Analysis - Character Boundaries', () => {
    
    it('BVA: First lowercase letter "a"', () => {
      expect(capitalize('a')).toBe('A');
    });

    it('BVA: Last lowercase letter "z"', () => {
      expect(capitalize('z')).toBe('Z');
    });

    it('BVA: First uppercase letter "A"', () => {
      expect(capitalize('A')).toBe('A');
    });

    it('BVA: Last uppercase letter "Z"', () => {
      expect(capitalize('Z')).toBe('Z');
    });

    it('BVA: Character before "a" (backtick)', () => {
      const result = capitalize('`test');
      expect(result).toBe('`test');
    });

    it('BVA: Character after "z" (curly brace)', () => {
      const result = capitalize('{test');
      expect(result).toBe('{test');
    });

    it('BVA: Character before "A" (at sign)', () => {
      const result = capitalize('@TEST');
      expect(result).toBe('@test');
    });

    it('BVA: Character after "Z" (bracket)', () => {
      const result = capitalize('[TEST');
      expect(result).toBe('[test');
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    
    it('should handle string with only whitespace: "   "', () => {
      const result = capitalize('   ');
      expect(result).toBe('   ');
    });

    it('should handle string "null" (literal string)', () => {
      expect(capitalize('null')).toBe('Null');
    });

    it('should handle string "undefined" (literal string)', () => {
      expect(capitalize('undefined')).toBe('Undefined');
    });

    it('should handle string "TRUE" (literal string)', () => {
      expect(capitalize('TRUE')).toBe('True');
    });

    it('should handle string "FALSE" (literal string)', () => {
      expect(capitalize('FALSE')).toBe('False');
    });

    it('should handle zero as string: "0"', () => {
      expect(capitalize('0')).toBe('0');
    });

    it('should handle Symbol - toString converts Symbol to its string representation', () => {
      const sym = Symbol('test');
      const result = capitalize(sym);
      // Per isSymbol check in toString: returns value.toString()
      // Symbol('test').toString() => 'Symbol(test)'
      // capitalize('Symbol(test)') => 'Symbol(test)' (S already uppercase)
      expect(result).toBe('Symbol(test)');
    });

    it('should preserve case of non-letter first char: "123ABC"', () => {
      expect(capitalize('123ABC')).toBe('123abc');
    });

    it('should handle all-whitespace with letters: "   a   "', () => {
      expect(capitalize('   a   ')).toBe('   a   ');
    });
  });

  describe('Idempotency Tests', () => {
    
    it('capitalize(capitalize(x)) should equal capitalize(x) for "hello"', () => {
      const input = 'hello';
      expect(capitalize(capitalize(input))).toBe(capitalize(input));
    });

    it('capitalize(capitalize(x)) should equal capitalize(x) for "HELLO"', () => {
      const input = 'HELLO';
      expect(capitalize(capitalize(input))).toBe(capitalize(input));
    });

    it('capitalize(capitalize(x)) should equal capitalize(x) for "HeLLo"', () => {
      const input = 'HeLLo';
      expect(capitalize(capitalize(input))).toBe(capitalize(input));
    });

    it('capitalize(capitalize(x)) should equal capitalize(x) for ""', () => {
      const input = '';
      expect(capitalize(capitalize(input))).toBe(capitalize(input));
    });
  });

  describe('Real-world Use Cases', () => {
    
    it('should capitalize name: "john" -> "John"', () => {
      expect(capitalize('john')).toBe('John');
    });

    it('should capitalize name: "MARY" -> "Mary"', () => {
      expect(capitalize('MARY')).toBe('Mary');
    });

    it('should handle sentence: "hello world" -> "Hello world"', () => {
      expect(capitalize('hello world')).toBe('Hello world');
    });

    it('should handle title case input: "The Quick Brown Fox"', () => {
      expect(capitalize('The Quick Brown Fox')).toBe('The quick brown fox');
    });

    it('should handle URL-like: "httpS://EXAMPLE.COM"', () => {
      expect(capitalize('httpS://EXAMPLE.COM')).toBe('Https://example.com');
    });

    it('should handle file extension: ".gitignore"', () => {
      const result = capitalize('.gitignore');
      expect(result).toBe('.gitignore');
    });
  });

});
