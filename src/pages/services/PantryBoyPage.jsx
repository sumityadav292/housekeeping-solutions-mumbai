import {
  FiCoffee,
  FiUsers,
  FiShield,
  FiClock,
  FiCheckCircle,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";

function PantryBoyPage() {
  const features = [
    {
      icon: <FiCoffee />,
      title: "Pantry Support",
      text: "Reliable pantry staff to manage everyday refreshments and workplace pantry requirements.",
    },
    {
      icon: <FiUsers />,
      title: "Professional Staff",
      text: "Responsible staff focused on maintaining a clean, organized and welcoming pantry area.",
    },
    {
      icon: <FiShield />,
      title: "Clean & Hygienic",
      text: "Professional support with attention to cleanliness, hygiene and proper pantry practices.",
    },
    {
      icon: <FiClock />,
      title: "Timely Assistance",
      text: "Flexible pantry support designed around your office schedule and daily requirements.",
    },
  ];

  const services = [
    "Tea and coffee preparation",
    "Pantry area maintenance",
    "Serving refreshments",
    "Kitchen and pantry assistance",
    "Utensil and crockery support",
    "Daily pantry management",
  ];

  const process = [
    {
      number: "01",
      title: "Share Your Requirement",
      text: "Tell us about your office, pantry requirements and the type of support you need.",
    },
    {
      number: "02",
      title: "Discuss Your Schedule",
      text: "Choose a suitable service schedule according to your workplace requirements.",
    },
    {
      number: "03",
      title: "Get Pantry Support",
      text: "Our staff provides dependable pantry assistance to keep your workplace comfortable and organized.",
    },
  ];

  return (
    <main className="service-detail-page">

      {/* HERO */}
      <section className="service-detail-hero pantry-boy-hero">
        <div className="service-detail-overlay"></div>

        <div className="container service-detail-hero-content">

          <div className="service-breadcrumb">
            <a href="/">Home</a>
            <span>→</span>
            <a href="/services">Services</a>
            <span>→</span>
            <strong>Pantry Boy Services</strong>
          </div>

          <p className="service-detail-tag">
            <span></span>
            PROFESSIONAL PANTRY SUPPORT SERVICES
          </p>

          <h1>
            Reliable Pantry Support
            <br />
            <span>For A Better Workplace.</span>
          </h1>

          <p className="service-detail-hero-text">
            Professional pantry boy services for offices, businesses and
            commercial workplaces across Mumbai, providing reliable support
            for everyday refreshments and pantry requirements.
          </p>

          <div className="service-detail-buttons">
            <a href="/contact" className="service-primary-button">
              Get A Free Quote
              <FiArrowRight />
            </a>

            <a
              href="#pantry-overview"
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
        id="pantry-overview"
      >
        <div className="container service-overview-grid">

          <div className="service-overview-image">

            <div className="service-image-card">
  <img
    src="/images/pantry.jpg"
    alt="Professional Pantry Boy Services"
  />
</div>

            <div className="service-rating-card">
              <FiStar />

              <div>
                <strong>Professional Pantry Support</strong>
                <span>Reliable Workplace Assistance</span>
              </div>
            </div>

          </div>

          <div className="service-overview-content">

            <p className="section-tag">
              <span></span>
              PANTRY BOY SERVICES
            </p>

            <h2>
              Everyday Pantry Support
              <span> You Can Rely On</span>
            </h2>

            <p>
              A well-managed pantry helps create a comfortable and
              organized workplace. Our pantry boy services are designed
              to provide dependable support for everyday refreshments,
              pantry maintenance and workplace requirements.
            </p>

            <p>
              From preparing tea and coffee to serving refreshments and
              maintaining pantry areas, our support staff helps businesses
              maintain a clean, organized and welcoming workplace
              environment.
            </p>

            <div className="service-check-list">
              {services.map((item, index) => (
                <div
                  className="service-check-item"
                  key={index}
                >
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
              WHY PANTRY SUPPORT
            </p>

            <h2>
              Professional Pantry Assistance
              <span> For Your Workplace</span>
            </h2>

            <p>
              Our pantry support services are designed to provide
              dependable assistance while helping businesses maintain
              a clean, organized and comfortable workplace.
            </p>

          </div>

          <div className="service-features-grid">

            {features.map((feature, index) => (

              <div
                className="service-feature-card"
                key={index}
              >

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
              <span> Reliable Pantry Support.</span>
            </h2>

            <p>
              Tell us what your workplace needs and our team will
              help arrange suitable pantry support.
            </p>

          </div>

          <div className="service-process-grid">

            {process.map((step, index) => (

              <div
                className="service-process-card"
                key={index}
              >

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

              <p>LOOKING FOR PANTRY SUPPORT?</p>

              <h2>
                Keep Your Workplace
                <span> Comfortable & Organized.</span>
              </h2>

              <p className="cta-description">
                Discuss your pantry support requirements with our team
                and find a suitable solution for your workplace.
              </p>

            </div>

            <a
              href="/contact"
              className="service-cta-button"
            >
              Get A Free Quote
              <FiArrowRight />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default PantryBoyPage;