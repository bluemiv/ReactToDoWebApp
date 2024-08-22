import classNames from 'classnames';
import { TPropsWithComponent } from '@/types';

export default function Title({ children, className }: TPropsWithComponent) {
  return <h1 className={classNames('font-bold text-xl', className)}>{children}</h1>;
}
