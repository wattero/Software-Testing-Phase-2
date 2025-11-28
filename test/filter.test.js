/**
 * AI-Assisted Unit Tests for filter.js
 * 
 * These tests were generated using AI assistance based on:
 * - Equivalence Partitioning Method
 * - Boundary Value Analysis
 * 
 * Test Design Methodology:
 * 1. Created equivalence classes for input parameters
 * 2. Selected representative values from each equivalence class
 * 3. Applied boundary value analysis for array length and predicate behavior
 * 4. Generated test cases covering all classes and boundaries
 * 
 * Function under test: filter(array, predicate) -> Array
 * - array: The array to iterate over
 * - predicate: The function invoked per iteration (value, index, array) => boolean
 * - Returns: The new filtered array
 */

import filter from '../src/filter.js';

describe('filter.js - AI-Assisted Test Suite', () => {

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
   * EQUIVALENCE CLASSES FOR predicate PARAMETER:
   * ============================================
   * 
   * EC12: Predicate returns true for all elements
   * EC13: Predicate returns false for all elements
   * EC14: Predicate returns true for some elements
   * EC15: Predicate uses value argument
   * EC16: Predicate uses index argument
   * EC17: Predicate uses array argument
   * EC18: Predicate with complex logic
   * EC19: Predicate that returns truthy (non-boolean) values
   * EC20: Predicate that returns falsy (non-boolean) values
   */

  describe('EC1: Array of Primitive Numbers', () => {
    
    it('should filter even numbers: filter([1, 2, 3, 4], n => n % 2 === 0)', () => {
      const result = filter([1, 2, 3, 4], n => n % 2 === 0);
      expect(result).toEqual([2, 4]);
    });

    it('should filter numbers greater than 2: filter([1, 2, 3, 4, 5], n => n > 2)', () => {
      const result = filter([1, 2, 3, 4, 5], n => n > 2);
      expect(result).toEqual([3, 4, 5]);
    });

    it('should filter positive numbers: filter([-2, -1, 0, 1, 2], n => n > 0)', () => {
      const result = filter([-2, -1, 0, 1, 2], n => n > 0);
      expect(result).toEqual([1, 2]);
    });

    it('should filter numbers equal to specific value: filter([1, 2, 2, 3], n => n === 2)', () => {
      const result = filter([1, 2, 2, 3], n => n === 2);
      expect(result).toEqual([2, 2]);
    });

    it('should handle floating point numbers: filter([1.5, 2.5, 3.5], n => n > 2)', () => {
      const result = filter([1.5, 2.5, 3.5], n => n > 2);
      expect(result).toEqual([2.5, 3.5]);
    });
  });

  describe('EC2: Array of Primitive Strings', () => {
    
    it('should filter strings by length: filter(["a", "ab", "abc"], s => s.length > 1)', () => {
      const result = filter(['a', 'ab', 'abc'], s => s.length > 1);
      expect(result).toEqual(['ab', 'abc']);
    });

    it('should filter strings starting with specific char: filter(["apple", "banana", "apricot"], s => s.startsWith("a"))', () => {
      const result = filter(['apple', 'banana', 'apricot'], s => s.startsWith('a'));
      expect(result).toEqual(['apple', 'apricot']);
    });

    it('should filter strings containing substring: filter(["hello", "world", "help"], s => s.includes("hel"))', () => {
      const result = filter(['hello', 'world', 'help'], s => s.includes('hel'));
      expect(result).toEqual(['hello', 'help']);
    });

    it('should filter non-empty strings: filter(["", "a", "", "b"], s => s !== "")', () => {
      const result = filter(['', 'a', '', 'b'], s => s !== '');
      expect(result).toEqual(['a', 'b']);
    });
  });

  describe('EC3: Array of Objects (from documentation example)', () => {
    
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];

    it('should filter active users (from docs): filter(users, ({ active }) => active)', () => {
      const result = filter(users, ({ active }) => active);
      expect(result).toEqual([{ 'user': 'barney', 'active': true }]);
    });

    it('should filter inactive users: filter(users, ({ active }) => !active)', () => {
      const result = filter(users, ({ active }) => !active);
      expect(result).toEqual([{ 'user': 'fred', 'active': false }]);
    });

    it('should filter by object property value', () => {
      const products = [
        { name: 'Apple', price: 1.50 },
        { name: 'Banana', price: 0.75 },
        { name: 'Orange', price: 2.00 }
      ];
      const result = filter(products, p => p.price > 1);
      expect(result).toEqual([
        { name: 'Apple', price: 1.50 },
        { name: 'Orange', price: 2.00 }
      ]);
    });

    it('should filter by nested object property', () => {
      const items = [
        { id: 1, details: { category: 'fruit' } },
        { id: 2, details: { category: 'vegetable' } },
        { id: 3, details: { category: 'fruit' } }
      ];
      const result = filter(items, item => item.details.category === 'fruit');
      expect(result).toEqual([
        { id: 1, details: { category: 'fruit' } },
        { id: 3, details: { category: 'fruit' } }
      ]);
    });
  });

  describe('EC4: Array of Mixed Types', () => {
    
    it('should filter only numbers from mixed array', () => {
      const result = filter([1, 'a', 2, 'b', 3], val => typeof val === 'number');
      expect(result).toEqual([1, 2, 3]);
    });

    it('should filter only strings from mixed array', () => {
      const result = filter([1, 'a', 2, 'b', 3], val => typeof val === 'string');
      expect(result).toEqual(['a', 'b']);
    });

    it('should filter truthy values from mixed array', () => {
      const result = filter([0, 1, '', 'hello', null, true, false], val => val);
      expect(result).toEqual([1, 'hello', true]);
    });

    it('should filter objects from mixed array', () => {
      const result = filter([1, { a: 1 }, 'str', { b: 2 }], val => typeof val === 'object' && val !== null);
      expect(result).toEqual([{ a: 1 }, { b: 2 }]);
    });
  });

  describe('EC5: Empty Array', () => {
    
    it('should return empty array for empty input: filter([], () => true)', () => {
      const result = filter([], () => true);
      expect(result).toEqual([]);
    });

    it('should return empty array for empty input with any predicate: filter([], () => false)', () => {
      const result = filter([], () => false);
      expect(result).toEqual([]);
    });
  });

  describe('EC6 & EC7: Null and Undefined Arrays', () => {
    
    it('should handle null array: filter(null, () => true)', () => {
      const result = filter(null, () => true);
      expect(result).toEqual([]);
    });

    it('should handle undefined array: filter(undefined, () => true)', () => {
      const result = filter(undefined, () => true);
      expect(result).toEqual([]);
    });
  });

  describe('EC8: Array with Single Element', () => {
    
    it('should return single element if predicate matches: filter([1], n => n === 1)', () => {
      const result = filter([1], n => n === 1);
      expect(result).toEqual([1]);
    });

    it('should return empty array if predicate does not match: filter([1], n => n === 2)', () => {
      const result = filter([1], n => n === 2);
      expect(result).toEqual([]);
    });

    it('should handle single object element', () => {
      const result = filter([{ active: true }], obj => obj.active);
      expect(result).toEqual([{ active: true }]);
    });
  });

  describe('EC9: Array with Duplicate Values', () => {
    
    it('should return all matching duplicates: filter([1, 1, 2, 2, 3], n => n === 2)', () => {
      const result = filter([1, 1, 2, 2, 3], n => n === 2);
      expect(result).toEqual([2, 2]);
    });

    it('should filter duplicates based on condition', () => {
      const result = filter([1, 1, 1, 2, 2, 3], n => n < 2);
      expect(result).toEqual([1, 1, 1]);
    });
  });

  describe('EC10: Sparse Arrays', () => {
    
    it('should handle sparse array with undefined slots', () => {
      const sparse = [1, , , 4];
      const result = filter(sparse, val => val !== undefined);
      expect(result).toEqual([1, 4]);
    });

    it('should include undefined values if predicate matches', () => {
      const arr = [1, undefined, 3];
      const result = filter(arr, val => val === undefined);
      expect(result).toEqual([undefined]);
    });
  });

  describe('EC11: Nested Arrays', () => {
    
    it('should filter nested arrays by length', () => {
      const result = filter([[1], [1, 2], [1, 2, 3]], arr => arr.length > 1);
      expect(result).toEqual([[1, 2], [1, 2, 3]]);
    });

    it('should filter nested arrays by content', () => {
      const result = filter([[1, 2], [3, 4], [5, 6]], arr => arr.includes(3));
      expect(result).toEqual([[3, 4]]);
    });
  });

  describe('EC12: Predicate Returns True for All Elements', () => {
    
    it('should return all elements: filter([1, 2, 3], () => true)', () => {
      const result = filter([1, 2, 3], () => true);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should return all objects when all match', () => {
      const users = [
        { name: 'Alice', active: true },
        { name: 'Bob', active: true }
      ];
      const result = filter(users, u => u.active);
      expect(result).toEqual(users);
    });
  });

  describe('EC13: Predicate Returns False for All Elements', () => {
    
    it('should return empty array: filter([1, 2, 3], () => false)', () => {
      const result = filter([1, 2, 3], () => false);
      expect(result).toEqual([]);
    });

    it('should return empty array when no elements match', () => {
      const result = filter([1, 2, 3], n => n > 10);
      expect(result).toEqual([]);
    });
  });

  describe('EC14: Predicate Returns True for Some Elements', () => {
    
    it('should return subset of elements', () => {
      const result = filter([1, 2, 3, 4, 5], n => n % 2 === 0);
      expect(result).toEqual([2, 4]);
    });

    it('should return first element only', () => {
      const result = filter([1, 2, 3], n => n === 1);
      expect(result).toEqual([1]);
    });

    it('should return last element only', () => {
      const result = filter([1, 2, 3], n => n === 3);
      expect(result).toEqual([3]);
    });

    it('should return middle elements only', () => {
      const result = filter([1, 2, 3, 4, 5], n => n > 1 && n < 5);
      expect(result).toEqual([2, 3, 4]);
    });
  });

  describe('EC15: Predicate Uses Value Argument', () => {
    
    it('should correctly receive value in predicate', () => {
      const values = [];
      filter([1, 2, 3], (value) => {
        values.push(value);
        return true;
      });
      expect(values).toEqual([1, 2, 3]);
    });

    it('should filter based on value property', () => {
      const result = filter(
        [{ val: 10 }, { val: 20 }, { val: 30 }],
        (item) => item.val >= 20
      );
      expect(result).toEqual([{ val: 20 }, { val: 30 }]);
    });
  });

  describe('EC16: Predicate Uses Index Argument', () => {
    
    it('should correctly receive index in predicate', () => {
      const indices = [];
      filter([10, 20, 30], (value, index) => {
        indices.push(index);
        return true;
      });
      expect(indices).toEqual([0, 1, 2]);
    });

    it('should filter by index: return even-indexed elements', () => {
      const result = filter(['a', 'b', 'c', 'd', 'e'], (val, idx) => idx % 2 === 0);
      expect(result).toEqual(['a', 'c', 'e']);
    });

    it('should filter by index: return first two elements', () => {
      const result = filter([1, 2, 3, 4, 5], (val, idx) => idx < 2);
      expect(result).toEqual([1, 2]);
    });
  });

  describe('EC17: Predicate Uses Array Argument', () => {
    
    it('should correctly receive array in predicate', () => {
      const originalArray = [1, 2, 3];
      let receivedArray;
      filter(originalArray, (value, index, array) => {
        receivedArray = array;
        return true;
      });
      expect(receivedArray).toBe(originalArray);
    });

    it('should filter based on array context', () => {
      const result = filter([1, 2, 3, 4, 5], (val, idx, arr) => val > arr.length / 2);
      expect(result).toEqual([3, 4, 5]);
    });
  });

  describe('EC18: Predicate with Complex Logic', () => {
    
    it('should handle complex AND condition', () => {
      const products = [
        { name: 'Apple', price: 1.50, inStock: true },
        { name: 'Banana', price: 0.75, inStock: true },
        { name: 'Orange', price: 2.00, inStock: false }
      ];
      const result = filter(products, p => p.price > 1 && p.inStock);
      expect(result).toEqual([{ name: 'Apple', price: 1.50, inStock: true }]);
    });

    it('should handle complex OR condition', () => {
      const result = filter([1, 2, 3, 4, 5], n => n === 1 || n === 5);
      expect(result).toEqual([1, 5]);
    });

    it('should handle negation', () => {
      const result = filter([1, 2, 3, 4, 5], n => !(n === 3));
      expect(result).toEqual([1, 2, 4, 5]);
    });
  });

  describe('EC19: Predicate Returns Truthy (Non-Boolean) Values', () => {
    
    it('should treat non-zero numbers as truthy', () => {
      const result = filter([1, 2, 3], () => 1);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should treat non-empty strings as truthy', () => {
      const result = filter([1, 2, 3], () => 'yes');
      expect(result).toEqual([1, 2, 3]);
    });

    it('should treat objects as truthy', () => {
      const result = filter([1, 2, 3], () => ({}));
      expect(result).toEqual([1, 2, 3]);
    });

    it('should filter based on returned value being truthy', () => {
      const result = filter([0, 1, 2, 3], n => n);
      expect(result).toEqual([1, 2, 3]);
    });
  });

  describe('EC20: Predicate Returns Falsy (Non-Boolean) Values', () => {
    
    it('should treat 0 as falsy', () => {
      const result = filter([1, 2, 3], () => 0);
      expect(result).toEqual([]);
    });

    it('should treat empty string as falsy', () => {
      const result = filter([1, 2, 3], () => '');
      expect(result).toEqual([]);
    });

    it('should treat null as falsy', () => {
      const result = filter([1, 2, 3], () => null);
      expect(result).toEqual([]);
    });

    it('should treat undefined as falsy', () => {
      const result = filter([1, 2, 3], () => undefined);
      expect(result).toEqual([]);
    });

    it('should treat NaN as falsy', () => {
      const result = filter([1, 2, 3], () => NaN);
      expect(result).toEqual([]);
    });
  });

  describe('Boundary Value Analysis - Array Length', () => {
    
    it('BVA: Empty array (length 0)', () => {
      const result = filter([], () => true);
      expect(result).toEqual([]);
    });

    it('BVA: Single element array (length 1) - matches', () => {
      const result = filter([1], () => true);
      expect(result).toEqual([1]);
    });

    it('BVA: Single element array (length 1) - no match', () => {
      const result = filter([1], () => false);
      expect(result).toEqual([]);
    });

    it('BVA: Two element array (length 2) - one matches', () => {
      const result = filter([1, 2], n => n === 1);
      expect(result).toEqual([1]);
    });

    it('BVA: Large array (100 elements)', () => {
      const arr = Array.from({ length: 100 }, (_, i) => i);
      const result = filter(arr, n => n >= 90);
      expect(result).toEqual([90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);
    });

    it('BVA: Very large array (1000 elements)', () => {
      const arr = Array.from({ length: 1000 }, (_, i) => i);
      const result = filter(arr, n => n >= 995);
      expect(result.length).toBe(5);
      expect(result).toEqual([995, 996, 997, 998, 999]);
    });
  });

  describe('Boundary Value Analysis - Filter Results', () => {
    
    it('BVA: All elements match (result length = input length)', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = filter(arr, () => true);
      expect(result.length).toBe(arr.length);
    });

    it('BVA: No elements match (result length = 0)', () => {
      const arr = [1, 2, 3, 4, 5];
      const result = filter(arr, () => false);
      expect(result.length).toBe(0);
    });

    it('BVA: First element only matches', () => {
      const result = filter([1, 2, 3, 4, 5], (_, idx) => idx === 0);
      expect(result).toEqual([1]);
    });

    it('BVA: Last element only matches', () => {
      const result = filter([1, 2, 3, 4, 5], (_, idx, arr) => idx === arr.length - 1);
      expect(result).toEqual([5]);
    });

    it('BVA: All except first element match', () => {
      const result = filter([1, 2, 3, 4, 5], (_, idx) => idx > 0);
      expect(result).toEqual([2, 3, 4, 5]);
    });

    it('BVA: All except last element match', () => {
      const result = filter([1, 2, 3, 4, 5], (_, idx, arr) => idx < arr.length - 1);
      expect(result).toEqual([1, 2, 3, 4]);
    });
  });

  describe('Real-world E-Commerce Use Cases', () => {
    
    /**
     * These tests simulate real-world scenarios from the E-commerce application
     * as described in the test plan.
     */

    it('should filter products by category', () => {
      const products = [
        { id: 1, name: 'Apple', category: 'fruits' },
        { id: 2, name: 'Carrot', category: 'vegetables' },
        { id: 3, name: 'Banana', category: 'fruits' },
        { id: 4, name: 'Potato', category: 'vegetables' }
      ];
      const result = filter(products, p => p.category === 'fruits');
      expect(result).toEqual([
        { id: 1, name: 'Apple', category: 'fruits' },
        { id: 3, name: 'Banana', category: 'fruits' }
      ]);
    });

    it('should filter products by price range', () => {
      const products = [
        { id: 1, name: 'Apple', price: 1.50 },
        { id: 2, name: 'Premium Cheese', price: 15.00 },
        { id: 3, name: 'Bread', price: 3.00 },
        { id: 4, name: 'Organic Honey', price: 25.00 }
      ];
      const result = filter(products, p => p.price >= 5 && p.price <= 20);
      expect(result).toEqual([
        { id: 2, name: 'Premium Cheese', price: 15.00 }
      ]);
    });

    it('should filter products by producer', () => {
      const products = [
        { id: 1, name: 'Apple', producer: 'Green Valley Farm' },
        { id: 2, name: 'Carrot', producer: 'Local Growers' },
        { id: 3, name: 'Pear', producer: 'Green Valley Farm' }
      ];
      const result = filter(products, p => p.producer === 'Green Valley Farm');
      expect(result).toEqual([
        { id: 1, name: 'Apple', producer: 'Green Valley Farm' },
        { id: 3, name: 'Pear', producer: 'Green Valley Farm' }
      ]);
    });

    it('should filter products with specific contents (allergen-free)', () => {
      const products = [
        { id: 1, name: 'Bread', contents: ['wheat', 'yeast'] },
        { id: 2, name: 'Rice', contents: ['rice'] },
        { id: 3, name: 'Pasta', contents: ['wheat', 'egg'] }
      ];
      const result = filter(products, p => !p.contents.includes('wheat'));
      expect(result).toEqual([
        { id: 2, name: 'Rice', contents: ['rice'] }
      ]);
    });

    it('should filter in-stock products only', () => {
      const products = [
        { id: 1, name: 'Apple', inStock: true, quantity: 50 },
        { id: 2, name: 'Banana', inStock: false, quantity: 0 },
        { id: 3, name: 'Orange', inStock: true, quantity: 30 }
      ];
      const result = filter(products, p => p.inStock);
      expect(result).toEqual([
        { id: 1, name: 'Apple', inStock: true, quantity: 50 },
        { id: 3, name: 'Orange', inStock: true, quantity: 30 }
      ]);
    });

    it('should filter cart items by quantity threshold', () => {
      const cartItems = [
        { productId: 1, name: 'Apple', quantity: 5 },
        { productId: 2, name: 'Banana', quantity: 1 },
        { productId: 3, name: 'Orange', quantity: 3 }
      ];
      const result = filter(cartItems, item => item.quantity >= 3);
      expect(result).toEqual([
        { productId: 1, name: 'Apple', quantity: 5 },
        { productId: 3, name: 'Orange', quantity: 3 }
      ]);
    });

    it('should filter orders by status', () => {
      const orders = [
        { id: 1, status: 'pending' },
        { id: 2, status: 'completed' },
        { id: 3, status: 'pending' },
        { id: 4, status: 'cancelled' }
      ];
      const result = filter(orders, o => o.status === 'pending');
      expect(result).toEqual([
        { id: 1, status: 'pending' },
        { id: 3, status: 'pending' }
      ]);
    });

    it('should filter active producers', () => {
      const producers = [
        { id: 1, name: 'Farm A', active: true },
        { id: 2, name: 'Farm B', active: false },
        { id: 3, name: 'Farm C', active: true }
      ];
      const result = filter(producers, p => p.active);
      expect(result).toEqual([
        { id: 1, name: 'Farm A', active: true },
        { id: 3, name: 'Farm C', active: true }
      ]);
    });

    it('should filter products with combined criteria (category + price + stock)', () => {
      const products = [
        { id: 1, name: 'Apple', category: 'fruits', price: 1.50, inStock: true },
        { id: 2, name: 'Banana', category: 'fruits', price: 0.75, inStock: false },
        { id: 3, name: 'Carrot', category: 'vegetables', price: 1.00, inStock: true },
        { id: 4, name: 'Mango', category: 'fruits', price: 3.00, inStock: true }
      ];
      const result = filter(products, p => 
        p.category === 'fruits' && p.price >= 1 && p.inStock
      );
      expect(result).toEqual([
        { id: 1, name: 'Apple', category: 'fruits', price: 1.50, inStock: true },
        { id: 4, name: 'Mango', category: 'fruits', price: 3.00, inStock: true }
      ]);
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    
    it('should not mutate original array', () => {
      const original = [1, 2, 3, 4, 5];
      const copy = [...original];
      filter(original, n => n > 2);
      expect(original).toEqual(copy);
    });

    it('should return new array instance', () => {
      const original = [1, 2, 3];
      const result = filter(original, () => true);
      expect(result).not.toBe(original);
    });

    it('should handle array with null values', () => {
      const result = filter([1, null, 2, null, 3], val => val !== null);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should handle array with undefined values', () => {
      const result = filter([1, undefined, 2, undefined, 3], val => val !== undefined);
      expect(result).toEqual([1, 2, 3]);
    });

    it('should handle array with boolean values', () => {
      const result = filter([true, false, true, false], val => val === true);
      expect(result).toEqual([true, true]);
    });

    it('should handle predicate that throws for some values gracefully', () => {
      // This test documents expected behavior when predicate might throw
      const arr = [1, 2, 3];
      expect(() => {
        filter(arr, (val) => {
          if (val === 2) throw new Error('Test error');
          return true;
        });
      }).toThrow('Test error');
    });

    it('should preserve object references in result', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      const result = filter([obj1, obj2], o => o.id === 1);
      expect(result[0]).toBe(obj1);
    });

    it('should handle array-like numeric indices in predicate', () => {
      const result = filter([10, 20, 30, 40], (val, idx) => idx === 1 || idx === 3);
      expect(result).toEqual([20, 40]);
    });
  });

  describe('Performance and Stress Tests', () => {
    
    it('should handle filtering with expensive predicate', () => {
      const arr = [1, 2, 3, 4, 5];
      let callCount = 0;
      filter(arr, (val) => {
        callCount++;
        return val % 2 === 0;
      });
      expect(callCount).toBe(5); // Predicate called for each element
    });

    it('should short-circuit on empty array', () => {
      let callCount = 0;
      filter([], () => {
        callCount++;
        return true;
      });
      expect(callCount).toBe(0);
    });
  });

  describe('Type Preservation', () => {
    
    it('should preserve number types', () => {
      const result = filter([1, 2.5, 3], n => n > 1);
      expect(result).toEqual([2.5, 3]);
      expect(typeof result[0]).toBe('number');
    });

    it('should preserve string types', () => {
      const result = filter(['a', 'bb', 'ccc'], s => s.length > 1);
      expect(result).toEqual(['bb', 'ccc']);
      expect(typeof result[0]).toBe('string');
    });

    it('should preserve object types', () => {
      const result = filter([{ a: 1 }, { a: 2 }], o => o.a > 1);
      expect(result).toEqual([{ a: 2 }]);
      expect(typeof result[0]).toBe('object');
    });

    it('should preserve Date objects', () => {
      const date1 = new Date('2025-01-01');
      const date2 = new Date('2025-06-01');
      const result = filter([date1, date2], d => d.getMonth() > 0);
      expect(result.length).toBe(1);
      expect(result[0]).toBeInstanceOf(Date);
    });
  });

});
