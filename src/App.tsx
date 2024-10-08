import { TodoAddForm, TodoCard, TodoFilter, TodoList } from '@/features/todo';

export default function App() {
  return (
    <main className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center min-w-[320px]">
      <TodoCard>
        <TodoAddForm />
        <TodoFilter />
        <div className="overflow-y-auto px-2">
          <TodoList />
        </div>
      </TodoCard>
    </main>
  );
}
