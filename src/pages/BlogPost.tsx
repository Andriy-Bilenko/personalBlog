import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import CodeBlock from '../components/CodeBlock';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-2xl text-gray-600">Post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="container mx-auto px-6 max-w-4xl">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
        <div className="prose prose-lg max-w-none">
          <div className="flex items-center mb-8">
            <span className="text-gray-500">{post.date}</span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-blue-600">{post.category}</span>
          </div>
          <h1 className="text-4xl font-bold mb-8 text-gray-800">{post.title}</h1>
          <div className="text-gray-700 space-y-4">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          {post.codeSnippets?.map((snippet, index) => (
            <CodeBlock
              key={index}
              language={snippet.language}
              code={snippet.code}
            />
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;