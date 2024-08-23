import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import dayjs, { Dayjs } from 'dayjs';

interface TTodoDateState {
  curDate: Dayjs;
  setCurDate: (curDate: Dayjs) => void;
}

export const useTodoDateStore = create<TTodoDateState>()(
  devtools((set) => ({
    curDate: dayjs(),
    setCurDate: (curDate) => set(() => ({ curDate })),
  })),
);
