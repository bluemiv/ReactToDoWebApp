import { TodoItem, useTodayTodoList } from '@/features/todo';

export default function TodoList() {
  const todayTodoList = useTodayTodoList();
  return (
    <div className="flex flex-col gap-4">
      {todayTodoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
