import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';

interface Props {
  post: BlogPost;
}

const BlogCard: React.FC<Props> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-sm text-gray-500">{post.date}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-sm text-blue-600">{post.category}</span>
        </div>
        <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link
          to={`/blog/${post.id}`}
          className="text-blue-600 font-medium hover:text-blue-700"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;