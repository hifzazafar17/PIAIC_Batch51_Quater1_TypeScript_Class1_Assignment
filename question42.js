// showMagicians function
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// magician names
var magicianNames = ["Harry potter", "Albus Dumbledore", "Hermione", "Ron ", "Luna"];
var greatMagicians = makeGreat(magicianNames);
showMagicians(greatMagicians);
