import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TTodoInfo } from '@/features/todo';

interface TPersistTodoState {
  todoInfo: TTodoInfo;
  setTodoInfo: (todoInfo: TTodoInfo) => void;
}

const usePersistTodoStore = create<TPersistTodoState>()(
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

export const useTodoStore = () =>
  usePersistTodoStore(({ todoInfo, setTodoInfo }) => ({ todoInfo, setTodoInfo }));
