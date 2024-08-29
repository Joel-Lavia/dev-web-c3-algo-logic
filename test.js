let tab1 = [1,3,5];
let tab2 = [2,6,7];
let tab3 = [1,2,3];
let tab = [tab1,tab2,tab3]

let sizeMatrice = tab.length;
let sommeFirstDiagonale = 0;
let sommeSecondeDiagonale = 0;
let result = 0;

for (let i = 0; i < sizeMatrice; i++) {

for (let j = 0; j < sizeMatrice; j++) {
// result = sizeMatrice[j]; 
if (i===j) {
sommeFirstDiagonale +=tab[i][j];
// console.log(sommeFirstDiagonale);
}
if (i + j === sizeMatrice-1) {
sommeSecondeDiagonale +=tab[i][j]; 
}
}

};

result = Math.abs(sommeFirstDiagonale - sommeSecondeDiagonale);

console.log(result);


//je dois simuler l'increment