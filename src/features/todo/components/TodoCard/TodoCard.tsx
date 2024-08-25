import { TPropsWithChildren } from '@/types';
import TodoCardHeader from './TodoCardHeader';
import TodoCardFooter from './TodoCardFooter';

export default function TodoCard({ children }: TPropsWithChildren) {
  return (
    <div className="shadow-2xl rounded-3xl bg-white m-auto w-[95vw] md:w-[720px] flex flex-col">
      <TodoCardHeader />
      <div className="p-4 sm:p-6 max-h-[60vh] min-h-[60vh] flex flex-col gap-4 sm:gap-6">
        {children}
      </div>
      <TodoCardFooter />
    </div>
  );
}
