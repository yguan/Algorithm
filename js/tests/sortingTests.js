/**
 * Test selection sort
 */
define(['app/selectionSort', 'app/insertionSort'], function(selectionSort, insertionSort) {

    var _list = [64, 25,12,22,11];

    return {

        run: function () {
            var listToBeSort = _list.slice(0);
            selectionSort.sort(listToBeSort);
            console.log('selection sort: ' + listToBeSort);

            listToBeSort = _list.slice(0);
            insertionSort.sort(listToBeSort)
            console.log('insertion sort: ' + listToBeSort);
        }
    };

});
