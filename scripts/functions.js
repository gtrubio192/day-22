/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(arg1, arg2){
    "use strict";
    if(!_.isNumber(arg1)) {
        throw 'The first argument must be a number.';
    } 
    if(!_.isNumber(arg2)) {
        throw 'The second argument must be a number.';
    }    
    return arg1 > arg2 ? arg1:arg2;
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    "use strict";
    if(!_.isNumber(a)) {
        throw 'The first argument must be a number.';
    }
    if(!_.isNumber(b)) {
        throw 'The second argument must be a number.';
    }
    if(!_.isNumber(c)) {
        throw 'The third argument must be a number.';
    }

    var numbers = [a, b, c];
    var max = a;
    for(var i = 1; i < numbers.length; i++) {
        if(numbers[i] > max) 
            max = numbers[i];
    }
    return max;

}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char1){
    "use strict";
    var vowels = ['a','e','i','o','u'];
    var found = false;
    // not working
    if(!_.isString(char1))
        throw 'Argument must be an alphabetical character';
    
    // not working
    console.log(char1.length);
    if(char1.length > 1){
        throw 'Argument is greater than 1 character';
    }

    for(var i = 0; i < vowels.length; i++)
    {
        if(char1 === vowels[i])
            found = true;
    }

    return found;
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    if(!_.isString(phrase))
        throw 'Argument passed not a string';
    if(!_.isDefined(phrase))
        throw 'Passed in an empty argument';

    var newString = '';
    // not working
    for (var i = 0; i < phrase.length; i++) {
        if (checkConsonants(phrase[i])) {
            newString += phrase[i] + 'o' + phrase[i];
        } 
        else {
            newString += phrase[i];
        }
    }

    console.log('The "rövarspråket" result is: ' + '"' + newString + '"');
    return newString;
}

function checkConsonants(letterToCheck) {
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    var isConsonant = false;

    for (i = 0; i < consonants.length; i++) {
        if (letterToCheck == consonants[i]) {
            isConsonant = true;
        }
    }
    return isConsonant;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(arr){
    "use strict";
    if(!_.isArray(arr))
        throw 'Needs to be array';

    for(var i = 0; i > arr.length; i++){
        if(!_.isNumber(arr[i]))
            throw 'Elements in array must be numbers';
    }
}

function multiply(){
    "use strict";
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    "use strict";
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    //...
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    //...
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    //...
}
