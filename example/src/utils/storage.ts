import type { Todo, CreateTodoInput, TodoStats } from '../types';

const STORAGE_KEY = 'todos';

export const getTodos = (): Todo[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to load todos from localStorage:', error);
    return [];
  }
};

export const saveTodos = (todos: Todo[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Failed to save todos to localStorage:', error);
    throw new Error('할 일 저장에 실패했습니다. 저장 공간을 확인해주세요.');
  }
};

export const addTodo = (todo: CreateTodoInput): Todo => {
  const todos = getTodos();
  const newTodo: Todo = {
    ...todo,
    id: crypto.randomUUID(),
    completed: todo.completed ?? false,
    createdAt: new Date().toISOString(),
  };
  saveTodos([...todos, newTodo]);
  return newTodo;
};

export const deleteTodo = (id: string): Todo[] => {
  const todos = getTodos();
  const updatedTodos = todos.filter(todo => todo.id !== id);
  saveTodos(updatedTodos);
  return updatedTodos;
};

export const updateTodo = (id: string, updates: Partial<Todo>): Todo[] => {
  const todos = getTodos();
  const updatedTodos = todos.map(todo =>
    todo.id === id ? { ...todo, ...updates } : todo
  );
  saveTodos(updatedTodos);
  return updatedTodos;
};

export const calculateStats = (todos: Todo[]): TodoStats => {
  const completed = todos.filter(t => t.completed).length;
  return {
    total: todos.length,
    completed,
    pending: todos.length - completed,
  };
};
