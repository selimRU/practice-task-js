function centimeterToMeter(centimeter){
    var meter = centimeter / 100;
    return meter;
}
var centimeter = 1000;
var result = centimeterToMeter(centimeter);
console.log('meter:',result);