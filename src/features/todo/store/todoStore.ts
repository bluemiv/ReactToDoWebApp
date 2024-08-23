import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TTodoInfo } from '@/features/todo';

interface TTodoState {
  todoInfo: TTodoInfo;
  setTodoInfo: (todoInfo: TTodoInfo) => void;
}

export const useTodoStore = create<TTodoState>()(
  devtools(
    persist(
      (set) => ({
        todoInfo: {},
        setTodoInfo: (todoInfo) => set(() => ({ todoInfo })),
      }),
      { name: 'todoStore' },
    ),
  ),
);
