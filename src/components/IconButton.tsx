import { ReactNode } from 'react';
import classNames from 'classnames';
import { useIsMobile } from '@/hooks';

interface TProps {
  onClick?: () => void;
  disabled?: boolean;
  icon: ReactNode;
}

export default function IconButton({ icon, onClick, disabled = false }: TProps) {
  const isMobile = useIsMobile();
  return (
    <button
      className={classNames(
        'p-2 rounded transition ease-in-out duration-150',
        disabled
          ? 'cursor-not-allowed text-gray-400'
          : `cursor-pointer ${isMobile ? '' : 'hover:text-indigo-500'} active:bg-gray-200`,
        isMobile ? '' : 'hover:bg-gray-100',
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}
