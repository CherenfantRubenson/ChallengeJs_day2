
// in this exercice we have to revercherse the characters of the string
// Remove spaces betwen them and display the chaine reverse

let char = "Ayibobo Ayiti";

stringToArray = char.split(""); // we convert the string to an array
array = [];

for (let el of stringToArray) {

    if (el == ' ') {

        continue // we avoid the choice of the space in the elements of the array
    }

    array.push(el)
}

tablo = array.reverse();        // we reverse items in the array with the fonction reverse

console.log(array.join(""));



