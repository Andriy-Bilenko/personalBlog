export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  codeSnippets?: Array<{
    language: string;
    code: string;
  }>;
}