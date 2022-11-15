 let char ="CAS Import & Export est une entreprise spécialise dans le domaine de l’importation et exportation tout en faisant de la vente de produits. Fondée par  Aliano Charles, Cherenfant "


 let array = char.split('');

 array2 = [];

 for(let i = 0; i<char.length; i++){

    if(char[i]== ' '){

        continue;
    }

    array2.push(array[i]);

 }

 console.log(`Text before : \n\n ${char} \n\n it becomes : \n\n ${array2.join("")}`);