import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TTodo } from '@/features/todo';

interface TTodoState {
  todoList: TTodo[];
  setTodoList: (todoList: TTodo[]) => void;
}

export const useTodoStore = create<TTodoState>()(
  devtools(
    persist(
      (set) => ({
        todoList: [],
        setTodoList: (todoList) => set(() => ({ todoList })),
      }),
      { name: 'todoStore' },
    ),
  ),
);
