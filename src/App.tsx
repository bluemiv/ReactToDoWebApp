import { Title } from '@/components';

export default function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center">
      <div className="max-w-[640px] w-full max-h-[70vh] h-full min-h-[300px] bg-white rounded mx-auto p-10">
        <Title>To Do List</Title>
      </div>
    </div>
  );
}
