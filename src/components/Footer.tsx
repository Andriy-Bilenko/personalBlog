import React, { useState } from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Footer: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_email: email,
          message: feedback,
        },
        'YOUR_PUBLIC_KEY'
      );
      setStatus('success');
      setFeedback('');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium mb-2">
                  Feedback
                </label>
                <textarea
                  id="feedback"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-medium disabled:opacity-50"
              >
                {status === 'loading' ? 'Sending...' : 'Send Feedback'}
              </button>
              {status === 'success' && (
                <p className="text-green-400">Thank you for your feedback!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="hover:text-blue-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:contact@example.com" className="hover:text-blue-400">
                <Mail className="h-6 w-6" />
              </a>
            </div>
            <div className="text-gray-400">
              <p>Email: contact@example.com</p>
              <p>Location: San Francisco, CA</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DevBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;