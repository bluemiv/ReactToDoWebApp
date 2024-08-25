import { ReactNode } from 'react';
import classNames from 'classnames';

interface TProps {
  onClick?: () => void;
  disabled?: boolean;
  icon: ReactNode;
}

export default function IconButton({ icon, onClick, disabled = false }: TProps) {
  return (
    <button
      className={classNames(
        'hover:bg-gray-100 p-2 rounded transition ease-in-out duration-150',
        disabled
          ? 'cursor-not-allowed text-gray-400'
          : 'cursor-pointer hover:text-indigo-500 active:bg-gray-200',
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}
