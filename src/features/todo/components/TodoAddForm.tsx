import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import dayjs from 'dayjs';
import { yupResolver } from '@hookform/resolvers/yup';
import { TodoState, TTodo, useTodoDateStore, useTodoStore } from '@/features/todo';
import { DATE_FORMAT } from '@/constants';

type TFormParams = {
  todo: string;
};

const schema = yup
  .object({
    todo: yup.string().required(),
  })
  .required();

export default function TodoAddForm() {
  const { curDate } = useTodoDateStore();
  const { todoInfo, setTodoInfo } = useTodoStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TFormParams>({ resolver: yupResolver(schema) });

  const onSubmit = async (formParams: TFormParams) => {
    const todo = formParams.todo.trim();
    const todoItem: TTodo = {
      todo,
      id: dayjs().unix(),
      state: TodoState.normal,
      created: dayjs().format(DATE_FORMAT.FULL_DATE),
      updated: dayjs().format(DATE_FORMAT.FULL_DATE),
    };

    const targetDate = curDate.format(DATE_FORMAT.DATE);
    const nextTodoInfo = {
      ...todoInfo,
    };
    if (!nextTodoInfo?.[targetDate]) {
      nextTodoInfo[targetDate] = [todoItem];
    } else {
      nextTodoInfo[targetDate] = [...nextTodoInfo[targetDate], todoItem];
    }
    setTodoInfo(nextTodoInfo);
    reset();
  };

  return (
    <div className="flex flex-col gap-1">
      <form
        className="flex h-[60px] bg-gray-100 rounded-full overflow-hidden group"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          {...register('todo', { required: true })}
          placeholder="New Todo"
          className="py-2 px-6 flex-1 bg-transparent outline-none"
        />
        <button
          className={classNames(
            'rounded-full w-[120px] h-[60px] text-white transition duration-100 ease-in-out',
            'cursor-pointer bg-indigo-500 hover:bg-indigo-500 active:bg-indigo-600',
          )}
        >
          ADD
        </button>
      </form>
      {errors.todo && (
        <div className="px-6 text-red-600 text-sm line-clamp-1">{errors.todo?.message}</div>
      )}
    </div>
  );
}
