import { ReactNode } from 'react';
import { TPropsWithChildren } from '@/types';

interface TProps {
  header: ReactNode;
  footer: ReactNode;
}

export default function TodoCard({ header, footer, children }: TPropsWithChildren<TProps>) {
  return (
    <div className="shadow-2xl rounded-3xl bg-white m-auto w-[95vw] h-[80vh] md:w-[720px] flex flex-col">
      <div className="p-6 border-b">{header}</div>
      <div className="flex-1 p-6">{children}</div>
      <div className="p-6 border-t">{footer}</div>
    </div>
  );
}
