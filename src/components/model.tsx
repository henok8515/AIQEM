export interface TodoModel {
  id: number;
  todo: string;
  isDone: boolean;
  catagories: string;

  // getLocalItemes: () => void;
}

export interface IUser {
  todo: string;
}
