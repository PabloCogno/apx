const arrayOriginal = [
  [3, 567, 23],
  [23, 54, 23],
  [27, 457, 67],
  [34, 675, 12],
];

const arraySumas = []; // Creamos un array vacío para almacenar las sumas

// usamos un for of para recorer el array principal
for (let indice in arrayOriginal) {
  const subarray = arrayOriginal[indice];
  let suma = 0; // Creamos una variable para almacenar la suma de los elementos de cada subarray
  // ahora queda recorrer el subarray y conseguir la suma
  for (let i = 0; i < subarray.length; i++) {
    suma = suma + subarray[i];
  }
  arraySumas[indice] = suma;
}

console.log(arraySumas); 
// Output esperado: [593, 100, 551, 721]

