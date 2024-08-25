import { Copyright } from '@/components';
import { useTodayTodoList } from '@/features/todo';

export default function TodoCardFooter() {
  const todoList = useTodayTodoList();
  const count = todoList.length;

  return (
    <div className="p-4 sm:p-6 border-t flex justify-between items-center h-[80px]">
      <div className="text-indigo-500 text-sm">{`${count} Task${count > 1 ? 's' : ''}`}</div>
      <Copyright />
    </div>
  );
}
