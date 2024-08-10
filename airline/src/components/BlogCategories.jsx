import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const BlogCategories = () => {
  // Create refs for each section
  const destinationRef = useRef(null);
  const generalRef = useRef(null);
  const infinityRef = useRef(null);

  // Scroll to the specific section when a category is clicked
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li onClick={() => scrollToSection(destinationRef)}>Destination Blogs</li>
            <li onClick={() => scrollToSection(generalRef)}>General Blogs</li>
            <li onClick={() => scrollToSection(infinityRef)}>Infinity Wings Blogs</li>
          </ul>
        </div>
      </aside>
      <div className="blog-content">
        <section ref={destinationRef}>
          <h2>Destination Blogs</h2>
          <div className="blog-post">
            <h3>Post Title 1</h3>
            <p>Excerpt of the first destination blog...</p>
          </div>
          <div className="blog-post">
            <h3>Post Title 2</h3>
            <p>Excerpt of the second destination blog...</p>
          </div>
          {/* Add more destination blog posts here */}
        </section>

        <section ref={generalRef}>
          <h2>General Blogs</h2>
          <div className="blog-post">
            <h3>Post Title 1</h3>
            <p>Excerpt of the first general blog...</p>
          </div>
          <div className="blog-post">
            <h3>Post Title 2</h3>
            <p>Excerpt of the second general blog...</p>
          </div>
          {/* Add more general blog posts here */}
        </section>

        <section ref={infinityRef}>
          <h2>Infinity Wings Blogs</h2>
          <div className="blog-post">
            <h3>Post Title 1</h3>
            <p>Excerpt of the first Infinity Wings blog...</p>
          </div>
          <div className="blog-post">
            <h3>Post Title 2</h3>
            <p>Excerpt of the second Infinity Wings blog...</p>
          </div>
          {/* Add more Infinity Wings blog posts here */}
        </section>
      </div>
    </div>
  );
};

export default BlogCategories;
