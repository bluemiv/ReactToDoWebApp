import { ReactNode } from 'react';
import classNames from 'classnames';
import { TPropsWithComponent } from '@/types';
import { Title } from '@/components';

interface TProps {
  title?: ReactNode;
  footer?: ReactNode;
}

export default function Card({ title, footer, className, children }: TPropsWithComponent<TProps>) {
  return (
    <div className={classNames('bg-white rounded-lg shadow-lg flex flex-col', className)}>
      {!!title && <Title className="p-6">{title}</Title>}
      <div className="p-6 flex-1">{children}</div>
      {!!footer && <div className="p-6">{footer}</div>}
    </div>
  );
}
