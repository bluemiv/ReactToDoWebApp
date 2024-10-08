import classNames from 'classnames';
import { Icons } from '@/components';

interface TProps {
  isCompleted?: boolean;
  onClick?: () => void;
}

export default function TodoCheckBox({ isCompleted = false, onClick }: TProps) {
  return (
    <button
      className={classNames(
        'flex items-center justify-center text-white ㅜㅐcursor-pointer border border-indigo-300 w-[20px] h-[20px] sm:w-[26px] sm:h-[26px]',
        isCompleted ? 'bg-indigo-300' : '',
      )}
      onClick={onClick}
    >
      {isCompleted && <Icons.Check />}
    </button>
  );
}
