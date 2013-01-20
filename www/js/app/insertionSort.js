/**
 * Insertion sorting algorithm
 */
define({

    _findInsertionIndex: function (list, srcIndex) {
        var insertItem = list[srcIndex],
            i;

        for (i = srcIndex; i > 0; i--) {
            var precedingIndex = i - 1;
            if (insertItem > list[precedingIndex]) {
                return i;
            }
        }
        return i;
    },

    _shift: function (list, start, end) {
        var i;
        for (i = end; i >= start; i--) {
            list[i + 1] = list[i];
        }
    },

    // findInsertionIndex can combine with shift to improve performance
    sort: function (list) {
        var i, len;
        for (i = 1, len = list.length; i < len; i++) {
            var insertionIndex = this._findInsertionIndex(list, i),
                insertItem = list[i];
            if (insertionIndex !== i) {
                this._shift(list, insertionIndex, i - 1);
                list[insertionIndex] = insertItem;
            }
        }
    }

});
