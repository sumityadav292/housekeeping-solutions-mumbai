import {
  FiCheckCircle,
  FiUsers,
  FiClock,
  FiShield
} from "react-icons/fi";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">

        {/* Left Content */}
        <div className="about-content">

          <p className="section-tag">
            <span></span>
            ABOUT HOUSEKEEPING SOLUTIONS
          </p>

          <h2>
            Your Trusted Partner for
            <span> Professional Facility Services</span>
          </h2>

          <p className="about-description">
            We provide reliable housekeeping, cleaning and facility support
            services for homes, offices, commercial spaces and businesses
            across Mumbai.
          </p>

          <p className="about-description secondary">
            Our trained professionals focus on cleanliness, safety and
            consistent service quality so you can focus on what matters most.
          </p>

          {/* Features */}
          <div className="about-features">

            <div className="about-feature">
              <div className="feature-icon">
                <FiUsers />
              </div>

              <div>
                <h4>Trained Professionals</h4>
                <p>Skilled and responsible staff</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                <FiClock />
              </div>

              <div>
                <h4>Timely Service</h4>
                <p>Quick and dependable support</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                <FiShield />
              </div>

              <div>
                <h4>Reliable & Safe</h4>
                <p>Professional service standards</p>
              </div>
            </div>

            <div className="about-feature">
              <div className="feature-icon">
                <FiCheckCircle />
              </div>

              <div>
                <h4>Quality Focused</h4>
                <p>Consistent cleaning quality</p>
              </div>
            </div>

          </div>

        </div>

        {/* Right Visual */}
        <div className="about-visual">

          <div className="about-image-card">
            <img
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJkap6d3Y_9yNcA21lM9n8yMjTTLYi5Ovjfbo1X00XXQ&s=10"
  alt="Professional cleaning staff"
/>
          </div>

          <div className="about-experience-card">
            <strong>24/7</strong>
            <span>Service Support</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;