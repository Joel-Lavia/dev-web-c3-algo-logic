// Filtrer les utilisateurs par âge
// Écrire une fonction qui filtre les personnes dont l'âge est supérieur à une certaine valeur donnée.
// ________________________________

const personnes = [
  { nom: "Alice", age: 25 },
  { nom: "Bob", age: 30 },
  { nom: "Charlie", age: 20 },
];


function filterAge() {
  const ageFilter = personnes.filter((allage) => allage.age >= 25);
  return ageFilter;
}
console.log(filterAge());
const ageMinimum = 25;

/**
 * Ex : Utilisateurs de 25 ans et plus : [{ nom: 'Alice', age: 25 }, { nom: 'Bob', age: 30 }]
 */
