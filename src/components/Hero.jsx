function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="container hero-container">

        <div className="hero-content">

          <p className="hero-subtitle">
            PROFESSIONAL HOUSEKEEPING SERVICES
          </p>

          <h1>
            A Clean Home.
            <br />
            A Happy <span>Life.</span>
          </h1>

          <p className="hero-description">
            Professional housekeeping and cleaning services
            for homes, offices and businesses across Mumbai.
          </p>

          <div className="hero-buttons">

            <a
              href="#services"
              className="hero-primary-btn"
            >
              Explore Our Services
              <span>→</span>
            </a>

            <a
              href="#contact"
              className="hero-secondary-btn"
            >
              Get A Free Quote
            </a>

          </div>

          <div className="hero-trust">

            <div className="trust-avatars">

              <div className="trust-avatar avatar-one">
                H
              </div>

              <div className="trust-avatar avatar-two">
                S
              </div>

              <div className="trust-avatar avatar-three">
                R
              </div>

            </div>

            <div className="trust-info">

              <strong>
                Trusted by Mumbai Customers
              </strong>

              <div>
                <span className="stars">
                  ★★★★★
                </span>

                <span className="rating">
                  4.8/5
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;