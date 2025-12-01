import type { Bookmark, CreateBookmark } from "../types/index";

const STORAGE_KEY = 'bookmarks';

export const getBookmarks = (): Bookmark[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  };
};

export const saveBookmark = (bookmarks: Bookmark[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
  } catch (error) {
    console.error('Failed to save bookmarks to localStorage:', error);
  };
};

export const addBookmark = (bookmark: CreateBookmark): Bookmark => {
  const bookmarks = getBookmarks();
  const newBookmark: Bookmark = {
    ...bookmark,
    id: crypto.randomUUID(),
    important: bookmark.important ?? false,
    createdAt: new Date().toISOString(),
  };
  saveBookmark([...bookmarks, newBookmark]);
  return newBookmark;
};

export const deleteBoomark = (id: string) => {
  const bookmarks = getBookmarks();
  const updateBookmarks = bookmarks.filter(bookmark => bookmark.id != id);
  saveBookmark(updateBookmarks);
  return updateBookmarks;
};