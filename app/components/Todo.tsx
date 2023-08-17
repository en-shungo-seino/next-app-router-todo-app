import type { Task } from '@/types';

type TodoProps = {
  task: Task;
};
export const Todo = (props: TodoProps) => {
  const { task } = props;
  return (
    <li
      key={task.id}
      className="flex justify-between rounded border-l-4 border-gray-400 bg-white p-4 shadow-md"
    >
      <span>{task.title}</span>
      <div>
        <button className="mr-3 text-green-400">Edit</button>
        <button className="text-red-400">Delete</button>
      </div>
    </li>
  );
};
