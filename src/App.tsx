import { Card, Copyright } from '@/components';
import { TodoItem } from '@/features/todo';

export default function App() {
  return (
    <main className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center min-w-[320px]">
      <Card
        className="m-auto w-[95vw] h-[80vh] md:w-[720px]"
        title="To Do List"
        footer={<Copyright />}
      >
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </Card>
    </main>
  );
}
