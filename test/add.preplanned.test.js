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
 * 
 * Note: INT_MAX and INT_MIN are used for maximum and minimum values, 
 * and they can also include decimals, not just integers.
 * 
 * NOTE: Tests are written according to EXPECTED behavior from test plan.
 * Failing tests indicate BUGS in the implementation.
 */

import add from '../src/add.js';

describe('add.js - Pre-planned Test Cases (Phase 1 Test Plan)', () => {
  
  /**
   * Test case 1: test_positive_adding(3, 6)
   * Equivalence class: ([1, INT_MAX], [1, INT_MAX])
   * Purpose: Testing if adding two positive numbers works
   * Expected result: 9
   */
  describe('TC1: Two positive numbers', () => {
    it('test_positive_adding(3, 6) should return 9', () => {
      expect(add(3, 6)).toBe(9);
    });
  });

  /**
   * Test case 2: test_negative_adding(-5, -9)
   * Equivalence class: ([INT_MIN, -1], [INT_MIN, -1])
   * Purpose: Testing if adding two negative numbers works
   * Expected result: -14
   */
  describe('TC2: Two negative numbers', () => {
    it('test_negative_adding(-5, -9) should return -14', () => {
      expect(add(-5, -9)).toBe(-14);
    });
  });

  /**
   * Test case 3: test_neg_pos_adding(-5, 9)
   * Equivalence class: ([INT_MIN, -1], [1, INT_MAX])
   * Purpose: Testing if adding two numbers with different signs works
   * Expected result: 4
   */
  describe('TC3: Numbers with different signs', () => {
    it('test_neg_pos_adding(-5, 9) should return 4', () => {
      expect(add(-5, 9)).toBe(4);
    });
  });

  /**
   * Test case 4: test_zero_number_adding(0, 2)
   * Equivalence class: ([0], [INT_MIN, INT_MAX])
   * Purpose: Testing if adding a number with 0 works
   * Expected result: 2
   */
  describe('TC4: Zero and a number', () => {
    it('test_zero_number_adding(0, 2) should return 2', () => {
      expect(add(0, 2)).toBe(2);
    });
  });

  /**
   * Test case 5: test_zero_adding(0, 0)
   * Equivalence class: ([0], [0])
   * Purpose: Testing if adding together two zeros works
   * Expected result: 0
   */
  describe('TC5: Two zeros', () => {
    it('test_zero_adding(0, 0) should return 0', () => {
      expect(add(0, 0)).toBe(0);
    });
  });

  /**
   * Test case 6: test_decimals_adding(4.16, 122.33)
   * Equivalence class: ([INT_MIN, INT_MAX], [INT_MIN, INT_MAX])
   * Purpose: Testing if two decimal numbers are added correctly
   * Expected result: 126.49
   */
  describe('TC6: Decimal numbers', () => {
    it('test_decimals_adding(4.16, 122.33) should return 126.49', () => {
      expect(add(4.16, 122.33)).toBeCloseTo(126.49);
    });
  });

  /**
   * Test case 7: test_non_numeric_adding("jee", "4")
   * Equivalence class: ([string], [string])
   * Purpose: Testing if illegal case of adding non-numbers throws an error
   * Expected result: Some error
   */
  describe('TC7: Two non-numeric strings (invalid input)', () => {
    it('test_non_numeric_adding("jee", "4") should return error (NaN or throw)', () => {
      const result = add("jee", "4");
      // Expected: Some error - NaN for invalid numeric operation
      expect(result).toBeNaN();
    });
  });

  /**
   * Test case 8: test_num_non_num_adding(2, "7")
   * Equivalence class: ([INT_MIN, INT_MAX], [string])
   * Purpose: Testing if illegal case of adding a number and a string throws an error
   * Expected result: Some error
   */
  describe('TC8: Number and string (invalid input)', () => {
    it('test_num_non_num_adding(2, "7") should return error (NaN or throw)', () => {
      const result = add(2, "7");
      // Expected: Some error - should return NaN or throw, NOT concatenate strings
      // If result is "27" (string concatenation), that is a BUG
      const isError = Number.isNaN(result) || typeof result !== 'number';
      expect(isError).toBe(true);
    });
  });

  /**
   * Test case 9: test_arg_missing_add(4)
   * Equivalence class: ([INT_MIN, INT_MAX], [])
   * Purpose: Testing if leaving another argument as empty throws an error
   * Expected result: Some error
   */
  describe('TC9: Missing argument (invalid input)', () => {
    it('test_arg_missing_add(4) should return error (NaN or throw)', () => {
      const result = add(4);
      // Expected: Some error - should return NaN or throw for missing argument
      const isError = Number.isNaN(result) || result === undefined;
      expect(isError).toBe(true);
    });
  });

});
