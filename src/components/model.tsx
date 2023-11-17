export interface TodoModel {
  id: number;
  todo: string;
  isDone: boolean;
  // getLocalItemes: () => void;
}

export interface IUser {
  todo: string;
  catagories: string;
}
