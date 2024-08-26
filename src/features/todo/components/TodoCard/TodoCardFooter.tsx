import { Copyright } from '@/components';
import { TodoState, useTodayTodoList } from '@/features/todo';

export default function TodoCardFooter() {
  const todayTodoList = useTodayTodoList();
  const completedTodoList = todayTodoList.filter((todo) => todo.state === TodoState.completed);
  const totalCount = todayTodoList.length;
  const completedCount = completedTodoList.length;

  const getCountLabel = (count: number) => `${count} Task${count > 1 ? 's' : ''}`;

  return (
    <div className="p-4 sm:p-6 border-t flex justify-between items-center h-[80px]">
      <div className="text-indigo-500 text-sm">{`${completedCount} / ${getCountLabel(totalCount)}`}</div>
      <Copyright />
    </div>
  );
}
