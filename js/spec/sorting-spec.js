/**
 * Test sorting algorithm
 */
define(['app/selectionSort', 'app/insertionSort', 'jasmine-html'], function(selectionSort, insertionSort) {

    describe("Sorting Algorithm", function() {
        var _list = [64, 25,12,22,11],
            _sortedList = [11,12,22,25,64],
            _listCopy;

        beforeEach(function() {
            _listCopy = _list.slice(0);
        });

        it("should sort ascending for insertion sort", function() {
            insertionSort.sort(_listCopy);
            expect(_listCopy).toEqual(_sortedList);
        });

        it("should sort ascending for selection sort", function() {
            selectionSort.sort(_listCopy);
            expect(_listCopy).toEqual(_sortedList);
        });
    });

});

