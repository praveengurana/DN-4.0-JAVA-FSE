import React from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>React App</h1>
      <div className="container">
        <CourseDetails />
        <BookDetails />
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;
