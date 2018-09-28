// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****
function makeSquare (num) {
    if (num === 0) {
    }
    var topLine = '*'
    for (var i = 1; i < num; i++) {
    topLine = topLine + '*'    
    } 
    for (var i = 1; i < num; i++) {
        topLine = topLine + '*'    
        } 
    console.log(topLine)
    
    

} makeSquare (3) 



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
