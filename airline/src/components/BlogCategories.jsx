import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

const BlogCategories = () => {
  const button = <Link className="btn" to="#">Discover More</Link>;
  const img = (
    <img className="hero-image" src="src/assets/img/gt.jpg" alt="Hero Image" />
  );

  // Create refs for each section
  const destinationRef = useRef(null);
  const generalRef = useRef(null);
  const infinityRef = useRef(null);

  // Scroll to the specific section when a category is clicked
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Hero 
        img={img}
        h4="Fly Beyond Limits with Infinity Wings"
        h2="Your Journey, Our Passion" 
        p="At Infinity Wings, we prioritize your comfort and convenience. Enjoy top-notch amenities and exceptional service on every flight. Sign up for WingPoints and unlock exclusive benefits. Let's make your travel dreams a reality."
        btn={button}
      />
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
              <img src="src/assets/img/blog1.jpg" alt="Post 1" />
              <p>Excerpt of the first destination blog...</p>
            </div>
            <div className="blog-post">
              <img src="src/assets/img/post2.jpg" alt="Post 2" />
              <p>Excerpt of the second destination blog...</p>
            </div>
            {/* Add more destination blog posts here */}
          </section>

          <section ref={generalRef}>
            <h2>General Blogs</h2>
            <div className="blog-post">
              <img src="src/assets/img/post3.jpg" alt="Post 3" />
              <p>Excerpt of the first general blog...</p>
            </div>
            <div className="blog-post">
              <img src="src/assets/img/post4.jpg" alt="Post 4" />
              <p>Excerpt of the second general blog...</p>
            </div>
            {/* Add more general blog posts here */}
          </section>

          <section ref={infinityRef}>
            <h2>Infinity Wings Blogs</h2>
            <div className="blog-post">
              <img src="src/assets/img/post5.jpg" alt="Post 5" />
              <p>Excerpt of the first Infinity Wings blog...</p>
            </div>
            <div className="blog-post">
              <img src="src/assets/img/post6.jpg" alt="Post 6" />
              <p>Excerpt of the second Infinity Wings blog...</p>
            </div>
            {/* Add more Infinity Wings blog posts here */}
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogCategories;
