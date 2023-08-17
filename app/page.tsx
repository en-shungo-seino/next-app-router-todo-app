'use client';

import { Suspense, useState } from 'react';

import type { Task } from '@/types';

import { ClientTodoList } from '@/app/components/ClientTodoList';

import { getAllClientTasks } from '@/app/api';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const getClientTasks = async () => {
    setIsClient(!isClient);
    const datas: Task[] = await getAllClientTasks();
    setTasks(datas);
  };
  return (
    <div className="p-4">
      <button
        onClick={getClientTasks}
        className="w-full rounded-md bg-slate-400 px-4 py-2 text-white transition-all duration-200 hover:scale-95 hover:bg-gray-500"
      >
        Client Get Task
      </button>
      {isClient && (
        <Suspense fallback={<div>Loading...</div>}>
          <ClientTodoList tasks={tasks} />
        </Suspense>
      )}
    </div>
  );
}
