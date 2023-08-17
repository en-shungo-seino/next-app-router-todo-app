import type { Task } from '@/types';

import { Todo } from '@/app/components/Todo';

type TodoListProps = {
  tasks: Task[];
};

export const TodoList = (props: TodoListProps) => {
  const { tasks } = props;
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <Todo key={task.id} task={task} />
      ))}
    </ul>
  );
};
