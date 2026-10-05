import {
  FiShield,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiHeart,
  FiMapPin,
  FiArrowRight,
  FiStar,
} from "react-icons/fi";

function WhyUsPage() {
  const reasons = [
    {
      icon: <FiUsers />,
      number: "01",
      title: "Professional Staff",
      text: "We focus on providing responsible and professional support staff for housekeeping, cleaning and workplace requirements.",
    },
    {
      icon: <FiShield />,
      number: "02",
      title: "Reliable Service",
      text: "Our service approach focuses on reliability, cleanliness, safety and consistent support for every requirement.",
    },
    {
      icon: <FiClock />,
      number: "03",
      title: "Timely Support",
      text: "We understand the importance of time and provide service support according to your schedule and requirements.",
    },
    {
      icon: <FiCheckCircle />,
      number: "04",
      title: "Quality Focused",
      text: "We pay attention to service quality and aim to maintain professional standards across every service.",
    },
    {
      icon: <FiHeart />,
      number: "05",
      title: "Customer Focused",
      text: "Every requirement is different, so we listen to your needs and work towards a comfortable service experience.",
    },
    {
      icon: <FiMapPin />,
      number: "06",
      title: "Mumbai Focused",
      text: "We provide housekeeping, cleaning and facility support services for customers across Mumbai.",
    },
  ];

  const commitments = [
    "Professional housekeeping support",
    "Reliable cleaning services",
    "Trained and responsible staff",
    "Flexible service requirements",
    "Residential and commercial support",
    "Mumbai-focused service availability",
  ];

  return (
    <main className="why-us-page">

      {/* HERO */}
      <section className="why-us-page-hero">

        <div className="why-us-page-overlay"></div>

        <div className="container why-us-page-hero-content">

          <p className="why-us-page-tag">
            <span></span>
            WHY CHOOSE US
          </p>

          <h1>
            Professional Service.
            <br />
            <span>Reliable Support.</span>
          </h1>

          <p>
            We provide dependable housekeeping, cleaning and facility
            support solutions designed around the needs of homes,
            offices and businesses across Mumbai.
          </p>

          <div className="why-us-hero-buttons">

            <a href="/contact" className="why-us-primary-btn">
              Get A Free Quote
              <FiArrowRight />
            </a>

            <a href="#why-reasons" className="why-us-secondary-btn">
              Why Choose Us
            </a>

          </div>

        </div>

      </section>

      {/* INTRO */}
      <section className="why-us-intro">

        <div className="container why-us-intro-grid">

          <div className="why-us-intro-content">

            <p className="section-tag">
              <span></span>
              OUR APPROACH
            </p>

            <h2>
              More Than A Service.
              <span> A Reliable Support Partner.</span>
            </h2>

            <p>
              Keeping a home, office or commercial space clean and
              well managed requires consistency, responsibility and
              professional support.
            </p>

            <p>
              At Housekeeping Solutions Mumbai, our focus is to provide
              dependable housekeeping, cleaning and facility support
              according to your specific requirements.
            </p>

            <div className="why-us-check-list">

              {commitments.map((item, index) => (
                <div className="why-us-check-item" key={index}>
                  <FiCheckCircle />
                  <span>{item}</span>
                </div>
              ))}

            </div>

          </div>

          <div className="why-us-intro-card">

  <img
    src="/images/whyus.jpg"
    alt="Professional housekeeping and facility services"
  />

  <div className="why-us-image-overlay">

    <div className="why-us-intro-icon">
      <FiStar />
    </div>

    <span className="why-us-intro-small">
      OUR COMMITMENT
    </span>

    <h3>
      Clean Spaces.
      <br />
      Better Support.
    </h3>

    <p>
      Professional service support with a focus on quality,
      reliability and customer satisfaction.
    </p>

    <div className="why-us-intro-line"></div>

    <strong>
      Housekeeping Solutions Mumbai
    </strong>

  </div>

</div>

        </div>

      </section>

      {/* REASONS */}
      <section className="why-us-reasons" id="why-reasons">

        <div className="container">

          <div className="why-us-section-heading">

            <p className="section-tag">
              <span></span>
              WHY US
            </p>

            <h2>
              Why Customers Choose
              <span> Our Services</span>
            </h2>

            <p>
              We combine professional support, reliable service and
              customer-focused solutions to make everyday cleaning
              and facility requirements easier.
            </p>

          </div>

          <div className="why-us-reasons-grid">

            {reasons.map((reason) => (

              <div
                className="why-us-reason-card"
                key={reason.number}
              >

                <div className="why-us-reason-top">

                  <div className="why-us-reason-icon">
                    {reason.icon}
                  </div>

                  <span>{reason.number}</span>

                </div>

                <h3>{reason.title}</h3>

                <p>{reason.text}</p>

                <div className="why-us-card-arrow">
                  <FiArrowRight />
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* SERVICE EXPERIENCE */}
      <section className="why-us-experience">

        <div className="container">

          <div className="why-us-experience-box">

            <div className="why-us-experience-content">

              <p className="section-tag">
                <span></span>
                SERVICE EXPERIENCE
              </p>

              <h2>
                Support Designed Around
                <span> Your Requirements</span>
              </h2>

              <p>
                Whether you need housekeeping staff, home cleaning,
                office support, pantry services or facility management,
                we aim to provide a professional and convenient service
                experience.
              </p>

              <a href="/services" className="why-us-experience-btn">
                Explore Our Services
                <FiArrowRight />
              </a>

            </div>

            <div className="why-us-experience-stats">

              <div>
                <strong>01</strong>
                <span>Professional Approach</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Reliable Support</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Customer Focused</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Mumbai Service</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="why-us-cta">

        <div className="container">

          <div className="why-us-cta-box">

            <div>

              <p>READY TO GET STARTED?</p>

              <h2>
                Let's Make Your Space
                <span> Cleaner & Better.</span>
              </h2>

              <p>
                Tell us about your housekeeping, cleaning or facility
                support requirement and our team can help you find a
                suitable service.
              </p>

            </div>

            <a href="/contact" className="why-us-cta-btn">
              Get A Free Quote
              <FiArrowRight />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default WhyUsPage;