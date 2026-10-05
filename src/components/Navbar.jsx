import { FiPhone, FiMenu, FiChevronDown } from "react-icons/fi";

function Navbar() {
  return (
    <>
      {/* Top Information Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">

          <p>
            Professional Housekeeping & Facility Services in Mumbai
          </p>

          <div className="top-bar-right">
            <span>Mon - Sun: 24/7 Service</span>
            <span>•</span>
            <span>Quick Response</span>
          </div>

        </div>
      </div>


      {/* Main Navbar */}
      <header className="navbar">

        <div className="container navbar-container">

          {/* Logo + Brand */}
          <a href="#home" className="brand">

            <div className="logo">
              <img
                src="/images/logo.jpeg"
                alt="Housekeeping Solutions Mumbai"
              />
            </div>

            <div className="brand-text">
              <h2>
                Housekeeping Solutions
              </h2>

              <span>
                MUMBAI
              </span>
            </div>

          </a>


          {/* Desktop Navigation */}
          <nav className="nav-links">

            <a href="/" className="active">
              Home
            </a>

            <a href="/about">
              About Us
            </a>


            {/* Services Dropdown */}
            <div className="nav-dropdown">

              <a href="/services">
                Services
                <FiChevronDown />
              </a>

              <div className="dropdown-menu">

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

            </div>


            <a href="/why-us">
              Why Us
            </a>

            <a href="/contact">
              Contact
            </a>

          </nav>


          {/* Right Side */}
          <div className="navbar-right">

            


            {/* Quote Button */}
            <a
              href="/contact"
              className="quote-btn"
            >
              Get A Quote
              <span>→</span>
            </a>

          </div>


          {/* Mobile Menu */}
          <button
            className="mobile-menu"
            aria-label="Open menu"
          >
            <FiMenu />
          </button>

        </div>

      </header>
    </>
  );
}

export default Navbar;