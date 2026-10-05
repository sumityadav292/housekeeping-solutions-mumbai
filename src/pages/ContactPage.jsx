import {
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiSend,
} from "react-icons/fi";

function ContactPage() {
  return (
    <main className="contact-page">

      {/* HERO */}
      <section className="contact-page-hero">
        <div className="contact-page-overlay"></div>

        <div className="container contact-page-hero-content">

          <p className="contact-page-tag">
            <span></span>
            GET IN TOUCH
          </p>

          <h1>
            Let's Talk About
            <br />
            <span>Your Service Needs.</span>
          </h1>

          <p>
            Looking for professional housekeeping, cleaning or facility
            support services in Mumbai? Get in touch with our team and
            discuss your requirements.
          </p>

        </div>
      </section>


      {/* CONTACT INFO */}
      <section className="contact-info-section">

        <div className="container">

          <div className="contact-section-heading">

            <p className="section-tag">
              <span></span>
              CONTACT US
            </p>

            <h2>
              We're Here To
              <span> Help You</span>
            </h2>

            <p>
              Have a question or need a service quotation? Contact us
              using the enquiry form below.
            </p>

          </div>


          <div className="contact-info-grid">

            {/* LOCATION */}
            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FiMapPin />
              </div>

              <div>
                <span>OUR LOCATION</span>
                <h3>Mumbai</h3>
                <p>Goregaon West, Mumbai</p>
              </div>

              <FiArrowRight className="contact-card-arrow" />

            </div>


            {/* SERVICE SUPPORT */}
            <div className="contact-info-card">

              <div className="contact-info-icon">
                <FiClock />
              </div>

              <div>
                <span>SERVICE SUPPORT</span>
                <h3>Flexible Support</h3>
                <p>Discuss your requirements with us</p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* FORM + ADDRESS */}
      <section className="contact-main-section">

        <div className="container contact-main-grid">


          {/* FORM */}
          <div className="contact-form-box">

            <p className="section-tag">
              <span></span>
              SEND AN ENQUIRY
            </p>

            <h2>
              Tell Us What
              <span> You Need</span>
            </h2>

            <p className="contact-form-intro">
              Fill in your details and service requirement. Our team
              can get in touch with you to discuss the next steps.
            </p>


            <form
              className="contact-page-form"
              onSubmit={(e) => e.preventDefault()}
            >

              <div className="contact-form-row">

                {/* NAME */}
                <div className="contact-input-group">

                  <label>Your Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                  />

                </div>


                {/* CUSTOMER PHONE */}
                <div className="contact-input-group">

                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                  />

                </div>

              </div>


              {/* SERVICE */}
              <div className="contact-input-group">

                <label>Service Required</label>

                <select defaultValue="">

                  <option value="" disabled>
                    Select a service
                  </option>

                  <option>
                    Housekeeping Services
                  </option>

                  <option>
                    House Cleaning
                  </option>

                  <option>
                    Office Boy Services
                  </option>

                  <option>
                    Pantry Boy Services
                  </option>

                  <option>
                    Facility Management
                  </option>

                  <option>
                    Deep Cleaning
                  </option>

                </select>

              </div>


              {/* MESSAGE */}
              <div className="contact-input-group">

                <label>Your Message</label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your requirement..."
                ></textarea>

              </div>


              {/* SUBMIT */}
              <button
                type="submit"
                className="contact-submit-btn"
              >
                Send Enquiry
                <FiSend />
              </button>

            </form>

          </div>


          {/* ADDRESS */}
          <div className="contact-location-box">

            <div className="contact-location-card">

              <div className="contact-location-icon">
                <FiMapPin />
              </div>

              <p>VISIT US</p>

              <h3>
                Housekeeping Solutions Mumbai
              </h3>

              <span>
                Shop No, 95, Motilal Nagar No. 1,
                near Masjid, Best Nagar,
                Goregaon West,
                Mumbai, Maharashtra 400104
              </span>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+No+95+Motilal+Nagar+No+1+near+Masjid+Best+Nagar+Goregaon+West+Mumbai+Maharashtra+400104"
                target="_blank"
                rel="noreferrer"
                className="contact-direction-btn"
              >
                Get Directions
                <FiArrowRight />
              </a>

            </div>


            {/* QUICK HELP */}
            <div className="contact-help-card">

              <div>
                <FiMapPin />
              </div>

              <p>OUR LOCATION</p>

              <h3>
                Visit Our Office
              </h3>

              <span>
                Our team is available to discuss your housekeeping,
                cleaning and facility service requirements.
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* MAP */}
      <section className="contact-map-section">

        <div className="container">

          <div className="contact-map-heading">

            <div>

              <p className="section-tag">
                <span></span>
                FIND US
              </p>

              <h2>
                Our Location In
                <span> Mumbai</span>
              </h2>

            </div>

            <p>
              Visit us at our Goregaon West location or contact our
              team before visiting.
            </p>

          </div>


          <div className="contact-map-wrapper">

            <iframe
              title="Housekeeping Solutions Mumbai Location"
              src="https://www.google.com/maps?q=Shop+No+95+Motilal+Nagar+No+1+near+Masjid+Best+Nagar+Goregaon+West+Mumbai+Maharashtra+400104&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="contact-bottom-cta">

        <div className="container">

          <div className="contact-bottom-box">

            <div>

              <p>
                HOUSEKEEPING SOLUTIONS MUMBAI
              </p>

              <h2>
                Need Professional
                <span> Service Support?</span>
              </h2>

              <p>
                Tell us about your requirement and let's discuss a
                suitable solution for your home, office or business.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default ContactPage;