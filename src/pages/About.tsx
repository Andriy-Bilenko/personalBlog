import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&h=400&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600">Senior Software Engineer</p>
          </div>

          <div className="prose max-w-none">
            <p className="mb-6">
              Hi there! I'm a passionate software engineer with over 8 years of experience
              in web development. I specialize in React, TypeScript, and modern web
              technologies. Through this blog, I share my knowledge and experiences
              with the developer community.
            </p>

            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <ul className="list-disc list-inside mb-6">
              <li>Senior Software Engineer at Tech Corp (2020-Present)</li>
              <li>Full Stack Developer at Web Solutions Inc (2018-2020)</li>
              <li>Frontend Developer at Digital Agency (2016-2018)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS', 'Docker'].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:john@example.com"
                className="text-gray-600 hover:text-gray-900"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;