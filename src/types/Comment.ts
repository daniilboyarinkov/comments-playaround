export interface Comment {
  id: string;
  author: string;
  content?: string;
  likes: number;
  replies: Comment[];
}
