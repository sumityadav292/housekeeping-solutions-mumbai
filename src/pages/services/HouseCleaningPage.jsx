import {
  FiCheckCircle,
  FiHome,
  FiShield,
  FiClock,
  FiDroplet,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";

function HouseCleaningPage() {
  const cleaningFeatures = [
    {
      icon: <FiHome />,
      title: "Complete Home Cleaning",
      text: "Professional cleaning support for bedrooms, living areas, kitchens and other home spaces.",
    },
    {
      icon: <FiDroplet />,
      title: "Detailed Cleaning",
      text: "Careful attention to surfaces, floors and frequently used areas for a cleaner environment.",
    },
    {
      icon: <FiShield />,
      title: "Hygiene Focused",
      text: "A professional cleaning approach focused on hygiene, freshness and everyday cleanliness.",
    },
    {
      icon: <FiClock />,
      title: "Flexible Scheduling",
      text: "Cleaning support that can be planned around your preferred schedule and requirements.",
    },
  ];

  const cleaningServices = [
    "Living room cleaning",
    "Bedroom cleaning",
    "Kitchen cleaning",
    "Bathroom cleaning",
    "Floor and surface cleaning",
    "General home cleaning",
  ];

  const process = [
    {
      number: "01",
      title: "Tell Us Your Requirement",
      text: "Share details about your home and the type of cleaning support you require.",
    },
    {
      number: "02",
      title: "Plan Your Cleaning",
      text: "Discuss the areas, cleaning requirements and convenient service schedule.",
    },
    {
      number: "03",
      title: "Enjoy A Cleaner Home",
      text: "Our professionals take care of the cleaning while you enjoy a fresher and more comfortable space.",
    },
  ];

  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero house-cleaning-hero">
        <div className="service-detail-overlay"></div>

        <div className="container service-detail-hero-content">

          <div className="service-breadcrumb">
            <a href="/">Home</a>
            <span>→</span>
            <a href="/services">Services</a>
            <span>→</span>
            <strong>House Cleaning</strong>
          </div>

          <p className="service-detail-tag">
            <span></span>
            PROFESSIONAL HOUSE CLEANING SERVICES
          </p>

          <h1>
            A Cleaner Home.
            <br />
            <span>A Better Everyday Life.</span>
          </h1>

          <p className="service-detail-hero-text">
            Reliable house cleaning services designed to keep your home
            clean, fresh, comfortable and well maintained.
          </p>

          <div className="service-detail-buttons">
            <a href="/contact" className="service-primary-button">
              Get A Free Quote
              <FiArrowRight />
            </a>

            <a href="#cleaning-overview" className="service-secondary-button">
              Explore Service
            </a>
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section
        className="service-detail-overview"
        id="cleaning-overview"
      >
        <div className="container service-overview-grid">

          <div className="service-overview-image">
            <div className="service-image-card">
              <img
                src="/images/clea.jpg"
                alt="Professional house cleaning service"
              />
            </div>

            <div className="service-rating-card">
              <FiStar />

              <div>
                <strong>Clean & Comfortable</strong>
                <span>Professional Home Cleaning</span>
              </div>
            </div>
          </div>

          <div className="service-overview-content">

            <p className="section-tag">
              <span></span>
              HOUSE CLEANING
            </p>

            <h2>
              Give Your Home A
              <span> Fresh Start</span>
            </h2>

            <p>
              A clean home creates a more comfortable and welcoming
              environment. Our house cleaning services provide professional
              support for customers who want their living spaces to remain
              clean, organized and fresh.
            </p>

            <p>
              From everyday areas to frequently used surfaces, our cleaning
              approach focuses on detail, hygiene and consistent service
              quality according to your requirements.
            </p>

            <div className="service-check-list">
              {cleaningServices.map((item, index) => (
                <div className="service-check-item" key={index}>
                  <FiCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="service-features-section">

        <div className="container">

          <div className="service-section-heading">

            <p className="section-tag">
              <span></span>
              OUR CLEANING APPROACH
            </p>

            <h2>
              Cleaning With
              <span> Care & Attention</span>
            </h2>

            <p>
              We focus on detailed cleaning, hygiene and dependable support
              to help maintain a cleaner and more comfortable home.
            </p>

          </div>

          <div className="service-features-grid">

            {cleaningFeatures.map((feature, index) => (
              <div className="service-feature-card" key={index}>

                <div className="service-feature-icon">
                  {feature.icon}
                </div>

                <span className="service-feature-number">
                  0{index + 1}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="service-process-section">

        <div className="container">

          <div className="service-section-heading centered">

            <p className="section-tag">
              <span></span>
              SIMPLE PROCESS
            </p>

            <h2>
              From Requirement
              <span> To Clean Home</span>
            </h2>

            <p>
              Our simple process makes it easy to discuss your cleaning
              requirements and arrange professional support.
            </p>

          </div>

          <div className="service-process-grid">

            {process.map((step, index) => (
              <div className="service-process-card" key={index}>

                <div className="service-process-top">
                  <span>{step.number}</span>

                  {index < process.length - 1 && (
                    <FiArrowRight className="process-arrow" />
                  )}
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="service-detail-cta">

        <div className="container">

          <div className="service-cta-box">

            <div>

              <p>LOOKING FOR HOUSE CLEANING?</p>

              <h2>
                Let Your Home Feel
                <span> Fresh Again.</span>
              </h2>

              <p className="cta-description">
                Discuss your home cleaning requirements with our team
                and choose a service that works for your space.
              </p>

            </div>

            <a href="/contact" className="service-cta-button">
              Get A Free Quote
              <FiArrowRight />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default HouseCleaningPage;