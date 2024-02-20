import {ICharacter} from '../types';

export type ISortedBy = 'A-Z' | 'Z-A';

export const useSorting = (data: Array<ICharacter>, sortedBy: ISortedBy) => {
  const sort = (a: ICharacter, b: ICharacter) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (sortedBy == 'A-Z') {
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    } else {
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
    }
  };
  return data.sort(sort as any);
};
