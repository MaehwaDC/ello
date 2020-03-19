export type User = {
  id: number | string;
  name: string;
  imageUrl: string;
};

export type Task = {
  id: string | number;
  title: string;
  description: string;
  users: User[];
};

export interface ITaskStore {
  list: Task[];
}
