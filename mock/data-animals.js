export const AnimalListDatas = [
  {
    id: 1,
    nom: "Lion",
    categorie: "Mammifères",
    image: "lion.jpg",
  },
  {
    id: 2,
    nom: "Tigre",
    categorie: "Mammifères",
    image: "tigre.jpg",
  },
  {
    id: 3,
    nom: "Éléphant",
    categorie: "Mammifères",
    image: "elephant.jpg",
  },
  {
    id: 4,
    nom: "Girafe",
    categorie: "Mammifères",
    image: "girafe.jpg",
  },
  {
    id: 5,
    nom: "Ours",
    categorie: "Mammifères",
    image: "ours.jpg",
  },
  {
    id: 6,
    nom: "Singe",
    categorie: "Mammifères",
    image: "singe.jpg",
  },
  {
    id: 7,
    nom: "Rhinocéros",
    categorie: "Mammifères",
    image: "rhinoceros.jpg",
  },
  {
    id: 8,
    nom: "Hippopotame",
    categorie: "Mammifères",
    image: "hippopotame.jpg",
  },
  {
    id: 9,
    nom: "Zèbre",
    categorie: "Mammifères",
    image: "zebre.jpg",
  },
  {
    id: 10,
    nom: "Léopard",
    categorie: "Mammifères",
    image: "leopard.jpg",
  },
  {
    id: 11,
    nom: "Guépard",
    categorie: "Mammifères",
    image: "guepard.jpg",
  },
  {
    id: 12,
    nom: "Kangourou",
    categorie: "Mammifères",
    image: "kangourou.jpg",
  },
  {
    id: 13,
    nom: "Koala",
    categorie: "Mammifères",
    image: "koala.jpg",
  },
  {
    id: 14,
    nom: "Panda",
    categorie: "Mammifères",
    image: "panda.jpg",
  },
  {
    id: 15,
    nom: "Autruche",
    categorie: "Oiseaux",
    image: "autruche.jpg",
  },
  {
    id: 16,
    nom: "Flamant rose",
    categorie: "Oiseaux",
    image: "flamant-rose.jpg",
  },
  {
    id: 17,
    nom: "Dauphin",
    categorie: "Mammifères",
    image: "dauphin.jpg",
  },
  {
    id: 18,
    nom: "Baleine",
    categorie: "Mammifères",
    image: "baleine.jpg",
  },
  {
    id: 19,
    nom: "Requin",
    categorie: "Poissons",
    image: "requin.jpg",
  },
  {
    id: 20,
    nom: "Poisson-clown",
    categorie: "Poissons",
    image: "poisson-clown.jpg",
  },
  {
    id: 21,
    nom: "Tortue",
    categorie: "Reptiles",
    image: "tortue.jpg",
  },
  {
    id: 22,
    nom: "Serpent",
    categorie: "Reptiles",
    image: "serpent.jpg",
  },
  {
    id: 23,
    nom: "Caméléon",
    categorie: "Reptiles",
    image: "cameleon.jpg",
  },
  {
    id: 24,
    nom: "Papillon",
    categorie: "Insectes",
    image: "papillon.jpg",
  },
  {
    id: 25,
    nom: "Abeille",
    categorie: "Insectes",
    image: "abeille.jpg",
  },
  {
    id: 26,
    nom: "Araignée",
    categorie: "Arachnides",
    image: "araignee.jpg",
  },
  {
    id: 27,
    nom: "Escargot",
    categorie: "Mollusques",
    image: "escargot.jpg",
  },
  {
    id: 28,
    nom: "Fourmi",
    categorie: "Insectes",
    image: "fourmi.jpg",
  },
  {
    id: 29,
    nom: "Crabe",
    categorie: "Crustacés",
    image: "crabe.jpg",
  },
  {
    id: 30,
    nom: "Grenouille",
    categorie: "Amphibiens",
    image: "grenouille.jpg",
  },
];

export function allData() {
  return AnimalListDatas;
}

export function filteredData(categorie) {
  const result = allData().filter((animal) => {
    return animal.categorie === categorie;
  });

  return result;
}

export function searchData(nom) {
  let result = allData();
  if (nom) {
    result = allData().filter((animal) => {
      return animal.nom === nom;
    });
  }
  return result;
}
