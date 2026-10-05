import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock
} from "react-icons/fi";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <div className="contact-heading">
          <p className="section-tag">
            <span></span>
            GET IN TOUCH
          </p>

          <h2>
            Let's Talk About
            <span> Your Requirements</span>
          </h2>

          <p>
            Need reliable housekeeping or facility support?
            Get in touch with our team and discuss your requirements.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-info">

            <div className="contact-card">
              <div className="contact-icon">
                <FiMapPin />
              </div>

              <div>
                <h3>Our Location</h3>
                <p>
                  Shop No. 95, Motilal Nagar No. 1,
                  near Masjid, Best Nagar,
                  Goregaon West, Mumbai,
                  Maharashtra 400104
                </p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FiPhone />
              </div>

              <div>
                <h3>Call Us</h3>
                <p>Contact our team for service enquiries.</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FiMail />
              </div>

              <div>
                <h3>Email Us</h3>
                <p>Send us your service requirements.</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FiClock />
              </div>

              <div>
                <h3>Service Support</h3>
                <p>Available for housekeeping and facility service enquiries.</p>
              </div>
            </div>

          </div>

          <div className="contact-form-card">

            <h3>Request A Free Quote</h3>

            <p>
              Tell us about your requirement and our team will get back to you.
            </p>

            <form>

              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your Name"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
              />

              <select defaultValue="">
                <option value="" disabled>
                  Select Service
                </option>
                <option>Housekeeping Services</option>
                <option>House Cleaning</option>
                <option>Office Boy Services</option>
                <option>Pantry Boy Services</option>
                <option>Facility Management</option>
                <option>Deep Cleaning</option>
              </select>

              <textarea
                rows="5"
                placeholder="Tell us about your requirement"
              ></textarea>

              <button type="submit">
                Send Enquiry
                <span>→</span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;