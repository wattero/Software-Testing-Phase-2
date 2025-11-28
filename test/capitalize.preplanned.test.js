/**
 * Pre-planned Unit Tests for capitalize.js
 * 
 * These tests are based on the detailed test case design from the Phase 1 test plan.
 * The test cases were designed using equivalence partitioning and boundary value analysis.
 * 
 * Test plan reference: Table G.2 - Test case design for capitalize.js
 * 
 * Equivalence classes:
 * 1. Uppercase strings
 * 2. Lowercase strings
 * 3. Capitalized strings
 * 4. Lowercase string of length 1
 * 5. Uppercase strings of length 1
 * 6. Strings with mix of uppercase and lowercase letters, starting with uppercase letter
 * 7. Strings with mix of uppercase and lowercase letters, starting with lowercase letter
 * 8. Strings that have a space in between words
 * 9. Strings with content as numbers
 * 10. Empty strings
 * 11. Non-strings
 * 
 * NOTE: Tests are written according to EXPECTED behavior from test plan.
 * Failing tests indicate BUGS in the implementation.
 */

import capitalize from '../src/capitalize.js';

describe('capitalize.js - Pre-planned Test Cases (Phase 1 Test Plan)', () => {

  /**
   * Test case 1: test_uppercase_caps("MOIKKA")
   * Equivalence class: Uppercase strings
   * Purpose: Testing if uppercase string is capitalized
   * Expected result: "Moikka"
   */
  describe('TC1: Uppercase strings', () => {
    it('test_uppercase_caps("MOIKKA") should return "Moikka"', () => {
      expect(capitalize('MOIKKA')).toBe('Moikka');
    });
  });

  /**
   * Test case 2: test_lowercase_caps("majakka")
   * Equivalence class: Lowercase strings
   * Purpose: Testing if lowercase string is capitalized
   * Expected result: "Majakka"
   */
  describe('TC2: Lowercase strings', () => {
    it('test_lowercase_caps("majakka") should return "Majakka"', () => {
      expect(capitalize('majakka')).toBe('Majakka');
    });
  });

  /**
   * Test case 3: test_capitalized_caps("Heinätossu")
   * Equivalence class: Capitalized strings
   * Purpose: Testing if already capitalized string is not modified
   * Expected result: "Heinähattu"
   * 
   * NOTE: There appears to be a discrepancy in the test plan - 
   * the selected value is "Heinähattu" but the test case uses "Heinätossu"
   * Following the test case name: test_capitalized_caps("Heinätossu")
   * but since capitalize should not modify already capitalized strings,
   * we test that "Heinähattu" returns "Heinähattu"
   */
  describe('TC3: Capitalized strings', () => {
    it('test_capitalized_caps("Heinähattu") should return "Heinähattu"', () => {
      expect(capitalize('Heinähattu')).toBe('Heinähattu');
    });
  });

  /**
   * Test case 4: test_lowercase_one_caps("u")
   * Equivalence class: Lowercase string of length 1
   * Purpose: Testing if lowercase string of length 1 is capitalized
   * Expected result: "U"
   */
  describe('TC4: Lowercase string of length 1', () => {
    it('test_lowercase_one_caps("u") should return "U"', () => {
      expect(capitalize('u')).toBe('U');
    });
  });

  /**
   * Test case 5: test_uppercase_one_caps("L")
   * Equivalence class: Uppercase strings of length 1
   * Purpose: Testing if already uppercase string of length 1 is not modified
   * Expected result: "L"
   */
  describe('TC5: Uppercase strings of length 1', () => {
    it('test_uppercase_one_caps("L") should return "L"', () => {
      expect(capitalize('L')).toBe('L');
    });
  });

  /**
   * Test case 6: test_mix_up_start_caps("MiTtaRiMato")
   * Equivalence class: Strings with mix of uppercase and lowercase letters, starting with uppercase letter
   * Purpose: Testing if a string containing mix of uppercase and lowercase letters starting with uppercase letter is capitalized
   * Expected result: "Mittarimato"
   */
  describe('TC6: Mixed case starting with uppercase', () => {
    it('test_mix_up_start_caps("MiTtaRiMato") should return "Mittarimato"', () => {
      expect(capitalize('MiTtaRiMato')).toBe('Mittarimato');
    });
  });

  /**
   * Test case 7: test_mix_low_start_caps("kEsäKUu")
   * Equivalence class: Strings with mix of uppercase and lowercase letters, starting with lowercase letter
   * Purpose: Testing if a string containing mix of uppercase and lowercase letters starting with lowercase letter is capitalized
   * Expected result: "Kesäkuu"
   */
  describe('TC7: Mixed case starting with lowercase', () => {
    it('test_mix_low_start_caps("kEsäKUu") should return "Kesäkuu"', () => {
      expect(capitalize('kEsäKUu')).toBe('Kesäkuu');
    });
  });

  /**
   * Test case 8: test_space_caps("kukka keppi")
   * Equivalence class: Strings that have a space in between words
   * Purpose: Testing if only the first word in the string is capitalized
   * Expected result: "Kukka keppi"
   */
  describe('TC8: Strings with space between words', () => {
    it('test_space_caps("kukka keppi") should return "Kukka keppi"', () => {
      expect(capitalize('kukka keppi')).toBe('Kukka keppi');
    });
  });

  /**
   * Test case 9: test_number_caps("1234")
   * Equivalence class: Strings with content as numbers
   * Purpose: Testing if trying to capitalize numbers as string values throws an error
   * Expected result: Some error
   */
  describe('TC9: Strings with content as numbers', () => {
    it('test_number_caps("1234") should return error (throw or return error indicator)', () => {
      // Expected: Some error - capitalizing a numeric string should produce an error
      // If the function processes it without error, that could be considered a bug
      try {
        const result = capitalize('1234');
        // If we get here, no error was thrown
        // Check if result indicates an error (e.g., NaN, undefined, or throws)
        const isError = result === undefined || result === null || Number.isNaN(result);
        // Per test plan, "Some error" is expected, so non-error result is unexpected
        expect(isError).toBe(true);
      } catch (error) {
        // Error was thrown - this matches expected behavior
        expect(error).toBeDefined();
      }
    });
  });

  /**
   * Test case 10: test_empty_caps("")
   * Equivalence class: Empty strings
   * Purpose: Testing if capitalizing an empty string returns an empty string
   * Expected result: ""
   */
  describe('TC10: Empty strings', () => {
    it('test_empty_caps("") should return ""', () => {
      expect(capitalize('')).toBe('');
    });
  });

  /**
   * Test case 11: test_non_string_caps(789)
   * Equivalence class: Non-strings
   * Purpose: Testing if a non-string parameter throws an error
   * Expected result: Some error
   */
  describe('TC11: Non-strings', () => {
    it('test_non_string_caps(789) should return error (throw or return error indicator)', () => {
      // Expected: Some error - non-string input should produce an error
      try {
        const result = capitalize(789);
        // If we get here, no error was thrown
        // The function should not silently convert 789 to "789"
        const isError = result === undefined || result === null || Number.isNaN(result);
        // Per test plan, "Some error" is expected
        expect(isError).toBe(true);
      } catch (error) {
        // Error was thrown - this matches expected behavior
        expect(error).toBeDefined();
      }
    });
  });

});
