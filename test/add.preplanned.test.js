/**
 * Pre-planned Unit Tests for add.js
 * 
 * These tests are based on the detailed test case design from the Phase 1 test plan.
 * The test cases were designed using equivalence partitioning and boundary value analysis.
 * 
 * Test plan reference: Table G.1 - Test case design for add.js
 * 
 * Equivalence classes:
 * 1. ([1, INT_MAX], [1, INT_MAX]) - Two positive numbers
 * 2. ([INT_MIN, -1], [INT_MIN, -1]) - Two negative numbers
 * 3. ([INT_MIN, -1], [1, INT_MAX]) - Different signs
 * 4. ([0], [INT_MIN, INT_MAX]) - Zero and a number
 * 5. ([0], [0]) - Two zeros
 * 6. ([INT_MIN, INT_MAX], [INT_MIN, INT_MAX]) - Decimal numbers
 * 7. ([string], [string]) - Two non-numeric strings (invalid)
 * 8. ([INT_MIN, INT_MAX], [string]) - Number and string (invalid)
 * 9. ([INT_MIN, INT_MAX], []) - Missing argument (invalid)
  */

import add from '../src/add.js';

describe('add.js - Pre-planned Test Cases (Phase 1 Test Plan)', () => {
  
  describe('TC1: Two positive numbers', () => {
    it('test_positive_adding(3, 6) should return 9', () => {
      expect(add(3, 6)).toBe(9);
    })
  });

  describe('TC2: Two negative numbers', () => {
    it('test_negative_adding(-5, -9) should return -14', () => {
      expect(add(-5, -9)).toBe(-14);
    })
  });

  describe('TC3: Different signs', () => {
    it('test_neg_pos_adding(-5, 9) should return 4', () => {
      expect(add(-5, 9)).toBe(4);
    })
  });

  describe('TC4: Zero and a number', () => {
    it('test_zero_number_adding(0, 2) should return 2', () => {
      expect(add(0, 2)).toBe(2);
    })
  });

  describe('TC5: Two zeros', () => {
    it('test_zero_adding(0, 0) should return 0', () => {
      expect(add(0, 0)).toBe(0);
    })
  });

  describe('TC6: Two decimal numbers', () => {
    it('test_decimal_adding(4.16, 122.33) should return 126.49', () => {
      expect(add(4.16, 122.33)).toBe(126.49);
    })
  });

  describe('TC7: Two strings', () => {
    it('test_non_numeric_adding("jee", "4") should return error (NaN or throw)', () => {
      const result = add("jee", "4");
      const isError = Number.isNaN(result) || typeof result !== 'number';
      expect(isError).toBe(true);
    })
  });

  describe('TC8: Number and string', () => {
    it('test_num_non_num_adding(2, "7") should return error (NaN or throw)', () => {
      const result = add(2, "7");
      const isError = Number.isNaN(result) || typeof result !== 'number';
      expect(isError).toBe(true);
    });
  });

  describe('TC9: Missing argument', () => {
    it('test_arg_missing_add(4) should return error (NaN or throw)', () => {
      const result = add(4);
      const isError = Number.isNaN(result) || result === undefined;
      expect(isError).toBe(true);
    });
  });

});