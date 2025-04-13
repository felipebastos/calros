export interface Task {
  id: string;
  title: string;
  description: string;
  created_at: string;
  due_by: string;
}

export type NewTask = Omit<Task, 'id'>;
