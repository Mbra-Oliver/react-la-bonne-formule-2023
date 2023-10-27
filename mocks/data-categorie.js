import { AnimalListDatas } from "./data-animal";

export const animalsCats = () => {
  const uniqueCategories = new Set();

  AnimalListDatas.forEach((animal) => {
    uniqueCategories.add(animal.categorie);
  });

  const Datacategories = Array.from(uniqueCategories).map((nom, id) => ({
    id: id + 1,
    nom: nom,
  }));

  return Datacategories;
};
