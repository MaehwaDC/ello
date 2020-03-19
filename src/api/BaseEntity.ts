import { Category, CategoryTypes } from './../store/categories/types';
import data from '../../data/data.json';

type Data = Category[];

export class BaseEntity {
  fetch(url: string): Data | undefined {
    switch (url) {
      case '/categories':
      default: {
        return (data as unknown) as Data;
      }
    }
  }
}
