function paperRequired(bookNumber1,bookNumber2,bookNumber3){
var paperNeededBook1 = bookNumber1 * 100;
var paperNeededBook2 = bookNumber2 * 200;
var paperNeededBook3 = bookNumber3 * 300;
var totalPaperNeeded = paperNeededBook1 + paperNeededBook2 + paperNeededBook3;
return totalPaperNeeded;
}

var book1 = 10;
var book2 = 15;
var book3 = 20;
var result = paperRequired(book1,book2,book3);
console.log('Total paper needed:', result);