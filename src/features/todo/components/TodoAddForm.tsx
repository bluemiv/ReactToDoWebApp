import { useState } from 'react';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type TFormParams = {
  todo: string;
};

const schema = yup
  .object({
    todo: yup.string().required(),
  })
  .required();

export default function TodoAddForm() {
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormParams>({ resolver: yupResolver(schema) });

  const onSubmit = async (formParams: TFormParams) => {
    if (isSubmit) return;
    setIsSubmit(true);
    // TODO 항목 저장
    console.log(formParams);

    setIsSubmit(false);
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
          disabled={isSubmit}
        />
        <button
          className={classNames(
            'rounded-full w-[120px] h-[60px] text-white transition duration-100 ease-in-out',
            isSubmit
              ? 'cursor-not-allowed bg-gray-400'
              : 'cursor-pointer bg-indigo-500 hover:bg-indigo-500 active:bg-indigo-600',
          )}
          disabled={isSubmit}
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
