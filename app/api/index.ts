import type { Task } from '@/types';

export const getAllTasks = async (): Promise<Task[]> => {
  const res = await fetch('http://localhost:3005/tasks', { cache: 'no-store' });
  const tasks = await res.json();
  return tasks;
};

export const getAllClientTasks = async (): Promise<Task[]> => {
  const res = await fetch('http://localhost:3005/client-tasks');
  const tasks = await res.json();
  return tasks;
};
