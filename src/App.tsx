import { Card, Copyright } from '@/components';
import { TodoAddForm, TodoItem } from '@/features/todo';

export default function App() {
  return (
    <main className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center min-w-[320px]">
      <Card
        className="m-auto w-[95vw] h-[80vh] md:w-[720px]"
        title="TO DO LIST"
        footer={<Copyright />}
      >
        <div className="flex flex-col gap-6">
          <TodoAddForm />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </div>
      </Card>
    </main>
  );
}
