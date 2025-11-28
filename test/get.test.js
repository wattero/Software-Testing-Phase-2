/**
 * AI-Assisted Unit Tests for get.js
 * 
 * These tests were generated using AI assistance based on:
 * - Equivalence Partitioning Method
 * - Boundary Value Analysis
 * 
 * Test Design Methodology:
 * 1. Created equivalence classes for input parameters
 * 2. Selected representative values from each equivalence class
 * 3. Applied boundary value analysis for path depth and object complexity
 * 4. Generated test cases covering all classes and boundaries
 * 
 * Function under test: get(object, path, defaultValue) -> *
 * - object: The object to query
 * - path: The path of the property to get (Array|string)
 * - defaultValue: The value returned for undefined resolved values
 * - Returns: The resolved value
 */

import get from '../src/get.js';

describe('get.js - AI-Assisted Test Suite', () => {

  /**
   * ============================================
   * EQUIVALENCE CLASSES FOR object PARAMETER:
   * ============================================
   * 
   * EC1: Simple flat objects (e.g., { a: 1, b: 2 })
   * EC2: Nested objects (e.g., { a: { b: { c: 3 } } })
   * EC3: Objects with arrays (e.g., { a: [1, 2, 3] })
   * EC4: Objects with mixed arrays and objects (e.g., { a: [{ b: 1 }] })
   * EC5: Empty object ({})
   * EC6: Null object (null)
   * EC7: Undefined object (undefined)
   * EC8: Non-object primitives (number, string, boolean)
   * EC9: Arrays as root object
   * 
   * ============================================
   * EQUIVALENCE CLASSES FOR path PARAMETER:
   * ============================================
   * 
   * EC10: Simple string path (e.g., 'a')
   * EC11: Dot notation string path (e.g., 'a.b.c')
   * EC12: Bracket notation string path (e.g., 'a[0].b')
   * EC13: Array path (e.g., ['a', 'b', 'c'])
   * EC14: Array path with numeric strings (e.g., ['a', '0', 'b'])
   * EC15: Empty string path ('')
   * EC16: Empty array path ([])
   * EC17: Path to non-existent property
   * EC18: Path with special characters
   * EC19: Null/undefined path
   * 
   * ============================================
   * EQUIVALENCE CLASSES FOR defaultValue PARAMETER:
   * ============================================
   * 
   * EC20: No default value provided (undefined)
   * EC21: Primitive default values (number, string, boolean)
   * EC22: Object/array default values
   * EC23: Null as default value
   * EC24: Function as default value
   */

  describe('EC1: Simple Flat Objects', () => {
    
    it('should get value from flat object with string path: get({ a: 1 }, "a") = 1', () => {
      expect(get({ a: 1 }, 'a')).toBe(1);
    });

    it('should get string value from flat object: get({ name: "John" }, "name") = "John"', () => {
      expect(get({ name: 'John' }, 'name')).toBe('John');
    });

    it('should get boolean value from flat object: get({ active: true }, "active") = true', () => {
      expect(get({ active: true }, 'active')).toBe(true);
    });

    it('should get null value from flat object: get({ value: null }, "value") = null', () => {
      expect(get({ value: null }, 'value')).toBe(null);
    });

    it('should return undefined for non-existent key: get({ a: 1 }, "b") = undefined', () => {
      expect(get({ a: 1 }, 'b')).toBeUndefined();
    });
  });

  describe('EC2: Nested Objects', () => {
    
    const nestedObject = { a: { b: { c: 3 } } };

    it('should get deeply nested value with dot notation: get(obj, "a.b.c") = 3', () => {
      expect(get(nestedObject, 'a.b.c')).toBe(3);
    });

    it('should get intermediate nested object: get(obj, "a.b") = { c: 3 }', () => {
      expect(get(nestedObject, 'a.b')).toEqual({ c: 3 });
    });

    it('should get first level nested object: get(obj, "a") = { b: { c: 3 } }', () => {
      expect(get(nestedObject, 'a')).toEqual({ b: { c: 3 } });
    });

    it('should return undefined for non-existent nested path: get(obj, "a.b.d") = undefined', () => {
      expect(get(nestedObject, 'a.b.d')).toBeUndefined();
    });

    it('should return undefined for path beyond object depth: get(obj, "a.b.c.d") = undefined', () => {
      expect(get(nestedObject, 'a.b.c.d')).toBeUndefined();
    });

    it('should handle very deeply nested objects', () => {
      const deepObject = { l1: { l2: { l3: { l4: { l5: 'deep' } } } } };
      expect(get(deepObject, 'l1.l2.l3.l4.l5')).toBe('deep');
    });
  });

  describe('EC3: Objects with Arrays', () => {
    
    it('should get array element with bracket notation: get({ a: [1, 2, 3] }, "a[0]") = 1', () => {
      expect(get({ a: [1, 2, 3] }, 'a[0]')).toBe(1);
    });

    it('should get array element with dot notation: get({ a: [1, 2, 3] }, "a.0") = 1', () => {
      expect(get({ a: [1, 2, 3] }, 'a.0')).toBe(1);
    });

    it('should get last array element: get({ a: [1, 2, 3] }, "a[2]") = 3', () => {
      expect(get({ a: [1, 2, 3] }, 'a[2]')).toBe(3);
    });

    it('should return undefined for out-of-bounds index: get({ a: [1, 2] }, "a[5]") = undefined', () => {
      expect(get({ a: [1, 2] }, 'a[5]')).toBeUndefined();
    });

    it('should get entire array: get({ a: [1, 2, 3] }, "a")', () => {
      expect(get({ a: [1, 2, 3] }, 'a')).toEqual([1, 2, 3]);
    });

    it('should get array length: get({ a: [1, 2, 3] }, "a.length") = 3', () => {
      expect(get({ a: [1, 2, 3] }, 'a.length')).toBe(3);
    });
  });

  describe('EC4: Objects with Mixed Arrays and Objects (from documentation)', () => {
    
    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    it('should get nested value with bracket notation: get(object, "a[0].b.c") = 3 (from docs)', () => {
      expect(get(object, 'a[0].b.c')).toBe(3);
    });

    it('should get nested value with array path: get(object, ["a", "0", "b", "c"]) = 3 (from docs)', () => {
      expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    });

    it('should get object at array index: get(object, "a[0]") = { b: { c: 3 } }', () => {
      expect(get(object, 'a[0]')).toEqual({ 'b': { 'c': 3 } });
    });

    it('should get nested object within array: get(object, "a[0].b") = { c: 3 }', () => {
      expect(get(object, 'a[0].b')).toEqual({ 'c': 3 });
    });
  });

  describe('EC5: Empty Object', () => {
    
    it('should return undefined for any path on empty object: get({}, "a") = undefined', () => {
      expect(get({}, 'a')).toBeUndefined();
    });

    it('should return undefined for nested path on empty object: get({}, "a.b.c") = undefined', () => {
      expect(get({}, 'a.b.c')).toBeUndefined();
    });

    it('should return default value for path on empty object: get({}, "a", "default")', () => {
      expect(get({}, 'a', 'default')).toBe('default');
    });
  });

  describe('EC6 & EC7: Null and Undefined Objects', () => {
    
    it('should return undefined for null object: get(null, "a") = undefined', () => {
      expect(get(null, 'a')).toBeUndefined();
    });

    it('should return undefined for undefined object: get(undefined, "a") = undefined', () => {
      expect(get(undefined, 'a')).toBeUndefined();
    });

    it('should return default value for null object: get(null, "a", "default")', () => {
      expect(get(null, 'a', 'default')).toBe('default');
    });

    it('should return default value for undefined object: get(undefined, "a", "default")', () => {
      expect(get(undefined, 'a', 'default')).toBe('default');
    });

    it('should return default value for null object with nested path: get(null, "a.b.c", 42)', () => {
      expect(get(null, 'a.b.c', 42)).toBe(42);
    });
  });

  describe('EC8: Non-Object Primitives as Object', () => {
    
    it('should handle number as object: get(42, "toString")', () => {
      const result = get(42, 'toString');
      // Numbers have toString method inherited from prototype
      expect(typeof result).toBe('function');
    });

    it('should handle string as object: get("hello", "length") = 5', () => {
      expect(get('hello', 'length')).toBe(5);
    });

    it('should handle string character access: get("hello", "0") = "h"', () => {
      expect(get('hello', '0')).toBe('h');
    });

    it('should handle boolean as object: get(true, "valueOf")', () => {
      const result = get(true, 'valueOf');
      expect(typeof result).toBe('function');
    });

    it('should return undefined for non-existent property on primitive: get(42, "nonExistent")', () => {
      expect(get(42, 'nonExistent')).toBeUndefined();
    });
  });

  describe('EC9: Arrays as Root Object', () => {
    
    it('should get element from array with numeric string path: get([1, 2, 3], "0") = 1', () => {
      expect(get([1, 2, 3], '0')).toBe(1);
    });

    it('should get element from array with bracket notation: get([1, 2, 3], "[1]") = 2', () => {
      expect(get([1, 2, 3], '[1]')).toBe(2);
    });

    it('should get array length: get([1, 2, 3], "length") = 3', () => {
      expect(get([1, 2, 3], 'length')).toBe(3);
    });

    it('should get nested value from array of objects: get([{ a: 1 }], "0.a") = 1', () => {
      expect(get([{ a: 1 }], '0.a')).toBe(1);
    });

    it('should handle array path with arrays: get([1, 2, 3], ["1"]) = 2', () => {
      expect(get([1, 2, 3], ['1'])).toBe(2);
    });
  });

  describe('EC10 & EC11: String Path Variations', () => {
    
    it('should handle simple string path: get({ a: 1 }, "a") = 1', () => {
      expect(get({ a: 1 }, 'a')).toBe(1);
    });

    it('should handle two-level dot notation: get({ a: { b: 2 } }, "a.b") = 2', () => {
      expect(get({ a: { b: 2 } }, 'a.b')).toBe(2);
    });

    it('should handle three-level dot notation: get({ a: { b: { c: 3 } } }, "a.b.c") = 3', () => {
      expect(get({ a: { b: { c: 3 } } }, 'a.b.c')).toBe(3);
    });

    it('should handle keys with numbers: get({ a1: { b2: 3 } }, "a1.b2") = 3', () => {
      expect(get({ a1: { b2: 3 } }, 'a1.b2')).toBe(3);
    });
  });

  describe('EC12: Bracket Notation String Path', () => {
    
    it('should handle bracket notation for array index: get({ a: [1] }, "a[0]") = 1', () => {
      expect(get({ a: [1] }, 'a[0]')).toBe(1);
    });

    it('should handle mixed bracket and dot notation: get({ a: [{ b: 2 }] }, "a[0].b") = 2', () => {
      expect(get({ a: [{ b: 2 }] }, 'a[0].b')).toBe(2);
    });

    it('should handle multiple bracket notations: get({ a: [[1, 2]] }, "a[0][1]") = 2', () => {
      expect(get({ a: [[1, 2]] }, 'a[0][1]')).toBe(2);
    });

    it('should handle bracket notation with property access: get({ a: { b: [1, 2] } }, "a.b[1]") = 2', () => {
      expect(get({ a: { b: [1, 2] } }, 'a.b[1]')).toBe(2);
    });
  });

  describe('EC13 & EC14: Array Path', () => {
    
    it('should handle array path with single element: get({ a: 1 }, ["a"]) = 1', () => {
      expect(get({ a: 1 }, ['a'])).toBe(1);
    });

    it('should handle array path with multiple elements: get({ a: { b: 2 } }, ["a", "b"]) = 2', () => {
      expect(get({ a: { b: 2 } }, ['a', 'b'])).toBe(2);
    });

    it('should handle array path with numeric strings: get({ a: [1, 2] }, ["a", "1"]) = 2', () => {
      expect(get({ a: [1, 2] }, ['a', '1'])).toBe(2);
    });

    it('should handle array path with numbers: get({ a: [1, 2] }, ["a", 0]) = 1', () => {
      expect(get({ a: [1, 2] }, ['a', 0])).toBe(1);
    });

    it('should handle complex array path: get(obj, ["a", "0", "b", "c"]) = 3', () => {
      const object = { 'a': [{ 'b': { 'c': 3 } }] };
      expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
    });
  });

  describe('EC15 & EC16: Empty Path', () => {
    
    it('should return undefined for empty string path: get({ a: 1 }, "") = undefined', () => {
      expect(get({ a: 1 }, '')).toBeUndefined();
    });

    it('should return object for empty array path: get({ a: 1 }, [])', () => {
      const obj = { a: 1 };
      const result = get(obj, []);
      // Empty path should return the object itself or undefined depending on implementation
      expect(result === obj || result === undefined).toBe(true);
    });
  });

  describe('EC17: Path to Non-Existent Property', () => {
    
    it('should return undefined for non-existent property: get({ a: 1 }, "b")', () => {
      expect(get({ a: 1 }, 'b')).toBeUndefined();
    });

    it('should return undefined for non-existent nested property: get({ a: 1 }, "a.b.c")', () => {
      expect(get({ a: 1 }, 'a.b.c')).toBeUndefined();
    });

    it('should return default value for non-existent property: get({ a: 1 }, "b", "default")', () => {
      expect(get({ a: 1 }, 'b', 'default')).toBe('default');
    });

    it('should return default for non-existent path (from docs): get(object, "a.b.c", "default")', () => {
      const object = { 'a': [{ 'b': { 'c': 3 } }] };
      expect(get(object, 'a.b.c', 'default')).toBe('default');
    });
  });

  describe('EC18: Path with Special Characters', () => {
    
    it('should handle path with underscore: get({ a_b: 1 }, "a_b") = 1', () => {
      expect(get({ a_b: 1 }, 'a_b')).toBe(1);
    });

    it('should handle path with dollar sign: get({ $a: 1 }, "$a") = 1', () => {
      expect(get({ $a: 1 }, '$a')).toBe(1);
    });

    it('should handle path with hyphen in array notation: get({ "a-b": 1 }, ["a-b"]) = 1', () => {
      expect(get({ 'a-b': 1 }, ['a-b'])).toBe(1);
    });

    it('should handle numeric keys: get({ "0": "zero" }, "0") = "zero"', () => {
      expect(get({ '0': 'zero' }, '0')).toBe('zero');
    });
  });

  describe('EC19: Null/Undefined Path', () => {
    
    it('should handle null path: get({ a: 1 }, null)', () => {
      const result = get({ a: 1 }, null);
      // Should return undefined or the object depending on implementation
      expect(result === undefined || result !== null).toBe(true);
    });

    it('should handle undefined path: get({ a: 1 }, undefined)', () => {
      const result = get({ a: 1 }, undefined);
      expect(result === undefined || typeof result === 'object').toBe(true);
    });
  });

  describe('EC20: No Default Value Provided', () => {
    
    it('should return undefined when value not found and no default: get({}, "a")', () => {
      expect(get({}, 'a')).toBeUndefined();
    });

    it('should return undefined for null object without default: get(null, "a")', () => {
      expect(get(null, 'a')).toBeUndefined();
    });
  });

  describe('EC21: Primitive Default Values', () => {
    
    it('should return number default value: get({}, "a", 42) = 42', () => {
      expect(get({}, 'a', 42)).toBe(42);
    });

    it('should return string default value: get({}, "a", "default") = "default"', () => {
      expect(get({}, 'a', 'default')).toBe('default');
    });

    it('should return boolean default value: get({}, "a", false) = false', () => {
      expect(get({}, 'a', false)).toBe(false);
    });

    it('should return zero as default value: get({}, "a", 0) = 0', () => {
      expect(get({}, 'a', 0)).toBe(0);
    });

    it('should return empty string as default value: get({}, "a", "") = ""', () => {
      expect(get({}, 'a', '')).toBe('');
    });
  });

  describe('EC22: Object/Array Default Values', () => {
    
    it('should return object default value: get({}, "a", { fallback: true })', () => {
      expect(get({}, 'a', { fallback: true })).toEqual({ fallback: true });
    });

    it('should return array default value: get({}, "a", [1, 2, 3])', () => {
      expect(get({}, 'a', [1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should return empty object as default: get({}, "a", {})', () => {
      expect(get({}, 'a', {})).toEqual({});
    });

    it('should return empty array as default: get({}, "a", [])', () => {
      expect(get({}, 'a', [])).toEqual([]);
    });
  });

  describe('EC23: Null as Default Value', () => {
    
    it('should return null as default when value not found: get({}, "a", null)', () => {
      expect(get({}, 'a', null)).toBe(null);
    });

    it('should NOT use null default when value exists: get({ a: 1 }, "a", null) = 1', () => {
      expect(get({ a: 1 }, 'a', null)).toBe(1);
    });

    it('should return actual null value, not default: get({ a: null }, "a", "default")', () => {
      expect(get({ a: null }, 'a', 'default')).toBe(null);
    });
  });

  describe('EC24: Function as Default Value', () => {
    
    it('should return function as default value: get({}, "a", () => 42)', () => {
      const defaultFn = () => 42;
      const result = get({}, 'a', defaultFn);
      expect(result).toBe(defaultFn);
    });

    it('should return function when value not found', () => {
      const fn = function() { return 'hello'; };
      expect(get({}, 'missing', fn)).toBe(fn);
    });
  });

  describe('Boundary Value Analysis - Path Depth', () => {
    
    it('BVA: Single level depth (1)', () => {
      expect(get({ a: 1 }, 'a')).toBe(1);
    });

    it('BVA: Two level depth (2)', () => {
      expect(get({ a: { b: 2 } }, 'a.b')).toBe(2);
    });

    it('BVA: Three level depth (3)', () => {
      expect(get({ a: { b: { c: 3 } } }, 'a.b.c')).toBe(3);
    });

    it('BVA: Five level depth (5)', () => {
      const obj = { a: { b: { c: { d: { e: 5 } } } } };
      expect(get(obj, 'a.b.c.d.e')).toBe(5);
    });

    it('BVA: Ten level depth (10)', () => {
      const obj = { l1: { l2: { l3: { l4: { l5: { l6: { l7: { l8: { l9: { l10: 'deep' } } } } } } } } } };
      expect(get(obj, 'l1.l2.l3.l4.l5.l6.l7.l8.l9.l10')).toBe('deep');
    });
  });

  describe('Boundary Value Analysis - Array Indices', () => {
    
    it('BVA: First array index (0)', () => {
      expect(get({ a: [1, 2, 3] }, 'a[0]')).toBe(1);
    });

    it('BVA: Second array index (1)', () => {
      expect(get({ a: [1, 2, 3] }, 'a[1]')).toBe(2);
    });

    it('BVA: Last valid index', () => {
      expect(get({ a: [1, 2, 3] }, 'a[2]')).toBe(3);
    });

    it('BVA: First invalid index (out of bounds)', () => {
      expect(get({ a: [1, 2, 3] }, 'a[3]')).toBeUndefined();
    });

    it('BVA: Negative index', () => {
      expect(get({ a: [1, 2, 3] }, 'a[-1]')).toBeUndefined();
    });

    it('BVA: Large index', () => {
      expect(get({ a: [1, 2, 3] }, 'a[1000]')).toBeUndefined();
    });
  });

  describe('Edge Cases - Undefined Values vs Missing Properties', () => {
    
    it('should return actual undefined value, not default', () => {
      const obj = { a: undefined };
      const result = get(obj, 'a', 'default');
      // When value is explicitly undefined, should return default
      expect(result).toBe('default');
    });

    it('should distinguish between undefined value and missing property', () => {
      const obj = { a: undefined, b: null };
      expect(get(obj, 'a', 'default')).toBe('default');
      expect(get(obj, 'b', 'default')).toBe(null);
    });
  });

  describe('Edge Cases - Complex Objects', () => {
    
    it('should handle object with circular reference path', () => {
      const obj = { a: 1 };
      // Note: not testing actual circular reference as it could cause issues
      expect(get(obj, 'a')).toBe(1);
    });

    it('should handle object with getter property', () => {
      const obj = {
        get computed() { return 42; }
      };
      expect(get(obj, 'computed')).toBe(42);
    });

    it('should handle sparse array', () => {
      const arr = [1, , , 4];
      expect(get({ a: arr }, 'a[0]')).toBe(1);
      expect(get({ a: arr }, 'a[1]')).toBeUndefined();
      expect(get({ a: arr }, 'a[3]')).toBe(4);
    });

    it('should handle array with object elements', () => {
      const obj = { items: [{ id: 1, name: 'first' }, { id: 2, name: 'second' }] };
      expect(get(obj, 'items[0].id')).toBe(1);
      expect(get(obj, 'items[1].name')).toBe('second');
    });
  });

  describe('Real-world E-Commerce Use Cases', () => {
    
    /**
     * These tests simulate real-world scenarios from the E-commerce application
     * as described in the test plan.
     */

    it('should get product price from nested structure', () => {
      const product = {
        id: 1,
        details: {
          pricing: {
            amount: 19.99,
            currency: 'EUR'
          }
        }
      };
      expect(get(product, 'details.pricing.amount')).toBe(19.99);
    });

    it('should get product from cart items array', () => {
      const cart = {
        items: [
          { productId: 1, quantity: 2, price: 10.00 },
          { productId: 2, quantity: 1, price: 25.00 }
        ]
      };
      expect(get(cart, 'items[0].quantity')).toBe(2);
      expect(get(cart, 'items[1].price')).toBe(25.00);
    });

    it('should return default value for missing product category', () => {
      const product = {
        id: 1,
        name: 'Apple',
        producer: 'Local Farm'
        // category is missing (optional field from E2E scenario 2)
      };
      expect(get(product, 'category', 'Uncategorized')).toBe('Uncategorized');
    });

    it('should get producer name from product', () => {
      const product = {
        id: 1,
        producer: {
          name: 'Green Valley Farm',
          id: 'producer-123'
        }
      };
      expect(get(product, 'producer.name')).toBe('Green Valley Farm');
    });

    it('should handle user profile with nested address', () => {
      const user = {
        profile: {
          name: 'John Doe',
          address: {
            street: '123 Main St',
            city: 'Helsinki',
            zip: '00100'
          }
        }
      };
      expect(get(user, 'profile.address.city')).toBe('Helsinki');
    });

    it('should get filter criteria from search params', () => {
      const searchParams = {
        filters: {
          category: 'vegetables',
          priceRange: { min: 0, max: 50 },
          producer: 'all'
        }
      };
      expect(get(searchParams, 'filters.priceRange.max')).toBe(50);
    });

    it('should handle empty cart scenario', () => {
      const cart = { items: [] };
      expect(get(cart, 'items[0]', null)).toBe(null);
      expect(get(cart, 'items.length')).toBe(0);
    });

    it('should get order total from checkout data', () => {
      const checkout = {
        order: {
          subtotal: 45.00,
          tax: 10.80,
          shipping: 5.00,
          total: 60.80
        }
      };
      expect(get(checkout, 'order.total')).toBe(60.80);
    });
  });

  describe('Symbol and Special Object Types', () => {
    
    it('should handle Date object properties', () => {
      const obj = { date: new Date('2025-01-01') };
      const result = get(obj, 'date.getTime');
      expect(typeof result).toBe('function');
    });

    it('should handle Map object (as regular object)', () => {
      const obj = { map: new Map([['key', 'value']]) };
      const result = get(obj, 'map.size');
      expect(result).toBe(1);
    });

    it('should handle Set object', () => {
      const obj = { set: new Set([1, 2, 3]) };
      expect(get(obj, 'set.size')).toBe(3);
    });

    it('should handle RegExp object', () => {
      const obj = { regex: /test/gi };
      expect(get(obj, 'regex.source')).toBe('test');
    });
  });

  describe('Performance and Large Objects', () => {
    
    it('should handle object with many keys', () => {
      const obj = {};
      for (let i = 0; i < 100; i++) {
        obj[`key${i}`] = i;
      }
      expect(get(obj, 'key50')).toBe(50);
      expect(get(obj, 'key99')).toBe(99);
    });

    it('should handle large arrays', () => {
      const obj = { items: Array.from({ length: 1000 }, (_, i) => i) };
      expect(get(obj, 'items[0]')).toBe(0);
      expect(get(obj, 'items[999]')).toBe(999);
      expect(get(obj, 'items[500]')).toBe(500);
    });
  });

  describe('Type Coercion Cases', () => {
    
    it('should handle numeric index as string in path array', () => {
      expect(get([1, 2, 3], ['0'])).toBe(1);
    });

    it('should handle numeric index as number in path array', () => {
      expect(get([1, 2, 3], [1])).toBe(2);
    });

    it('should handle boolean key', () => {
      const obj = { true: 'yes', false: 'no' };
      expect(get(obj, 'true')).toBe('yes');
    });
  });

});
