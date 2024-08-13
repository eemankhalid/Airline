import React, { useRef } from 'react';
import Hero2 from '../components/Hero2';
import img from '../assets/img/blog1.jpg';

const BlogCategories = () => {
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
      <Hero2 pageName="OUR BLOGS" image={img} />

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
            <h2 style={{ color: 'black' }}>Destination Blogs</h2>

            <div className="blog-row">
              <div className="blog-post card">
                <div className="card-image">
                  <img src="src/assets/img/blog2.jpeg" alt="Destination Post 1" />
                </div>
                <div className="card-content">
                  <h4>Discover Stunning Destinations</h4>
                  <div className="underline"></div>
                  <p>Discover the world's most stunning destinations, where adventure meets tranquility. Whether you're seeking the thrill of new experiences or the calm of secluded getaways.</p>
                </div>
              </div>
              <div className="blog-post card">
                <div className="card-image" >
                  <img src="src/assets/img/blog3.jpeg" alt="Destination Post 2" />
                </div>
                <div className="card-content">
                  <h4>Unveil Hidden Gems</h4>
                  <div className="underline"></div>
                  <p>Discover lesser-known travel destinations that offer unique experiences and breathtaking beauty. From secluded beaches to charming mountain and villages. </p>
                </div>
              </div>
            </div>
          </section>

          <section ref={generalRef}>
            <h2 style={{ color: 'black' }}>General Blogs</h2>
            <div className="blog-row">
              <div className="blog-post card">
                <div className="card-image">
                  <img src="src/assets/img/blog4.jpeg" alt="General Post 1" />
                </div>
                <div className="card-content">
                  <h4>General Travel Tips</h4>
                  <div className="underline"></div>
                  <p>Enhance your travel experience with these practical tips. From packing efficiently to navigating unfamiliar cities, these essentials will help travel smarter and comfortably.</p>
                </div>
              </div>
              <div className="blog-post card">
                <div className="card-image">
                  <img src="src/assets/img/blog5.jpeg" alt="General Post 2" />
                </div>
                <div className="card-content">
                  <h4>Explore New Horizons</h4>
                  <div className="underline"></div>
                  <p>Expand your travel experiences by venturing beyond the familiar. Discover new cuisines, and landscapes that inspire growth and broaden your perspective.</p>
                </div>
              </div>
            </div>
          </section>

          <section ref={infinityRef}>
            <h2 style={{ color: 'black' }}>Infinity Wings Blogs</h2>
            <div className="blog-row">
              <div className="blog-post card">
                <div className="card-image">
                  <img src="src/assets/img/blog6.png" alt="Infinity Wings Post 1" />
                </div>
                <div className="card-content">
                  <h4>The Future of Travel</h4>
                  <div className="underline"></div>
                  <p>Explore the innovations shaping tomorrow's journeys. From cutting-edge , discover how travel is evolving to create a more connected and eco-friendly world.</p>
                </div>
              </div>
              <div className="blog-post card">
                <div className="card-image" >
                  <img src="src/assets/img/blog8.jpg" alt="Infinity Wings Post 2" />
                </div>
                <div className="card-content">
                  <h4>Innovative Experiences</h4>
                  <div className="underline"></div>
                  <p>Unlock new ways to explore the world with groundbreaking travel experiences.Innovation is transforming how we discover and enjoy our planet.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogCategories;
