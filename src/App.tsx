import { Copyright } from '@/components';
import { TodoAddForm, TodoCard, TodoCardHeader, TodoList } from '@/features/todo';

export default function App() {
  return (
    <main className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center min-w-[320px]">
      <TodoCard header={<TodoCardHeader />} footer={<Copyright />}>
        <div className="flex flex-col gap-6">
          <TodoAddForm />
          <TodoList />
        </div>
      </TodoCard>
    </main>
  );
}
