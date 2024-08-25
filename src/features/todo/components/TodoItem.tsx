import { useState } from 'react';
import classNames from 'classnames';
import { TodoCheckBox, TodoState, TTodo, useCompleteTodo, useModifyTodo } from '@/features/todo';
import { Icons } from '@/components';

interface TProps {
  todo: TTodo;
}

export default function TodoItem({ todo }: TProps) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [input, setInput] = useState<string>(todo.todo);

  const completeTodo = useCompleteTodo();
  const modifyTodo = useModifyTodo();

  const toggleEditMode = () => setIsEditMode(!isEditMode);

  const diabledEditButton = isEditMode && !input;
  const isCompleted = todo.state === TodoState.completed;
  return (
    <div className="flex items-center gap-4 h-[60px]">
      <TodoCheckBox
        onClick={() => completeTodo({ id: todo.id, isCompleted: !isCompleted })}
        isCompleted={isCompleted}
      />
      <div className="flex-1">
        {isEditMode ? (
          <input
            className="w-full outline-none px-6 py-2 rounded-full bg-gray-100"
            value={input}
            onChange={(e) => {
              const nextInput = e.target.value.trim();
              setInput(nextInput);
            }}
            placeholder="내용을 입력해주세요"
          />
        ) : (
          <div className={isCompleted ? 'line-through text-gray-500 italic' : ''}>{todo.todo}</div>
        )}
      </div>
      <div>
        <button
          className={classNames(
            'hover:bg-gray-100 p-2 rounded transition ease-in-out duration-150',
            diabledEditButton
              ? 'cursor-not-allowed text-gray-400'
              : 'cursor-pointer hover:text-indigo-500 active:bg-gray-200',
          )}
          onClick={() => {
            toggleEditMode();
            if (isEditMode && !!input) {
              modifyTodo({ id: todo.id, todo: input });
            }
          }}
          disabled={diabledEditButton}
        >
          {isEditMode ? <Icons.Send /> : <Icons.Pencil />}
        </button>
      </div>
      <div className="text-xs text-gray-500 text-right flex flex-col gap-1">
        <div>Updated At</div>
        <div>{todo.updated}</div>
      </div>
    </div>
  );
}
