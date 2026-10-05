import {
  FiCheckCircle,
  FiUsers,
  FiShield,
  FiClock,
  FiHome,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

function HousekeepingPage() {
  const features = [
    {
      icon: <FiHome />,
      title: "Residential Housekeeping",
      text: "Professional housekeeping support to keep homes clean, organized and comfortable.",
    },
    {
      icon: <FiUsers />,
      title: "Trained Professionals",
      text: "Responsible staff focused on cleanliness, presentation and customer requirements.",
    },
    {
      icon: <FiShield />,
      title: "Safe & Reliable",
      text: "A professional approach with attention to hygiene, safety and service quality.",
    },
    {
      icon: <FiClock />,
      title: "Flexible Support",
      text: "Service support designed around your schedule and housekeeping requirements.",
    },
  ];

  const services = [
    "Daily housekeeping support",
    "Regular home cleaning assistance",
    "Office housekeeping support",
    "Commercial housekeeping services",
    "Cleaning and organization support",
    "Routine maintenance assistance",
  ];

  const process = [
    {
      number: "01",
      title: "Share Your Requirement",
      text: "Tell us about your home, office or commercial housekeeping requirements.",
    },
    {
      number: "02",
      title: "Choose Your Service",
      text: "Discuss the type and schedule of housekeeping support that suits your needs.",
    },
    {
      number: "03",
      title: "Professional Support",
      text: "Our team provides housekeeping assistance with focus on cleanliness and reliability.",
    },
  ];

  return (
    <main className="service-detail-page">

      {/* =================================
          HERO
      ================================= */}
      <section className="service-detail-hero housekeeping-hero">
        <div className="service-detail-overlay"></div>

        <div className="container service-detail-hero-content">

          <div className="service-breadcrumb">
            <a href="/">Home</a>
            <span>→</span>
            <a href="/services">Services</a>
            <span>→</span>
            <strong>Housekeeping</strong>
          </div>

          <p className="service-detail-tag">
            <span></span>
            PROFESSIONAL HOUSEKEEPING SERVICES
          </p>

          <h1>
            Reliable Housekeeping
            <br />
            <span>For Cleaner Spaces.</span>
          </h1>

          <p className="service-detail-hero-text">
            Professional housekeeping support for homes, offices and
            commercial spaces across Mumbai, designed to make everyday
            cleaning and maintenance easier.
          </p>

          <div className="service-detail-buttons">
            <a href="/contact" className="service-primary-button">
              Get A Free Quote
              <FiArrowRight />
            </a>

            <a href="#service-overview" className="service-secondary-button">
              Explore Service
            </a>
          </div>

        </div>
      </section>

      {/* =================================
          OVERVIEW
      ================================= */}
      <section
        className="service-detail-overview"
        id="service-overview"
      >
        <div className="container service-overview-grid">

          <div className="service-overview-image">
            <div className="service-image-card">
              <img
                src="/images/logo.jpeg"
                alt="Professional housekeeping service"
              />
            </div>

            <div className="service-rating-card">
              <FiStar />
              <div>
                <strong>Professional Support</strong>
                <span>Housekeeping Services</span>
              </div>
            </div>
          </div>

          <div className="service-overview-content">

            <p className="section-tag">
              <span></span>
              HOUSEKEEPING SERVICES
            </p>

            <h2>
              A Cleaner Space Starts With
              <span> Professional Support</span>
            </h2>

            <p>
              Maintaining a clean and organized space takes time, consistency
              and attention to detail. Our professional housekeeping services
              are designed to provide dependable support for homes, offices,
              commercial spaces and businesses.
            </p>

            <p>
              We understand that every customer has different requirements.
              Whether you need regular housekeeping assistance, office
              support or general cleaning and organization, our service
              approach is built around your specific needs.
            </p>

            <div className="service-check-list">
              {services.map((item, index) => (
                <div className="service-check-item" key={index}>
                  <FiCheckCircle />
                  <span>{item}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* =================================
          FEATURES
      ================================= */}
      <section className="service-features-section">

        <div className="container">

          <div className="service-section-heading">

            <p className="section-tag">
              <span></span>
              WHY OUR SERVICE
            </p>

            <h2>
              Professional Support With
              <span> Quality At Its Core</span>
            </h2>

            <p>
              We focus on reliable service, responsible staff and a
              professional approach to everyday housekeeping requirements.
            </p>

          </div>

          <div className="service-features-grid">

            {features.map((feature, index) => (
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

      {/* =================================
          PROCESS
      ================================= */}
      <section className="service-process-section">

        <div className="container">

          <div className="service-section-heading centered">

            <p className="section-tag">
              <span></span>
              HOW IT WORKS
            </p>

            <h2>
              Simple Process.
              <span> Reliable Support.</span>
            </h2>

            <p>
              Getting professional housekeeping support can be simple.
              Discuss your requirement and let our team take care of the rest.
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

      {/* =================================
          CTA
      ================================= */}
      <section className="service-detail-cta">

        <div className="container">

          <div className="service-cta-box">

            <div>
              <p>NEED HOUSEKEEPING SUPPORT?</p>

              <h2>
                Let's Keep Your Space
                <span> Clean & Organized.</span>
              </h2>

              <p>
                Tell us about your housekeeping requirements and discuss
                a suitable service for your home or business.
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

export default HousekeepingPage;