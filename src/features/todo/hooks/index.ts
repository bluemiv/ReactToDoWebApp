import { useTodoDateStore, useTodoStore } from '@/features/todo';
import { DATE_FORMAT } from '@/constants';

export const useTodayTodoList = () => {
  const { curDate } = useTodoDateStore();
  const { todoInfo } = useTodoStore();

  const curDateKey = curDate.format(DATE_FORMAT.DATE);
  return todoInfo?.[curDateKey] ?? [];
};
