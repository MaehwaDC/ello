export type User = {
  id: number | string;
  name: string;
  imageUrl: string;
};

export type Board = {
  id: string | number;
  title: string;
  description: string;
  users: User[];
};

export interface IBoardsStore {
  list: Board[];
}
