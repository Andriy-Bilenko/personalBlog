import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    date: '2024-03-15',
    excerpt: 'Learn how to set up a new React project with TypeScript and best practices for type safety.',
    content: `
      TypeScript has become an essential tool in modern React development. It provides type safety, better IDE support, and catches errors before they reach production.

      In this comprehensive guide, we'll explore how to set up a new React project with TypeScript, understand the key concepts, and implement best practices for type safety.
      
      First, let's understand why TypeScript is beneficial for React development:
      
      1. Static Type Checking
      2. Better IDE Support
      3. Enhanced Code Documentation
      4. Improved Team Collaboration
      
      Let's dive into some practical examples and see how TypeScript can improve our React components.
    `,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80',
    category: 'Development',
    codeSnippets: [
      {
        language: 'typescript',
        code: `interface Props {
  name: string;
  age: number;
  isActive?: boolean;
}

const UserProfile: React.FC<Props> = ({ name, age, isActive = false }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};`
      }
    ]
  },
  {
    id: '2',
    title: 'Advanced State Management in React',
    date: '2024-03-14',
    excerpt: 'Deep dive into modern state management techniques in React applications.',
    content: `
      State management is a crucial aspect of any React application. As applications grow in complexity, managing state effectively becomes increasingly important.
      
      In this article, we'll explore various state management techniques, from built-in React hooks to external state management libraries.
      
      Key topics we'll cover:
      
      1. useState and useReducer hooks
      2. Context API for global state
      3. Performance optimization techniques
      4. State management patterns and best practices
      
      Let's explore each of these topics in detail and see how they can be applied in real-world scenarios.
    `,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    category: 'Development',
    codeSnippets: [
      {
        language: 'typescript',
        code: `import { useReducer } from 'react';

interface State {
  count: number;
  isLoading: boolean;
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'SET_LOADING'; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};`
      }
    ]
  }
];