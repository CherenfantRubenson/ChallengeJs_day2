// blast token 

let blast = "webinsecure;34829sjdfnsj32984madsdkj"

let array = blast.split('');
let tableau = [];
let result = [];

for (let i = 0; i < blast.length; i++) {


    if (array[i] == ";") {

        for (let y = array.indexOf(array[i]); y >= 0; y--) {
            tableau.push(array[y]);

        }
    }
}



console.log(` ${(tableau.reverse().join(''))}`);