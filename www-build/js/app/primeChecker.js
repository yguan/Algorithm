define([],function(){var e=[2],t={2:!0};return{_addPrime:function(n){e.push(n),t[n]=!0},_checkPrime:function(n){var r=e[e.length-1];if(n<r)return!1;r++;while(r<=n){var i,s,o=!0;for(i=0,s=e.length;i<s;i++)if(r%e[i]===0){o=!1;break}o&&this._addPrime(r),r++}return t.hasOwnProperty(n)},isPrime:function(e){return e<1?!1:e===1||e===2?!0:t.hasOwnProperty(e)?!0:this._checkPrime(e)}}});