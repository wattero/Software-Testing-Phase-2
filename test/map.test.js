/**
 * AI-Assisted Unit Tests for map.js
 * 
 * These tests were generated using AI assistance based on:
 * - Equivalence Partitioning Method
 * - Boundary Value Analysis
 * 
 * Test Design Methodology:
 * 1. Created equivalence classes for input parameters
 * 2. Selected representative values from each equivalence class
 * 3. Applied boundary value analysis for array length and iteratee behavior
 * 4. Generated test cases covering all classes and boundaries
 * 
 * Function under test: map(array, iteratee) -> Array
 * - array: The array to iterate over
 * - iteratee: The function invoked per iteration (value, index, array) => newValue
 * - Returns: The new mapped array
 */

import map from '../src/map.js';

describe('map.js - AI-Assisted Test Suite', () => {

  /**
   * ============================================
   * EQUIVALENCE CLASSES FOR array PARAMETER:
   * ============================================
   * 
   * EC1: Array of primitive numbers
   * EC2: Array of primitive strings
   * EC3: Array of objects
   * EC4: Array of mixed types
   * EC5: Empty array ([])
   * EC6: Null array (null)
   * EC7: Undefined array (undefined)
   * EC8: Array with single element
   * EC9: Array with duplicate values
   * EC10: Sparse arrays
   * EC11: Nested arrays
   * 
   * ============================================
   * EQUIVALENCE CLASSES FOR iteratee PARAMETER:
   * ============================================
   * 
   * EC12: Identity function (returns value as-is)
   * EC13: Mathematical transformation
   * EC14: String transformation
   * EC15: Object property extraction
   * EC16: Object transformation
   * EC17: Iteratee uses value argument
   * EC18: Iteratee uses index argument
   * EC19: Iteratee uses array argument
   * EC20: Iteratee returns different types
   * EC21: Iteratee returns undefined/null
   */

  describe('EC1: Array of Primitive Numbers', () => {
    
    it('should square numbers (from docs): map([4, 8], square) = [16, 64]', () => {
      const square = n => n * n;
      const result = map([4, 8], square);
      expect(result).toEqual([16, 64]);
    });

    it('should double numbers: map([1, 2, 3], n => n * 2)', () => {
      const result = map([1, 2, 3], n => n * 2);
      expect(result).toEqual([2, 4, 6]);
    });

    it('should add constant to numbers: map([1, 2, 3], n => n + 10)', () => {
      const result = map([1, 2, 3], n => n + 10);
      expect(result).toEqual([11, 12, 13]);
    });

    it('should handle negative numbers: map([-1, -2, -3], n => Math.abs(n))', () => {
      const result = map([-1, -2, -3], n => Math.abs(n));
      expect(result).toEqual([1, 2, 3]);
    });

    it('should handle floating point numbers: map([1.5, 2.5, 3.5], n => Math.floor(n))', () => {
      const result = map([1.5, 2.5, 3.5], n => Math.floor(n));
      expect(result).toEqual([1, 2, 3]);
    });

    it('should convert numbers to strings: map([1, 2, 3], n => String(n))', () => {
      const result = map([1, 2, 3], n => String(n));
      expect(result).toEqual(['1', '2', '3']);
    });
  });

  describe('EC2: Array of Primitive Strings', () => {
    
    it('should uppercase strings: map(["a", "b", "c"], s => s.toUpperCase())', () => {
      const result = map(['a', 'b', 'c'], s => s.toUpperCase());
      expect(result).toEqual(['A', 'B', 'C']);
    });

    it('should get string lengths: map(["a", "ab", "abc"], s => s.length)', () => {
      const result = map(['a', 'ab', 'abc'], s => s.length);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should append to strings: map(["hello", "world"], s => s + "!")', () => {
      const result = map(['hello', 'world'], s => s + '!');
      expect(result).toEqual(['hello!', 'world!']);
    });

    it('should trim strings: map(["  a  ", "  b  "], s => s.trim())', () => {
      const result = map(['  a  ', '  b  '], s => s.trim());
      expect(result).toEqual(['a', 'b']);
    });

    it('should replace characters: map(["cat", "bat"], s => s.replace("a", "o"))', () => {
      const result = map(['cat', 'bat'], s => s.replace('a', 'o'));
      expect(result).toEqual(['cot', 'bot']);
    });
  });

  describe('EC3: Array of Objects', () => {
    
    it('should extract property from objects', () => {
      const users = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 }
      ];
      const result = map(users, user => user.name);
      expect(result).toEqual(['Alice', 'Bob']);
    });

    it('should transform object properties', () => {
      const products = [
        { name: 'Apple', price: 1.50 },
        { name: 'Banana', price: 0.75 }
      ];
      const result = map(products, p => ({ ...p, price: p.price * 1.1 }));
      expect(result[0].price).toBeCloseTo(1.65);
      expect(result[1].price).toBeCloseTo(0.825);
    });

    it('should create new objects from existing', () => {
      const items = [{ id: 1, value: 'a' }, { id: 2, value: 'b' }];
      const result = map(items, item => ({ key: item.id, data: item.value }));
      expect(result).toEqual([
        { key: 1, data: 'a' },
        { key: 2, data: 'b' }
      ]);
    });

    it('should handle nested object properties', () => {
      const data = [
        { user: { name: 'Alice' } },
        { user: { name: 'Bob' } }
      ];
      const result = map(data, d => d.user.name);
      expect(result).toEqual(['Alice', 'Bob']);
    });
  });

  describe('EC4: Array of Mixed Types', () => {
    
    it('should convert all to strings: map([1, "a", true], val => String(val))', () => {
      const result = map([1, 'a', true], val => String(val));
      expect(result).toEqual(['1', 'a', 'true']);
    });

    it('should get types: map([1, "a", {}, []], val => typeof val)', () => {
      const result = map([1, 'a', {}, []], val => typeof val);
      expect(result).toEqual(['number', 'string', 'object', 'object']);
    });

    it('should check truthiness: map([0, 1, "", "a", null], val => !!val)', () => {
      const result = map([0, 1, '', 'a', null], val => !!val);
      expect(result).toEqual([false, true, false, true, false]);
    });
  });

  describe('EC5: Empty Array', () => {
    
    it('should return empty array for empty input: map([], x => x)', () => {
      const result = map([], x => x);
      expect(result).toEqual([]);
    });

    it('should return empty array with any iteratee: map([], () => "test")', () => {
      const result = map([], () => 'test');
      expect(result).toEqual([]);
    });

    it('should not call iteratee for empty array', () => {
      let callCount = 0;
      map([], () => {
        callCount++;
        return 'x';
      });
      expect(callCount).toBe(0);
    });
  });

  describe('EC6 & EC7: Null and Undefined Arrays', () => {
    
    it('should return empty array for null: map(null, x => x)', () => {
      const result = map(null, x => x);
      expect(result).toEqual([]);
    });

    it('should return empty array for undefined: map(undefined, x => x)', () => {
      const result = map(undefined, x => x);
      expect(result).toEqual([]);
    });

    it('should not call iteratee for null array', () => {
      let callCount = 0;
      map(null, () => {
        callCount++;
        return 'x';
      });
      expect(callCount).toBe(0);
    });

    it('should not call iteratee for undefined array', () => {
      let callCount = 0;
      map(undefined, () => {
        callCount++;
        return 'x';
      });
      expect(callCount).toBe(0);
    });
  });

  describe('EC8: Array with Single Element', () => {
    
    it('should map single element: map([5], n => n * 2) = [10]', () => {
      const result = map([5], n => n * 2);
      expect(result).toEqual([10]);
    });

    it('should transform single object: map([{ a: 1 }], o => o.a)', () => {
      const result = map([{ a: 1 }], o => o.a);
      expect(result).toEqual([1]);
    });

    it('should return single element array with identity: map([42], x => x)', () => {
      const result = map([42], x => x);
      expect(result).toEqual([42]);
    });
  });

  describe('EC9: Array with Duplicate Values', () => {
    
    it('should map all duplicates: map([1, 1, 1], n => n * 2)', () => {
      const result = map([1, 1, 1], n => n * 2);
      expect(result).toEqual([2, 2, 2]);
    });

    it('should preserve duplicate mappings: map([2, 3, 2, 3], n => n * n)', () => {
      const result = map([2, 3, 2, 3], n => n * n);
      expect(result).toEqual([4, 9, 4, 9]);
    });
  });

  describe('EC10: Sparse Arrays', () => {
    
    it('should handle sparse array with undefined slots', () => {
      const sparse = [1, , , 4];
      const result = map(sparse, val => val === undefined ? 'empty' : val);
      expect(result).toEqual([1, 'empty', 'empty', 4]);
    });

    it('should map undefined values in sparse array', () => {
      const arr = [1, undefined, 3];
      const result = map(arr, val => val ?? 'default');
      expect(result).toEqual([1, 'default', 3]);
    });
  });

  describe('EC11: Nested Arrays', () => {
    
    it('should map nested arrays: map([[1], [2, 3]], arr => arr.length)', () => {
      const result = map([[1], [2, 3]], arr => arr.length);
      expect(result).toEqual([1, 2]);
    });

    it('should flatten nested arrays: map([[1, 2], [3, 4]], arr => arr.join("-"))', () => {
      const result = map([[1, 2], [3, 4]], arr => arr.join('-'));
      expect(result).toEqual(['1-2', '3-4']);
    });

    it('should sum nested array elements: map([[1, 2], [3, 4]], arr => arr.reduce((a, b) => a + b, 0))', () => {
      const result = map([[1, 2], [3, 4]], arr => arr.reduce((a, b) => a + b, 0));
      expect(result).toEqual([3, 7]);
    });
  });

  describe('EC12: Identity Function', () => {
    
    it('should return same values with identity: map([1, 2, 3], x => x)', () => {
      const result = map([1, 2, 3], x => x);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should create new array with identity (not same reference)', () => {
      const original = [1, 2, 3];
      const result = map(original, x => x);
      expect(result).toEqual(original);
      expect(result).not.toBe(original);
    });

    it('should preserve object references with identity', () => {
      const obj = { a: 1 };
      const result = map([obj], x => x);
      expect(result[0]).toBe(obj);
    });
  });

  describe('EC13: Mathematical Transformations', () => {
    
    it('should apply square root: map([1, 4, 9, 16], n => Math.sqrt(n))', () => {
      const result = map([1, 4, 9, 16], n => Math.sqrt(n));
      expect(result).toEqual([1, 2, 3, 4]);
    });

    it('should apply power: map([2, 3, 4], n => Math.pow(n, 3))', () => {
      const result = map([2, 3, 4], n => Math.pow(n, 3));
      expect(result).toEqual([8, 27, 64]);
    });

    it('should apply modulo: map([5, 10, 15], n => n % 4)', () => {
      const result = map([5, 10, 15], n => n % 4);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should apply rounding: map([1.1, 2.5, 3.9], n => Math.round(n))', () => {
      const result = map([1.1, 2.5, 3.9], n => Math.round(n));
      expect(result).toEqual([1, 3, 4]);
    });
  });

  describe('EC14: String Transformations', () => {
    
    it('should lowercase: map(["HELLO", "WORLD"], s => s.toLowerCase())', () => {
      const result = map(['HELLO', 'WORLD'], s => s.toLowerCase());
      expect(result).toEqual(['hello', 'world']);
    });

    it('should slice strings: map(["hello", "world"], s => s.slice(0, 3))', () => {
      const result = map(['hello', 'world'], s => s.slice(0, 3));
      expect(result).toEqual(['hel', 'wor']);
    });

    it('should split strings: map(["a-b", "c-d"], s => s.split("-"))', () => {
      const result = map(['a-b', 'c-d'], s => s.split('-'));
      expect(result).toEqual([['a', 'b'], ['c', 'd']]);
    });

    it('should repeat strings: map(["a", "b"], s => s.repeat(3))', () => {
      const result = map(['a', 'b'], s => s.repeat(3));
      expect(result).toEqual(['aaa', 'bbb']);
    });
  });

  describe('EC15: Object Property Extraction', () => {
    
    it('should extract single property', () => {
      const items = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const result = map(items, item => item.id);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should extract multiple properties', () => {
      const items = [
        { firstName: 'John', lastName: 'Doe' },
        { firstName: 'Jane', lastName: 'Smith' }
      ];
      const result = map(items, item => `${item.firstName} ${item.lastName}`);
      expect(result).toEqual(['John Doe', 'Jane Smith']);
    });

    it('should handle missing properties with default', () => {
      const items = [{ a: 1 }, { b: 2 }, { a: 3 }];
      const result = map(items, item => item.a ?? 'N/A');
      expect(result).toEqual([1, 'N/A', 3]);
    });
  });

  describe('EC16: Object Transformation', () => {
    
    it('should add property to objects', () => {
      const items = [{ id: 1 }, { id: 2 }];
      const result = map(items, item => ({ ...item, active: true }));
      expect(result).toEqual([
        { id: 1, active: true },
        { id: 2, active: true }
      ]);
    });

    it('should remove property from objects', () => {
      const items = [{ id: 1, temp: 'x' }, { id: 2, temp: 'y' }];
      const result = map(items, ({ temp, ...rest }) => rest);
      expect(result).toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('should rename property in objects', () => {
      const items = [{ oldName: 'a' }, { oldName: 'b' }];
      const result = map(items, ({ oldName }) => ({ newName: oldName }));
      expect(result).toEqual([{ newName: 'a' }, { newName: 'b' }]);
    });
  });

  describe('EC17: Iteratee Uses Value Argument', () => {
    
    it('should correctly receive value in iteratee', () => {
      const values = [];
      map([1, 2, 3], (value) => {
        values.push(value);
        return value;
      });
      expect(values).toEqual([1, 2, 3]);
    });

    it('should transform based on value', () => {
      const result = map([1, 2, 3, 4], value => value > 2 ? 'big' : 'small');
      expect(result).toEqual(['small', 'small', 'big', 'big']);
    });
  });

  describe('EC18: Iteratee Uses Index Argument', () => {
    
    it('should correctly receive index in iteratee', () => {
      const indices = [];
      map(['a', 'b', 'c'], (value, index) => {
        indices.push(index);
        return value;
      });
      expect(indices).toEqual([0, 1, 2]);
    });

    it('should create indexed objects: map(["a", "b"], (val, idx) => ({ idx, val }))', () => {
      const result = map(['a', 'b'], (val, idx) => ({ idx, val }));
      expect(result).toEqual([
        { idx: 0, val: 'a' },
        { idx: 1, val: 'b' }
      ]);
    });

    it('should multiply by index: map([10, 10, 10], (val, idx) => val * idx)', () => {
      const result = map([10, 10, 10], (val, idx) => val * idx);
      expect(result).toEqual([0, 10, 20]);
    });
  });

  describe('EC19: Iteratee Uses Array Argument', () => {
    
    it('should correctly receive array in iteratee', () => {
      const originalArray = [1, 2, 3];
      let receivedArray;
      map(originalArray, (value, index, array) => {
        receivedArray = array;
        return value;
      });
      expect(receivedArray).toBe(originalArray);
    });

    it('should use array length in transformation', () => {
      const result = map([1, 2, 3], (val, idx, arr) => val / arr.length);
      expect(result).toEqual([1/3, 2/3, 1]);
    });

    it('should check position relative to array', () => {
      const result = map([1, 2, 3, 4, 5], (val, idx, arr) => 
        idx === 0 ? 'first' : idx === arr.length - 1 ? 'last' : 'middle'
      );
      expect(result).toEqual(['first', 'middle', 'middle', 'middle', 'last']);
    });
  });

  describe('EC20: Iteratee Returns Different Types', () => {
    
    it('should return numbers from strings: map(["1", "2", "3"], s => parseInt(s))', () => {
      const result = map(['1', '2', '3'], s => parseInt(s));
      expect(result).toEqual([1, 2, 3]);
    });

    it('should return booleans: map([0, 1, 2], n => n > 0)', () => {
      const result = map([0, 1, 2], n => n > 0);
      expect(result).toEqual([false, true, true]);
    });

    it('should return objects: map([1, 2], n => ({ value: n }))', () => {
      const result = map([1, 2], n => ({ value: n }));
      expect(result).toEqual([{ value: 1 }, { value: 2 }]);
    });

    it('should return arrays: map([1, 2], n => [n, n * 2])', () => {
      const result = map([1, 2], n => [n, n * 2]);
      expect(result).toEqual([[1, 2], [2, 4]]);
    });

    it('should return functions: map([1, 2], n => () => n)', () => {
      const result = map([1, 2], n => () => n);
      expect(typeof result[0]).toBe('function');
      expect(result[0]()).toBe(1);
      expect(result[1]()).toBe(2);
    });
  });

  describe('EC21: Iteratee Returns Undefined/Null', () => {
    
    it('should preserve undefined: map([1, 2, 3], () => undefined)', () => {
      const result = map([1, 2, 3], () => undefined);
      expect(result).toEqual([undefined, undefined, undefined]);
    });

    it('should preserve null: map([1, 2, 3], () => null)', () => {
      const result = map([1, 2, 3], () => null);
      expect(result).toEqual([null, null, null]);
    });

    it('should conditionally return undefined', () => {
      const result = map([1, 2, 3], n => n === 2 ? undefined : n);
      expect(result).toEqual([1, undefined, 3]);
    });
  });

  describe('Boundary Value Analysis - Array Length', () => {
    
    it('BVA: Empty array (length 0)', () => {
      const result = map([], x => x * 2);
      expect(result).toEqual([]);
      expect(result.length).toBe(0);
    });

    it('BVA: Single element array (length 1)', () => {
      const result = map([5], x => x * 2);
      expect(result).toEqual([10]);
      expect(result.length).toBe(1);
    });

    it('BVA: Two element array (length 2)', () => {
      const result = map([1, 2], x => x * 2);
      expect(result).toEqual([2, 4]);
      expect(result.length).toBe(2);
    });

    it('BVA: Large array (100 elements)', () => {
      const arr = Array.from({ length: 100 }, (_, i) => i);
      const result = map(arr, n => n * 2);
      expect(result.length).toBe(100);
      expect(result[0]).toBe(0);
      expect(result[99]).toBe(198);
    });

    it('BVA: Very large array (1000 elements)', () => {
      const arr = Array.from({ length: 1000 }, (_, i) => i);
      const result = map(arr, n => n + 1);
      expect(result.length).toBe(1000);
      expect(result[0]).toBe(1);
      expect(result[999]).toBe(1000);
    });
  });

  describe('Boundary Value Analysis - Index Values', () => {
    
    it('BVA: First index (0)', () => {
      const result = map([10, 20, 30], (val, idx) => idx === 0 ? 'first' : val);
      expect(result[0]).toBe('first');
    });

    it('BVA: Last index', () => {
      const result = map([10, 20, 30], (val, idx, arr) => idx === arr.length - 1 ? 'last' : val);
      expect(result[2]).toBe('last');
    });

    it('BVA: Middle index', () => {
      const result = map([1, 2, 3, 4, 5], (val, idx, arr) => 
        idx === Math.floor(arr.length / 2) ? 'middle' : val
      );
      expect(result[2]).toBe('middle');
    });
  });

  describe('Real-world E-Commerce Use Cases', () => {
    
    /**
     * These tests simulate real-world scenarios from the E-commerce application
     * as described in the test plan.
     */

    it('should format product prices for display', () => {
      const products = [
        { name: 'Apple', price: 1.5 },
        { name: 'Banana', price: 0.75 }
      ];
      const result = map(products, p => ({
        ...p,
        displayPrice: `€${p.price.toFixed(2)}`
      }));
      expect(result[0].displayPrice).toBe('€1.50');
      expect(result[1].displayPrice).toBe('€0.75');
    });

    it('should calculate cart item totals', () => {
      const cartItems = [
        { productId: 1, name: 'Apple', price: 1.50, quantity: 3 },
        { productId: 2, name: 'Banana', price: 0.75, quantity: 5 }
      ];
      const result = map(cartItems, item => ({
        ...item,
        total: item.price * item.quantity
      }));
      expect(result[0].total).toBe(4.5);
      expect(result[1].total).toBe(3.75);
    });

    it('should extract product IDs from cart', () => {
      const cartItems = [
        { productId: 101, name: 'Apple' },
        { productId: 202, name: 'Banana' },
        { productId: 303, name: 'Orange' }
      ];
      const result = map(cartItems, item => item.productId);
      expect(result).toEqual([101, 202, 303]);
    });

    it('should transform product data for API request', () => {
      const products = [
        { id: 1, name: 'Apple', price: 1.50 },
        { id: 2, name: 'Banana', price: 0.75 }
      ];
      const result = map(products, p => ({
        product_id: p.id,
        product_name: p.name,
        unit_price: p.price
      }));
      expect(result).toEqual([
        { product_id: 1, product_name: 'Apple', unit_price: 1.50 },
        { product_id: 2, product_name: 'Banana', unit_price: 0.75 }
      ]);
    });

    it('should create product display names', () => {
      const products = [
        { name: 'Apple', producer: 'Green Farm' },
        { name: 'Banana', producer: 'Tropical Co' }
      ];
      const result = map(products, p => `${p.name} by ${p.producer}`);
      expect(result).toEqual([
        'Apple by Green Farm',
        'Banana by Tropical Co'
      ]);
    });

    it('should apply discount to prices', () => {
      const products = [
        { name: 'Apple', price: 10 },
        { name: 'Banana', price: 20 }
      ];
      const discount = 0.1; // 10% discount
      const result = map(products, p => ({
        ...p,
        discountedPrice: p.price * (1 - discount)
      }));
      expect(result[0].discountedPrice).toBe(9);
      expect(result[1].discountedPrice).toBe(18);
    });

    it('should mark out-of-stock products', () => {
      const products = [
        { name: 'Apple', stock: 10 },
        { name: 'Banana', stock: 0 },
        { name: 'Orange', stock: 5 }
      ];
      const result = map(products, p => ({
        ...p,
        available: p.stock > 0
      }));
      expect(result[0].available).toBe(true);
      expect(result[1].available).toBe(false);
      expect(result[2].available).toBe(true);
    });

    it('should create order summary from cart items', () => {
      const cartItems = [
        { name: 'Apple', quantity: 2, price: 1.50 },
        { name: 'Banana', quantity: 3, price: 0.75 }
      ];
      const result = map(cartItems, item => 
        `${item.quantity}x ${item.name} @ €${item.price.toFixed(2)} = €${(item.quantity * item.price).toFixed(2)}`
      );
      expect(result).toEqual([
        '2x Apple @ €1.50 = €3.00',
        '3x Banana @ €0.75 = €2.25'
      ]);
    });

    it('should generate producer dropdown options', () => {
      const producers = [
        { id: 1, name: 'Green Farm' },
        { id: 2, name: 'Organic Valley' }
      ];
      const result = map(producers, p => ({
        value: p.id,
        label: p.name
      }));
      expect(result).toEqual([
        { value: 1, label: 'Green Farm' },
        { value: 2, label: 'Organic Valley' }
      ]);
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    
    it('should not mutate original array', () => {
      const original = [1, 2, 3];
      const copy = [...original];
      map(original, n => n * 2);
      expect(original).toEqual(copy);
    });

    it('should return new array instance', () => {
      const original = [1, 2, 3];
      const result = map(original, x => x);
      expect(result).not.toBe(original);
    });

    it('should handle array with null values', () => {
      const result = map([1, null, 3], val => val === null ? 0 : val);
      expect(result).toEqual([1, 0, 3]);
    });

    it('should handle array with undefined values', () => {
      const result = map([1, undefined, 3], val => val ?? 'missing');
      expect(result).toEqual([1, 'missing', 3]);
    });

    it('should handle iteratee that throws for specific values', () => {
      const arr = [1, 2, 3];
      expect(() => {
        map(arr, (val) => {
          if (val === 2) throw new Error('Test error');
          return val;
        });
      }).toThrow('Test error');
    });

    it('should handle Symbol values', () => {
      const sym = Symbol('test');
      const result = map([sym], s => typeof s);
      expect(result).toEqual(['symbol']);
    });

    it('should handle BigInt values', () => {
      const result = map([1n, 2n, 3n], n => n * 2n);
      expect(result).toEqual([2n, 4n, 6n]);
    });

    it('should handle Date objects', () => {
      const dates = [new Date('2025-01-01'), new Date('2025-06-01')];
      const result = map(dates, d => d.getFullYear());
      expect(result).toEqual([2025, 2025]);
    });

    it('should handle RegExp objects', () => {
      const regexes = [/test/i, /hello/g];
      const result = map(regexes, r => r.source);
      expect(result).toEqual(['test', 'hello']);
    });
  });

  describe('Performance and Iteration Order', () => {
    
    it('should iterate in order (0 to length-1)', () => {
      const order = [];
      map([10, 20, 30], (val, idx) => {
        order.push(idx);
        return val;
      });
      expect(order).toEqual([0, 1, 2]);
    });

    it('should call iteratee exactly array.length times', () => {
      let callCount = 0;
      map([1, 2, 3, 4, 5], () => {
        callCount++;
        return 'x';
      });
      expect(callCount).toBe(5);
    });

    it('should not call iteratee for null/undefined arrays', () => {
      let callCount = 0;
      map(null, () => callCount++);
      map(undefined, () => callCount++);
      expect(callCount).toBe(0);
    });
  });

  describe('Result Array Length', () => {
    
    it('should return array of same length as input', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = map(arr, x => x * 2);
      expect(result.length).toBe(arr.length);
    });

    it('should return empty array for null input', () => {
      const result = map(null, x => x);
      expect(result.length).toBe(0);
    });

    it('should return empty array for undefined input', () => {
      const result = map(undefined, x => x);
      expect(result.length).toBe(0);
    });
  });

});
