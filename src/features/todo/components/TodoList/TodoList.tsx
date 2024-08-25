import { TodoFilterValue, TodoState, useTodayTodoList, useTodoFilterStore } from '@/features/todo';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todayTodoList = useTodayTodoList();
  const { filter } = useTodoFilterStore();
  const displayTodoList = todayTodoList.filter((todo) => {
    if (filter === TodoFilterValue.all) return true;
    if (filter === TodoFilterValue.completed) return todo.state === TodoState.completed;
    if (filter === TodoFilterValue.normal) return todo.state === TodoState.normal;
    return false;
  });
  return (
    <div className="flex flex-col gap-4">
      {displayTodoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
