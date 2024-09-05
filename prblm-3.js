function deleteInvalids(array)
{
    var newArray = [];
    if(Array.isArray(array))
    {
        for(element of array)
        {
            if(typeof(element) === 'number' && !isNaN(element))
                newArray.push(element);
        }
        return newArray;
    }
    return 'Invalid Array';
}

console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));
console.log(deleteInvalids(["1" , {num:2} , NaN ]));
console.log(deleteInvalids([ 1 , 2 , -3 ]));
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]}));