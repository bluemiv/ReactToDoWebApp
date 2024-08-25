import { TPropsWithChildren } from '@/types';
import { TodoCardHeader, useTodayTodoList } from '@/features/todo';
import { Copyright } from '@/components';

interface TProps {}

export default function TodoCard({ children }: TPropsWithChildren<TProps>) {
  const todoList = useTodayTodoList();
  const count = todoList.length;
  return (
    <div className="shadow-2xl rounded-3xl bg-white m-auto w-[95vw] md:w-[720px] flex flex-col">
      <TodoCardHeader />
      <div className="p-6 max-h-[60vh] min-h-[60vh] flex flex-col gap-6">{children}</div>
      <div className="p-6 border-t flex justify-between items-center h-[80px]">
        <div className="text-indigo-500 text-sm">{`${count} Task${count > 1 ? 's' : ''}`}</div>
        <Copyright />
      </div>
    </div>
  );
}
