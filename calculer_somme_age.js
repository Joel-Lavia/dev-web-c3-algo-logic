// Trier les utilisateurs par ordre alphabétique
//  Écrire une fonction qui calcule la somme de tous les âges dans le tableau.
// ________________________________

const personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 20 },
];
personnes.sort((a, b) => {
  if (a.nom < b.nom) {
    return -1;
  }
  if (a.nom > b.nom) {
    return 1;
  }
  return 0;
});
console.log(personnes);

function sommeAllAge() {
  const ageFistUser = personnes[0].age;
  const ageSecondUser = personnes[1].age;
  const ageThirdUser = personnes[2].age;

  const allAge = ageFistUser + ageSecondUser + ageThirdUser;

  return allAge;
}

console.log(sommeAllAge());

// const ageMinimum = 25;

/**
 * Ex: Somme des âges : 75
 */
