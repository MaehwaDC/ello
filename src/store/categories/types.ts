export type User = {
  id: number | string;
  name: string;
  imageUrl: string;
};

export type Board = {
  id: string | number;
  name: string;
  description: string;
  users: User[];
};

export type Category = {
  id: string | number;
  name: string;
  boards: Board[];
};

export interface ICategoriesStore {
  list: Category[];
}

export enum CategoryTypes {
  REQUSET_CATEGORIES = 'REQUSET_CATEGORIES',
  RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES',
  ERROR_CATEGORIES = 'ERROR_CATEGORIES',
}
