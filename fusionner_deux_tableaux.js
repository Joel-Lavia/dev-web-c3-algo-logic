// Fusionner deux tableaux d'objets
// Écrire une fonction qui fusionne les deux tableaux en éliminant les doublons (s'il y en a) et en conservant l'ordre.
// ________________________________

const tableau1 = [
  { id: 1, nom: "Alice" },
  { id: 2, nom: "Bob" },
];
const tableau2 = [
  { id: 2, nom: "Bob" },
  { id: 3, nom: "Charlie" },
];
function mergeArray() {
  const merge = tableau1.concat(tableau2);
  const removeDup = merge.map(({ id }) => id);
  const fil = merge.filter(({ id }, i) => !removeDup.includes(id,i+1));
  return fil;
}
console.log(mergeArray());

/**
 * Ex: [{ id: 1, nom: 'Alice' }, { id: 2, nom: 'Bob' }, { id: 3, nom: 'Charlie' }]
 */
