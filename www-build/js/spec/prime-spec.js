define(["app/primeChecker","jasmine-html"],function(e){describe("Prime Checking Algorithm",function(){it("should detect prime number",function(){expect(e.isPrime(1)).toBe(!0),expect(e.isPrime(2)).toBe(!0),expect(e.isPrime(3)).toBe(!0),expect(e.isPrime(5)).toBe(!0),expect(e.isPrime(7)).toBe(!0),expect(e.isPrime(11)).toBe(!0),expect(e.isPrime(13)).toBe(!0),expect(e.isPrime(17)).toBe(!0),expect(e.isPrime(19)).toBe(!0),expect(e.isPrime(23)).toBe(!0),expect(e.isPrime(29)).toBe(!0),expect(e.isPrime(31)).toBe(!0),expect(e.isPrime(163)).toBe(!0)}),it("should detect non-prime number",function(){expect(e.isPrime(-1)).toBe(!1),expect(e.isPrime(0)).toBe(!1),expect(e.isPrime(4)).toBe(!1),expect(e.isPrime(6)).toBe(!1),expect(e.isPrime(155)).toBe(!1),expect(e.isPrime(169)).toBe(!1)})})});