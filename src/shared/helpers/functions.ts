export const removeAccents = (value: string) =>
  value
    .toLowerCase()
    .replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a')
    .replace(new RegExp('[ÉÈÊ]', 'gi'), 'e')
    .replace(new RegExp('[ÍÌÎ]', 'gi'), 'i')
    .replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o')
    .replace(new RegExp('[ÚÙÛ]', 'gi'), 'u')
    .replace(new RegExp('[Ç]', 'gi'), 'c');

export const searchIndexInText = (value: string, valueToCompare: string) =>
  removeAccents(value).indexOf(removeAccents(valueToCompare));

export const searchTextInArray = (list: string[], valueToCompare: string) => {
  const filteredList = list.reduce((acc: string[], curr) => {
    if (searchIndexInText(curr, valueToCompare) > -1) acc.push(curr);
    return acc;
  }, []);

  filteredList.sort((a, b) => {
    const indexOfA = searchIndexInText(a, valueToCompare);
    const indexOfB = searchIndexInText(b, valueToCompare);

    if (indexOfA < indexOfB) return -1;

    if (indexOfA > indexOfB) return 1;

    return 0;
  });

  return filteredList;
};
