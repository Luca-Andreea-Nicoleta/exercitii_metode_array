// Se da urmatorul array:
const produseAlimentare = [
  {
    id: 1,
    name: "Mamaliga",
    price: 10.99,
    brand: "CerealBio",
  },
  {
    id: 2,
    name: "Salam de Sibiu",
    price: 24.5,
    brand: "Carnex",
  },
  {
    id: 3,
    name: "Tuica de Prune",
    price: 45.0,
    brand: "WeDrink",
  },
  {
    id: 4,
    name: "Branza de Burduf",
    price: 18.75,
    brand: "BranzaMoldova",
  },
  {
    id: 5,
    name: "Mazare Congelata",
    price: 8.25,
    brand: "CeralBio",
  },
  {
    id: 6,
    name: "Sarmale în foi de varza",
    price: 32.99,
    brand: "Carnex",
  },
];

// 1. Folosind metoda aferenta, returneaza din array-ul de mai sus produsul cu numele "Mamaliga".

const cautareProdus = produseAlimentare.find(
  (produs) => produs.name === "Mamaliga"
);

console.log(cautareProdus);

// 2. Folosind metoda aferenta, returneaza un array care sa contina doar produsele de la "Carnex".

const carnex = produseAlimentare.filter((produs) => produs.brand === "Carnex");

console.log(carnex);

// 3. Folosind metoda aferenta, returneaza un nou array, care sa nu contina produsul cu id-ul 5

const produseFaraId = produseAlimentare.filter((produs) => produs.id !== 5);

console.log(produseFaraI5);

// 4. Calculeaza suma tuturor produselor din array.

const sumaTotala = produseAlimentare.reduce(
  (suma, produs) => suma + produs.price,
  0
);

const sumaCuDouaZecimale = sumaTotala.toFixed(2);

console.log(sumaCuDouaZecimale);

// 5. Fara a modifica array-ul initial, retuneaza un array nou, in care fiecare element are o noua proprietate: "isFavorite", cu valoarea false. HINT: map + Object.assign

const produseIsFavorite = produseAlimentare.map((produs) =>
  Object.assign({}, produs, { isFavorite: false })
);

console.log(produseIsFavorite);
