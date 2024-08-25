import { ReactNode } from 'react';
import { useTodoDateStore } from '@/features/todo';
import { Icons } from '@/components';

export default function TodoCardHeader() {
  const { curDate, setCurDate } = useTodoDateStore();

  const onClickPrevBtn = () => setCurDate(curDate.subtract(1, 'd'));

  const onClickNextBtn = () => setCurDate(curDate.add(1, 'd'));

  return (
    <div className="flex items-center gap-6 border-b h-[80px] px-6">
      <IconButton onClick={onClickPrevBtn} icon={<Icons.ChevronLeft />} />
      <div className="h-full flex-1 text-indigo-500 flex gap-4 items-center justify-center">
        <span className="text-2xl font-bold uppercase">{curDate.format('dddd')}</span>
        <span className="text-xl">{curDate.format('MMMM DD')}th</span>
      </div>
      <IconButton onClick={onClickNextBtn} icon={<Icons.ChevronRight />} />
    </div>
  );
}

function IconButton({ icon, onClick }: { icon: ReactNode; onClick: () => void }) {
  return (
    <button
      className="cursor-pointer rounded-full flex items-center justify-center w-[50px] h-[50px] text-indigo-500 hover:text-white hover:bg-indigo-500 transition ease-in-out duration-150 active:bg-indigo-700"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
