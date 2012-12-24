/**
 * Selection sorting algorithm
 */
define({
        _minIndex: function(list, start, end) {
            var minIdx = start;
            for (var i = start; i < end;) {
                i++;
                if (list[minIdx] > list[i]) {
                    minIdx = i;
                }
            }
            return minIdx;
        },

        _swap: function (list, index1, index2) {
            var temp = list[index1];
            list[index1] = list[index2];
            list[index2] = temp;
        },

        sort: function (list) {
            for (var i = 0, len = list.length; i < len; i++) {
                var minIdx = this._minIndex(list, i, len - 1);
                if (list[i] > list[minIdx]) {
                    this._swap(list, i, minIdx);
                }
            }
        }
    }
);
