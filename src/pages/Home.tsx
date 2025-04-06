import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';

const Home: React.FC = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to DevBlog
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Exploring the world of web development, one post at a time.
          </p>
          <Link
            to="/blog"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50"
          >
            Read Our Blog
          </Link>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;