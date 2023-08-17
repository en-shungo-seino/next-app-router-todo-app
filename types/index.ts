export type Task = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  pageInfo?: PageInfoType;
};
export type PageInfoType = {
  current_page: number;
  prev_page?: number | null;
  next_page?: number | null;
  last_page: number;
};
