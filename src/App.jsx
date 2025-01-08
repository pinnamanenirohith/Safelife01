import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  // State to manage the count of numbers
  const [countMembers, setCountMembers] = useState(0);
  const [countActivities, setCountActivities] = useState(0);
  const [countProjects, setCountProjects] = useState(0);

  // Effect to trigger the number counting effect
  useEffect(() => {
    const memberInterval = setInterval(() => {
      if (countMembers < 259) setCountMembers((prev) => prev + 1);
    }, 5);

    const activityInterval = setInterval(() => {
      if (countActivities < 53) setCountActivities((prev) => prev + 1);
    }, 10);

    const projectInterval = setInterval(() => {
      if (countProjects < 1) setCountProjects((prev) => prev + 1);
    }, 20);

    return () => {
      clearInterval(memberInterval);
      clearInterval(activityInterval);
      clearInterval(projectInterval);
    };
  }, [countMembers, countActivities, countProjects]);

  return (
    <div>
      {/* Header Section */}
      <header>
        <div className="logo-section">
          <img src="SafeLifeRoundLogo.jpg" alt="SafeLife Logo" />
          <h2 className="logo-text">SafeLife</h2>
        </div>
        <nav>
          <a href="./about.html">About Us</a>
          <a href="../events.html">Events</a>
          <a href="../projects.html">Projects</a>
          <a href="../resources.html">Resources</a>
          <a href="../contact.html">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to SafeLife</h1>
        <p>Empowering a healthier, safer, and more vibrant community</p>
        <a href="../contact.html">
          <button>Join Us Today</button>
        </a>
      </div>

      {/* About Us Section */}
      <section className="about-section" id="about">
        <h2>About SafeLife</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="about-image.webp" alt="About SafeLife" />
          </div>
          <div className="about-text">
            <p>
              SafeLife is a community-driven initiative dedicated to fostering health awareness, promoting hygiene practices, and inspiring positive lifestyle changes. Our mission is to create a sustainable and inclusive environment for personal and community growth.
            </p>
            <div className="mission-vision">
              <div>
                <h3>Our Mission</h3>
                <p>To empower individuals with the knowledge and tools to lead healthier lives.</p>
              </div>
              <div>
                <h3>Our Vision</h3>
                <p>A world where health and well-being are accessible to all.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <div className="section" id="highlights">
        <h2>Upcoming Events</h2>
        <div className="highlights">
          <div className="highlight-card">
            <h3>Health Awareness Drive</h3>
            <p>Join us on Jan 15, 2025, to raise awareness about healthy living and lifestyle.</p>
          </div>
          <div className="highlight-card">
            <h3>First Aid Workshop</h3>
            <p>Learn life-saving techniques in our hands-on workshop on Jan 25, 2025.</p>
          </div>
          <div className="highlight-card">
            <h3>Stress Management Session</h3>
            <p>Discover effective strategies to manage stress on Feb 10, 2025.</p>
          </div>
        </div>
      </div>

      {/* Number Count Section */}
          <div class="count-section">
            <div class="count-item">
             <h3>Members</h3>
              <p class="count-number">259+</p>
             </div>
          <div class="count-item">
             <h3>Events</h3>
                 <p class="count-number">53+</p>
             </div>
           <div class="count-item">
            <h3>Projects</h3>
            <p class="count-number">1</p>
          </div>
          <div class="count-item">
            <h3>Collaborations</h3>
            <p class="count-number">6+</p>
          </div>
        </div>


      {/* Newsletter Subscription */}
      <div className="section" id="newsletter">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter to receive the latest updates and health tips.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="section" id="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq">
          <div>
            <h3>What is SafeLife?</h3>
            <p>SafeLife is a community-focused organization promoting health awareness and well-being through events, workshops, and resources.</p>
          </div>
          <div>
            <h3>How can I join SafeLife?</h3>
            <p>You can become a member by signing up on our membership page. It's easy and takes only a few minutes!</p>
          </div>
          <div>
            <h3>Are events free to attend?</h3>
            <p>Most of our events are free, but some specialized workshops may have a nominal fee. Check the event details for more information.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>&copy; 2025 SafeLife. All rights reserved. Designed by Rohith Pinnamaneni.</p>
      </footer>
    </div>
  );
}

export default App;
