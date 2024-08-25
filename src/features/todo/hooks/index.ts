import { TodoState, useTodoDateStore, useTodoStore } from '@/features/todo';
import { DATE_FORMAT } from '@/constants';
import dayjs from 'dayjs';

export const useTodayTodoList = () => {
  const { curDate } = useTodoDateStore();
  const { todoInfo } = useTodoStore();

  const curDateKey = curDate.format(DATE_FORMAT.DATE);
  return todoInfo?.[curDateKey] ?? [];
};

export const useCompleteTodo = () => {
  const { curDate } = useTodoDateStore();
  const { todoInfo, setTodoInfo } = useTodoStore();
  return ({ id, isCompleted }: { id: number; isCompleted: boolean }) => {
    const nextTodoInfo = { ...todoInfo };
    const foundTodo = nextTodoInfo[curDate.format(DATE_FORMAT.DATE)]?.find(
      (todo) => id === todo.id,
    );
    if (!foundTodo) return;
    foundTodo.state = isCompleted ? TodoState.completed : TodoState.normal;
    foundTodo.updated = dayjs().format(DATE_FORMAT.FULL_DATE);
    setTodoInfo(nextTodoInfo);
  };
};

export const useModifyTodo = () => {
  const { curDate } = useTodoDateStore();
  const { todoInfo, setTodoInfo } = useTodoStore();
  return ({ id, todo }: { id: number; todo: string }) => {
    const nextTodoInfo = { ...todoInfo };
    const foundTodo = nextTodoInfo[curDate.format(DATE_FORMAT.DATE)]?.find(
      (todo) => id === todo.id,
    );
    if (!foundTodo) return;
    foundTodo.todo = todo;
    foundTodo.updated = dayjs().format(DATE_FORMAT.FULL_DATE);
    setTodoInfo(nextTodoInfo);
  };
};
