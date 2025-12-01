export interface Bookmark {
  id: string;
  title?: string;
  url: string;
  important: boolean;
  createdAt: string;
}

export interface CreateBookmark {
  title?: string;
  url: string;
  important?: boolean;
}