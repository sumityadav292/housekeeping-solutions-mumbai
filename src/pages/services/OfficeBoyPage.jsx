import {
  FiBriefcase,
  FiUsers,
  FiShield,
  FiClock,
  FiCheckCircle,
  FiStar,
  FiArrowRight,
} from "react-icons/fi";

function OfficeBoyPage() {
  const features = [
    {
      icon: <FiBriefcase />,
      title: "Office Support",
      text: "Reliable support staff for routine workplace assistance and everyday office requirements.",
    },
    {
      icon: <FiUsers />,
      title: "Professional Staff",
      text: "Responsible and trained staff focused on professional workplace support.",
    },
    {
      icon: <FiShield />,
      title: "Reliable Service",
      text: "A dependable approach with attention to workplace discipline, cleanliness and responsibility.",
    },
    {
      icon: <FiClock />,
      title: "Timely Assistance",
      text: "Flexible support designed around your office schedule and daily requirements.",
    },
  ];

  const services = [
    "Office cleaning assistance",
    "Document and file support",
    "Tea and refreshments support",
    "Meeting room assistance",
    "General office errands",
    "Day-to-day workplace support",
  ];

  const process = [
    {
      number: "01",
      title: "Share Your Requirement",
      text: "Tell us about your office, staff requirement and the type of support you need.",
    },
    {
      number: "02",
      title: "Discuss Your Schedule",
      text: "Choose a suitable service schedule according to your workplace requirements.",
    },
    {
      number: "03",
      title: "Get Professional Support",
      text: "Our team provides dependable office support to help your workplace run smoothly.",
    },
  ];

  return (
    <main className="service-detail-page">

      {/* ================= HERO ================= */}

      <section className="service-detail-hero office-boy-hero">
        <div className="service-detail-overlay"></div>

        <div className="container service-detail-hero-content">

          <div className="service-breadcrumb">
            <a href="/">Home</a>
            <span>→</span>
            <a href="/services">Services</a>
            <span>→</span>
            <strong>Office Boy Services</strong>
          </div>

          <p className="service-detail-tag">
            <span></span>
            PROFESSIONAL OFFICE SUPPORT SERVICES
          </p>

          <h1>
            Reliable Office Support
            <br />
            <span>For A Better Workplace.</span>
          </h1>

          <p className="service-detail-hero-text">
            Professional office boy services for businesses, offices and
            commercial workplaces across Mumbai, providing dependable
            day-to-day workplace support.
          </p>

          <div className="service-detail-buttons">

            <a href="/contact" className="service-primary-button">
              Get A Free Quote
              <FiArrowRight />
            </a>

            <a
              href="#office-overview"
              className="service-secondary-button"
            >
              Explore Service
            </a>

          </div>

        </div>
      </section>

      {/* ================= OVERVIEW ================= */}

      <section
        className="service-detail-overview"
        id="office-overview"
      >

        <div className="container service-overview-grid">

          <div className="service-overview-image">

            <div className="service-image-card">
  <img
    src="/images/offi.jpg"
    alt="Professional Office Boy Services"
  />
</div>

            <div className="service-rating-card">

              <FiStar />

              <div>
                <strong>Professional Office Support</strong>
                <span>Reliable Workplace Assistance</span>
              </div>

            </div>

          </div>

          <div className="service-overview-content">

            <p className="section-tag">
              <span></span>
              OFFICE BOY SERVICES
            </p>

            <h2>
              Everyday Office Support
              <span> You Can Rely On</span>
            </h2>

            <p>
              A well-organized workplace depends on reliable day-to-day
              support. Our office boy services are designed to assist
              businesses with routine workplace tasks and general office
              requirements.
            </p>

            <p>
              From basic office assistance and meeting room preparation to
              refreshments and general workplace errands, our support staff
              helps your team maintain a smooth and organized working
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

      {/* ================= FEATURES ================= */}

      <section className="service-features-section">

        <div className="container">

          <div className="service-section-heading">

            <p className="section-tag">
              <span></span>
              WHY OFFICE SUPPORT
            </p>

            <h2>
              Professional Assistance
              <span> For Your Workplace</span>
            </h2>

            <p>
              Our office support services are designed to provide dependable
              assistance while helping businesses maintain an organized and
              professional workplace.
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

      {/* ================= PROCESS ================= */}

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
              Tell us what your workplace needs and our team will help
              arrange suitable office support.
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

      {/* ================= CTA ================= */}

      <section className="service-detail-cta">

        <div className="container">

          <div className="service-cta-box">

            <div>

              <p>LOOKING FOR OFFICE SUPPORT?</p>

              <h2>
                Keep Your Workplace
                <span> Running Smoothly.</span>
              </h2>

              <p className="cta-description">
                Discuss your office support requirements with our team
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

export default OfficeBoyPage;