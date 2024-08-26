import { useState } from 'react';
import { TodoState, TTodo, useCompleteTodo, useModifyTodo, useRemoveTodo } from '@/features/todo';
import { IconButton, Icons } from '@/components';
import TodoCheckBox from './TodoCheckBox';

interface TProps {
  todo: TTodo;
}

export default function TodoItem({ todo }: TProps) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [nextTodo, setNextTodo] = useState<string>(todo.todo);

  const completeTodo = useCompleteTodo();
  const modifyTodo = useModifyTodo();
  const removeTodo = useRemoveTodo();

  const onClickEditButton = () => {
    setIsEditMode(true);
  };

  const onClickModifyButton = () => {
    setIsEditMode(false);
    if (!nextTodo || !nextTodo.trim() || nextTodo === todo.todo) return;
    modifyTodo({ id: todo.id, todo: nextTodo.trim() });
  };

  const onClickRemoveButton = () => {
    removeTodo({ id: todo.id });
  };

  const diabledEditButton = isEditMode && !nextTodo;
  const isCompleted = todo.state === TodoState.completed;
  return (
    <div className="flex items-center gap-2 sm:gap-4 h-[60px]">
      <TodoCheckBox
        onClick={() => completeTodo({ id: todo.id, isCompleted: !isCompleted })}
        isCompleted={isCompleted}
      />
      <div className="flex-1">
        {isEditMode ? (
          <input
            className="w-full outline-none px-4 sm:px-6 py-2 rounded-full bg-gray-100"
            value={nextTodo}
            onChange={(e) => setNextTodo(e.target.value)}
            placeholder="내용을 입력해주세요"
          />
        ) : (
          <div className={isCompleted ? 'line-through text-gray-500 italic' : ''}>{todo.todo}</div>
        )}
      </div>
      <div className="flex items-center gap-1 sm:gap-2">
        {isEditMode ? (
          <IconButton
            icon={<Icons.Send />}
            disabled={diabledEditButton}
            onClick={onClickModifyButton}
          />
        ) : (
          <IconButton icon={<Icons.Pencil />} onClick={onClickEditButton} />
        )}
        <IconButton icon={<Icons.Trash />} onClick={onClickRemoveButton} />
      </div>
      <div className="text-xs text-gray-500 text-right flex flex-col gap-1 w-[80px] sm:w-auto">
        <div>Updated At</div>
        <div>{todo.updated}</div>
      </div>
    </div>
  );
}
