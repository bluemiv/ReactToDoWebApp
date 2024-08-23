import { TodoCheckBox, TodoState, TTodo, useTodoDateStore, useTodoStore } from '@/features/todo';

interface TProps {
  todo: TTodo;
}

export default function TodoItem({ todo }: TProps) {
  const { curDate } = useTodoDateStore();
  const { completeTodo } = useTodoStore();

  const isCompleted = todo.state === TodoState.completed;
  return (
    <div className="flex items-center gap-4">
      <TodoCheckBox
        onClick={() => completeTodo({ id: todo.id, curDate, isCompleted: !isCompleted })}
        isCompleted={isCompleted}
      />
      <div className="flex-1">{todo.todo}</div>
      <div className="text-xs text-gray-500 text-right flex flex-col gap-1">
        <div>Updated At</div>
        <div>{todo.updated}</div>
      </div>
    </div>
  );
}
