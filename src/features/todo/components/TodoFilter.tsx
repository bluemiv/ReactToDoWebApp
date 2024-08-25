import { useRef } from 'react';
import { TPropsWithChildren } from '@/types';
import { useTodoFilterStore } from '@/features/todo';

enum TodoFilterValue {
  all,
  normal,
  completed,
}

export default function TodoFilter() {
  const { filter, setFilter } = useTodoFilterStore();
  return (
    <div className="flex justify-end gap-4">
      <Radio
        checked={filter === TodoFilterValue.all}
        onChange={(checked) => checked && setFilter(TodoFilterValue.all)}
      >
        전체
      </Radio>
      <Radio
        checked={filter === TodoFilterValue.completed}
        onChange={(checked) => checked && setFilter(TodoFilterValue.completed)}
      >
        완료
      </Radio>
      <Radio
        checked={filter === TodoFilterValue.normal}
        onChange={(checked) => checked && setFilter(TodoFilterValue.normal)}
      >
        미완료
      </Radio>
    </div>
  );
}

function Radio({
  checked,
  children,
  onChange,
}: TPropsWithChildren<{ checked: boolean; onChange: (checked: boolean) => void }>) {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex gap-2 cursor-pointer" onClick={() => inputRef.current?.click()}>
      <input
        className="cursor-pointer"
        ref={inputRef}
        type="radio"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label className="cursor-pointer">{children}</label>
    </div>
  );
}
