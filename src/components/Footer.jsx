import {
  FiMapPin,
  FiArrowUpRight,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">

            <a href="/" className="footer-logo">
              <img
                src="/images/logo.jpeg"
                alt="Housekeeping Solutions Mumbai"
              />

              <div>
                <h3>Housekeeping Solutions</h3>
                <span>MUMBAI</span>
              </div>
            </a>

            <p>
              Professional housekeeping, cleaning and facility support
              services for homes, offices and businesses across Mumbai.
            </p>

            <a
              href="/contact"
              className="footer-cta"
            >
              Get A Free Quote
              <FiArrowUpRight />
            </a>

          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">

            <h4>Quick Links</h4>

            <a href="/">Home</a>

            <a href="/about">
              About Us
            </a>

            <a href="/#services">
              Services
            </a>

            <a href="/why-us">
              Why Choose Us
            </a>

            <a href="/contact">
              Contact
            </a>

          </div>


          {/* SERVICES */}
          <div className="footer-column">

            <h4>Our Services</h4>

            <a href="/services/housekeeping">
              Housekeeping Services
            </a>

            <a href="/services/house-cleaning">
              House Cleaning
            </a>

            <a href="/services/office-boy">
              Office Boy Services
            </a>

            <a href="/services/pantry-boy">
              Pantry Boy Services
            </a>

            <a href="/services/facility-management">
              Facility Management
            </a>

          </div>


          {/* LOCATION */}
          <div className="footer-column footer-location">

            <h4>Our Location</h4>

            <div className="footer-address">

              <FiMapPin />

              <p>
                Shop No. 95, Motilal Nagar No. 1,
                near Masjid, Best Nagar,
                Goregaon West, Mumbai,
                Maharashtra 400104
              </p>

            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Shop%20No.%2095%2C%20Motilal%20Nagar%20No.%201%2C%20near%20Masjid%2C%20Best%20Nagar%2C%20Goregaon%20West%2C%20Mumbai%2C%20Maharashtra%20400104"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-link"
            >
              View On Google Maps
              <FiArrowUpRight />
            </a>

          </div>

        </div>


        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">

          <p>
            © 2026 Housekeeping Solutions Mumbai. All rights reserved.
          </p>

          <div>

            <a href="/">
              Privacy Policy
            </a>

            <a href="/">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;