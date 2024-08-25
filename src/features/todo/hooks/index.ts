import { TodoState, useTodoDateStore, useTodoStore } from '@/features/todo';
import { DATE_FORMAT } from '@/constants';
import dayjs from 'dayjs';

export const useTodayTodoList = () => {
  const { curDate } = useTodoDateStore();
  const { todoInfo } = useTodoStore();

  const curDateKey = curDate.format(DATE_FORMAT.DATE);
  return todoInfo?.[curDateKey] ?? [];
};

/**
 * to do 항목을 생성하는 hook
 */
export const useCompleteTodo = () => {
  const { curDate } = useTodoDateStore();
  const { todoInfo, setTodoInfo } = useTodoStore();
  return ({ id, isCompleted }: { id: number; isCompleted: boolean }) => {
    const todoInfoKey = curDate.format(DATE_FORMAT.DATE);
    const todoList = todoInfo[todoInfoKey];
    const foundIdx = todoList?.findIndex((todo) => id === todo.id);
    if (foundIdx === -1) return;

    const foundTodo = {
      ...todoList[foundIdx],
      state: isCompleted ? TodoState.completed : TodoState.normal,
      updated: dayjs().format(DATE_FORMAT.FULL_DATE),
    };
    const nextTodoList = [
      ...todoList.slice(0, foundIdx),
      foundTodo,
      ...todoList.slice(foundIdx + 1, todoList.length),
    ];
    setTodoInfo({ ...todoInfo, [todoInfoKey]: nextTodoList });
  };
};

/**
 * to do 항목을 수정하는 hook
 */
export const useModifyTodo = () => {
  const { curDate } = useTodoDateStore();
  const { todoInfo, setTodoInfo } = useTodoStore();
  return ({ id, todo }: { id: number; todo: string }) => {
    const todoInfoKey = curDate.format(DATE_FORMAT.DATE);
    const todoList = todoInfo[todoInfoKey];
    const foundIdx = todoList?.findIndex((todo) => id === todo.id);
    if (foundIdx === -1) return;

    const foundTodo = {
      ...todoList[foundIdx],
      todo,
      updated: dayjs().format(DATE_FORMAT.FULL_DATE),
    };
    const nextTodoList = [
      ...todoList.slice(0, foundIdx),
      foundTodo,
      ...todoList.slice(foundIdx + 1, todoList.length),
    ];
    setTodoInfo({ ...todoInfo, [todoInfoKey]: nextTodoList });
  };
};

/**
 * to do 항목을 삭제하는 hook
 */
export const useRemoveTodo = () => {
  const { curDate } = useTodoDateStore();
  const { todoInfo, setTodoInfo } = useTodoStore();
  return ({ id }: { id: number }) => {
    const todoInfoKey = curDate.format(DATE_FORMAT.DATE);
    const todoList = todoInfo[todoInfoKey];
    const foundIdx = todoList?.findIndex((todo) => id === todo.id);
    if (foundIdx === -1) return;

    const nextTodoList = [
      ...todoList.slice(0, foundIdx),
      ...todoList.slice(foundIdx + 1, todoList.length),
    ];
    setTodoInfo({ ...todoInfo, [todoInfoKey]: nextTodoList });
  };
};
