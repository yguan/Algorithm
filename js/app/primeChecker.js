/**
 * class contains methods to determine prime number
 */
define(function () {
    var _primeNumers = [2],
        _primeNumersLookup = { 2: true };

    return {
        _addPrime: function (prime) {
            _primeNumers.push(prime);
            _primeNumersLookup[prime] = true;
        },

        /**
         * Check if a number is a prime
         * @param {int} num integer that is greater than 2
         * @private
         */
        _checkPrime: function (num) {
            var lastPrime = _primeNumers[_primeNumers.length - 1];

            if (num < lastPrime) {
                return false;
            }

            lastPrime++;

            while (lastPrime <= num) {
                var i,
                    len,
                    isPrime = true;

                for (i = 0, len = _primeNumers.length; i < len; i++) {
                    if (lastPrime % _primeNumers[i] === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    this._addPrime(lastPrime);
                }
                lastPrime++;
            }

            return _primeNumersLookup.hasOwnProperty(num);
        },

        isPrime: function (num) {
            if (num < 1) {
                return false;
            }

            if (num === 1 || num === 2) {
                return true;
            }

            if (_primeNumersLookup.hasOwnProperty(num)) {
                return true;
            }

            return this._checkPrime(num);
        }
    };

});
