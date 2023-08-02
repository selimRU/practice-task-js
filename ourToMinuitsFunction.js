function ourToMinuits(hours) {
    var hours = hours;
    var minuits = hours * 60;
    return minuits;
}
var hoursNumber = 5;
var totalMinuits = ourToMinuits(hoursNumber)
console.log(totalMinuits);