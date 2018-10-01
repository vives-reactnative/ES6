/*
 * Refactor the sumArgs function into ES2015, using a rest parameter, block scoped variables and arrow functions.
 * as a result it must be possible to call: sumArgs(1,2,3,4,5,6); // returning 21
*/


// remove the arguments variable
var arguments = [1,2,3,4,5,6];
function sumArgs(arguments) {
    var result = 0;
    for( var i = 0; i < arguments.length; ++i ) {
        result += arguments[i];
    }
    return result;
}
console.log(sumArgs(arguments));


