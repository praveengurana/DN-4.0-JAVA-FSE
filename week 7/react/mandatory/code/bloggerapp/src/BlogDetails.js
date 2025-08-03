import React from 'react';

function BlogDetails() {
  const blogs = [
    {
      title: 'React Learning',
      author: 'Stephen Biz',
      description: 'Welcome to learning React!',
    },
    {
      title: 'Installation',
      author: 'Schwezdenier',
      description: 'You can install React from npm.',
    }
  ];

  return (
    <div className="section">
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <strong>{blog.title}</strong><br />
          <b>{blog.author}</b><br />
          {blog.description}
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;
