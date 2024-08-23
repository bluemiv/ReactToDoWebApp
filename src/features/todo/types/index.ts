import { TodoState } from '@/features/todo';

export type TTodo = {
  id: number;
  state: TodoState;
  content: string;
  created: string;
  updated: string;
};
