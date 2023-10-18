export const intersection = (a, b) => {
  const setA = new Set(a);
  const setB = new Set(b);

  const result = [];
  for (const item of setA) {
    if (setB.has(item)) {
      result.push(item);
    }
  }

  return result;
};

export const elementAbsent = (a, b) => {
  const setA = new Set(a);
  const setB = new Set(b);

  const result = [];
  for (const item of setA) {
    if (!setB.has(item)) {
      result.push(item);
    }
  }

  return result;
};

export const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Trie les deux tableaux pour s'assurer qu'ils sont dans le même ordre
  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();

  // Compare les éléments un par un
  for (let i = 0; i < sortedArr1.length; i++) {
    if (sortedArr1[i] !== sortedArr2[i]) {
      return false;
    }
  }

  return true;
};
