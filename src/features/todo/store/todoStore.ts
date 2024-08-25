import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import dayjs, { Dayjs } from 'dayjs';
import { TodoFilterValue } from '@/features/todo';

interface TTodoState {
  filter: TodoFilterValue;
  setFilter: (filter: TodoFilterValue) => void;
  curDate: Dayjs;
  setCurDate: (curDate: Dayjs) => void;
}

const useTodoStore = create<TTodoState>()(
  devtools((set) => ({
    filter: TodoFilterValue.all,
    setFilter: (filter) => set(() => ({ filter })),
    curDate: dayjs(),
    setCurDate: (curDate) => set(() => ({ curDate })),
  })),
);

export const useTodoDateStore = () =>
  useTodoStore(({ curDate, setCurDate }) => ({ curDate, setCurDate }));

export const useTodoFilterStore = () =>
  useTodoStore(({ filter, setFilter }) => ({ filter, setFilter }));
