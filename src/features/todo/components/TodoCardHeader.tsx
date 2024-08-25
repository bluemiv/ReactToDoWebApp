import { ReactNode } from 'react';
import { useTodoDateStore } from '@/features/todo';
import { Icons } from '@/components';
import { useIsMobile } from '@/hooks';
import classNames from 'classnames';

export default function TodoCardHeader() {
  const { curDate, setCurDate } = useTodoDateStore();

  const onClickPrevBtn = () => setCurDate(curDate.subtract(1, 'd'));

  const onClickNextBtn = () => setCurDate(curDate.add(1, 'd'));

  return (
    <div className="flex items-center gap-2 sm:gap-6 border-b h-[80px] px-4 sm:px-6">
      <ArrowButton onClick={onClickPrevBtn} icon={<Icons.ChevronLeft />} />
      <div className="h-full flex-1 text-indigo-500 flex gap-4 items-center justify-center">
        <span className="text-lg sm:text-2xl font-bold uppercase">{curDate.format('dddd')}</span>
        <span className="sm:text-xl">{curDate.format('MMMM DD')}th</span>
      </div>
      <ArrowButton onClick={onClickNextBtn} icon={<Icons.ChevronRight />} />
    </div>
  );
}

function ArrowButton({ icon, onClick }: { icon: ReactNode; onClick: () => void }) {
  const isMobile = useIsMobile();
  return (
    <button
      className={classNames(
        'cursor-pointer rounded-full flex items-center justify-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] text-indigo-500 transition ease-in-out duration-150 active:bg-indigo-700 active:text-white',
        isMobile ? '' : 'hover:text-white hover:bg-indigo-500',
      )}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
