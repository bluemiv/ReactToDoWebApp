import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TodoState, TTodoInfo } from '@/features/todo';
import { Dayjs } from 'dayjs';
import { DATE_FORMAT } from '@/constants';

interface TTodoState {
  todoInfo: TTodoInfo;
  setTodoInfo: (todoInfo: TTodoInfo) => void;
  completeTodo: (params: { curDate: Dayjs; id: number; isCompleted: boolean }) => void;
}

export const useTodoStore = create<TTodoState>()(
  devtools(
    persist(
      (set, get) => ({
        todoInfo: {},
        setTodoInfo: (todoInfo) => set(() => ({ todoInfo })),
        completeTodo: ({
          curDate,
          id,
          isCompleted,
        }: {
          curDate: Dayjs;
          id: number;
          isCompleted: boolean;
        }) => {
          const { todoInfo } = get();
          const nextTodoInfo = { ...todoInfo };
          const foundTodo = nextTodoInfo[curDate.format(DATE_FORMAT.DATE)]?.find(
            (todo) => id === todo.id,
          );
          if (!foundTodo) return;
          foundTodo.state = isCompleted ? TodoState.completed : TodoState.normal;
          set(() => ({ todoInfo: nextTodoInfo }));
        },
      }),
      { name: 'todoStore' },
    ),
  ),
);
