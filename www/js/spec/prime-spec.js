/*global define, describe, beforeEach, it, expect */

/**
 * Test primeChecker
 */
define(['app/primeChecker', 'jasmine-html'], function (primeChecker) {

    describe("Prime Checking Algorithm", function () {

        it("should detect prime number", function () {
            expect(primeChecker.isPrime(1)).toBe(true);
            expect(primeChecker.isPrime(2)).toBe(true);
            expect(primeChecker.isPrime(3)).toBe(true);
            expect(primeChecker.isPrime(5)).toBe(true);
            expect(primeChecker.isPrime(7)).toBe(true);
            expect(primeChecker.isPrime(11)).toBe(true);
            expect(primeChecker.isPrime(13)).toBe(true);
            expect(primeChecker.isPrime(17)).toBe(true);
            expect(primeChecker.isPrime(19)).toBe(true);
            expect(primeChecker.isPrime(23)).toBe(true);
            expect(primeChecker.isPrime(29)).toBe(true);
            expect(primeChecker.isPrime(31)).toBe(true);
            expect(primeChecker.isPrime(163)).toBe(true);
        });

        it("should detect non-prime number", function () {
            expect(primeChecker.isPrime(-1)).toBe(false);
            expect(primeChecker.isPrime(0)).toBe(false);
            expect(primeChecker.isPrime(4)).toBe(false);
            expect(primeChecker.isPrime(6)).toBe(false);
            expect(primeChecker.isPrime(155)).toBe(false);
            expect(primeChecker.isPrime(169)).toBe(false);
        });
    });

});

