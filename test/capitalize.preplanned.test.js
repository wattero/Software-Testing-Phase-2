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
 */

import capitalize from '../src/capitalize.js';

describe('capitalize.js - Pre-planned Test Cases (Phase 1 Test Plan)', () => {

  describe('TC1: Uppercase strings', () => {
    it('test_uppercase_caps("MOIKKA") should return "Moikka"', () => {
      expect(capitalize('MOIKKA')).toBe('Moikka');
    });
  });

  describe('TC2: Lowercase strings', () => {
    it('test_lowercase_caps(“majakka”) should return "Majakka"', () => {
      expect(capitalize('majakka')).toBe('Majakka');
    });
  });

  describe('TC3: Capitalized strings', () => {
    it('test_capitalized_caps(“Heinähattu”) should return "Heinähattu"', () => {
      expect(capitalize('Heinähattu')).toBe('Heinähattu');
    });
  });

  describe('TC4: Lowercase string of length 1 ', () => {
    it('test_lowercase_one_caps(“u”) should return "U"', () => {
      expect(capitalize('u')).toBe('U');
    });
  });

  describe('TC5: Uppercase strings of length 1', () => {
    it('test_uppercase_one_caps(“L”) should return "L"', () => {
      expect(capitalize('L')).toBe('L');
    });
  });

  describe('TC6: Strings with mix of uppercase and lowercase letters, starting with uppercase letter', () => {
    it('test_mix_up_start_caps(“MiTtaRiMato”)  should return "Mittarimato"', () => {
      expect(capitalize('MiTtaRiMato')).toBe('Mittarimato');
    });
  });

  describe('TC7: Strings with mix of uppercase and lowercase letters, starting with lowercase letter ', () => {
    it('test_mix_low_start_caps(“kEsäKUu”) should return "Kesäkuu"', () => {
      expect(capitalize('kEsäKUu')).toBe('Kesäkuu');
    });
  });

  describe('TC8: Strings that have a space in between words', () => {
    it('test_space_caps(“kukka keppi”) should return "Kukka keppi"', () => {
      expect(capitalize('kukka keppi')).toBe('Kukka keppi');
    });
  });
  
  describe('TC9: Strings with content as numbers', () => {
    it('test_number_caps("1234") should return some error indicator', () => {
      const result = capitalize('1234');
      const isError = result === undefined || result === null || Number.isNaN(result);
      expect(isError).toBe(true);
    });
  });

  describe('TC10: Empty strings', () => {
    it('test_empty_caps(“”)  should return "" ', () => {
      expect(capitalize('')).toBe('');
    });
  });

  describe('TC11: Non-strings', () => {
    it('test_non_string_caps(789) should return some error indicator', () => {
      const result = capitalize(789);
      const isError = result === undefined || result === null || Number.isNaN(result);
      expect(isError).toBe(true);
    });
  });
});
