import { TodoAddForm, TodoCard, TodoList } from '@/features/todo';

export default function App() {
  return (
    <main className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center min-w-[320px]">
      <TodoCard>
        <TodoAddForm />
        <div className="overflow-y-auto">
          <TodoList />
        </div>
      </TodoCard>
    </main>
  );
}
