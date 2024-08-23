import { TodoState } from '@/features/todo';

export type TTodo = {
  id: number;
  state: TodoState;
  todo: string;
  created: string;
  updated: string;
};

export type TTodoInfo = { [key: string]: TTodo[] };
