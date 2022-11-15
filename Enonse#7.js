
let char = "La Paparazzi est en Nouvelle Guinee"

let array = char.split('');

for (let i = 0; i < array.length; i++) {


    if (array[i] == "a" || array[i] == "A" || array[i] == "e" || array[i] == "E" || array[i] == "i" || array[i] == "I" || array[i] == "o" || array[i] == "O" || array[i] == "u" || array[i] == "U" || array[i] == "y" || array[i] == "y") {


        array[i - 1] = "*";
    }

}

console.log(array.join(""))
