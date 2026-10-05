import {
  FiSettings,
  FiUsers,
  FiShield,
  FiClock,
  FiCheckCircle,
  FiStar,
  FiArrowRight,
  FiHome,
} from "react-icons/fi";

function FacilityManagementPage() {
  const features = [
    {
      icon: <FiSettings />,
      title: "Complete Facility Support",
      text: "Professional support for managing routine facility requirements and smooth daily operations.",
    },
    {
      icon: <FiUsers />,
      title: "Professional Staff",
      text: "Responsible support staff focused on maintaining organized and well-managed workplaces.",
    },
    {
      icon: <FiShield />,
      title: "Reliable Service",
      text: "A dependable service approach focused on cleanliness, safety and consistent support.",
    },
    {
      icon: <FiClock />,
      title: "Flexible Support",
      text: "Facility support designed according to your workplace schedule and operational requirements.",
    },
  ];

  const services = [
    "Housekeeping management",
    "Office support services",
    "Pantry support",
    "Cleaning coordination",
    "Workplace maintenance support",
    "Daily facility assistance",
  ];

  const process = [
    {
      number: "01",
      title: "Share Your Requirement",
      text: "Tell us about your property, workplace and facility management requirements.",
    },
    {
      number: "02",
      title: "Plan Your Support",
      text: "We understand your requirements and discuss a suitable facility support plan.",
    },
    {
      number: "03",
      title: "Get Professional Support",
      text: "Our team provides dependable facility assistance to support smooth daily operations.",
    },
  ];

  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero facility-management-hero">
        <div className="service-detail-overlay"></div>

        <div className="container service-detail-hero-content">

          <div className="service-breadcrumb">
            <a href="/">Home</a>
            <span>→</span>
            <a href="/services">Services</a>
            <span>→</span>
            <strong>Facility Management</strong>
          </div>

          <p className="service-detail-tag">
            <span></span>
            PROFESSIONAL FACILITY MANAGEMENT
          </p>

          <h1>
            Complete Facility Support
            <br />
            <span>For Smooth Operations.</span>
          </h1>

          <p className="service-detail-hero-text">
            Professional facility management support for offices,
            businesses and commercial spaces across Mumbai, helping
            maintain clean, organized and efficiently managed workplaces.
          </p>

          <div className="service-detail-buttons">
            <a href="/contact" className="service-primary-button">
              Get A Free Quote
              <FiArrowRight />
            </a>

            <a
              href="#facility-overview"
              className="service-secondary-button"
            >
              Explore Service
            </a>
          </div>

        </div>
      </section>

      {/* OVERVIEW */}
      <section
        className="service-detail-overview"
        id="facility-overview"
      >
        <div className="container service-overview-grid">

          <div className="service-overview-image">

            <div className="service-image-card">
  <img
    src="/images/facility.jpg"
    alt="Professional Facility Management Services"
  />
</div>

            <div className="service-rating-card">
              <FiStar />

              <div>
                <strong>Complete Facility Support</strong>
                <span>Professional Management Assistance</span>
              </div>
            </div>

          </div>

          <div className="service-overview-content">

            <p className="section-tag">
              <span></span>
              FACILITY MANAGEMENT
            </p>

            <h2>
              Better Management For
              <span> Better Workplaces</span>
            </h2>

            <p>
              Managing a workplace requires consistent attention to
              cleanliness, support services and everyday operational
              requirements. Our facility management services are designed
              to help businesses maintain organized and professional spaces.
            </p>

            <p>
              From housekeeping and pantry support to routine workplace
              assistance, our service approach brings essential facility
              requirements together to support smoother daily operations.
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

      {/* FEATURES */}
      <section className="service-features-section">
        <div className="container">

          <div className="service-section-heading">

            <p className="section-tag">
              <span></span>
              WHY FACILITY MANAGEMENT
            </p>

            <h2>
              Reliable Support For
              <span> Everyday Operations</span>
            </h2>

            <p>
              Our facility management approach focuses on providing
              dependable support for cleaner, organized and efficiently
              managed workplaces.
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

      {/* PROCESS */}
      <section className="service-process-section">
        <div className="container">

          <div className="service-section-heading centered">

            <p className="section-tag">
              <span></span>
              HOW IT WORKS
            </p>

            <h2>
              Simple Process.
              <span> Complete Support.</span>
            </h2>

            <p>
              Tell us about your facility requirements and our team
              will help you plan suitable workplace support.
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
              <p>NEED FACILITY MANAGEMENT SUPPORT?</p>

              <h2>
                Keep Your Facility
                <span> Running Smoothly.</span>
              </h2>

              <p className="cta-description">
                Discuss your facility management requirements with our
                team and find suitable support for your workplace.
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

export default FacilityManagementPage;