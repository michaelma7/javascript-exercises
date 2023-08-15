const removeFromArray = function(array, ...removes) {
    //find index of all items to remove
    //loop through each index and remove item
    for( const remove of removes) {
        let index = array.indexOf(remove);
        while (index !== -1) {
            array.splice(index, 1);
            index = array.indexOf(remove, index++);
        }
    }
    return array;  
};

// Do not edit below this line
module.exports = removeFromArray;
