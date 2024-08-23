import { useTodayTodoList } from '@/features/todo';

export default function TodoList() {
  const todayTodoList = useTodayTodoList();
  return <div>{todayTodoList.map((todo) => todo.todo)}</div>;
}
