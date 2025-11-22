export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string; // ISO 8601 형식
}

export interface CreateTodoInput {
  title: string;
  description?: string;
  completed?: boolean;
}

export interface TodoStats {
  total: number;
  completed: number;
  pending: number;
}
