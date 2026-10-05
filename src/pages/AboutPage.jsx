import {
  FiCheckCircle,
  FiUsers,
  FiShield,
  FiClock,
  FiTarget,
  FiHeart,
  FiArrowRight,
} from "react-icons/fi";

import ScrollReveal from "../components/ScrollReveal";

function AboutPage() {
  const values = [
    {
      icon: <FiUsers />,
      title: "Professional Team",
      text: "Our service approach is built around responsible, trained and customer-focused professionals.",
    },
    {
      icon: <FiShield />,
      title: "Safe & Reliable",
      text: "We focus on cleanliness, hygiene, safety and dependable support for every requirement.",
    },
    {
      icon: <FiClock />,
      title: "Timely Support",
      text: "We understand the importance of time and aim to provide responsive and flexible service support.",
    },
    {
      icon: <FiHeart />,
      title: "Customer Focused",
      text: "We listen to your requirements and work towards delivering a smooth and comfortable experience.",
    },
  ];

  const highlights = [
    "Professional housekeeping support",
    "Residential and commercial cleaning",
    "Office and pantry support staff",
    "Facility management assistance",
    "Flexible service requirements",
    "Mumbai-focused service support",
  ];

  return (
    <main className="about-page">
        <ScrollReveal />

      {/* ================= HERO ================= */}
      <section className="about-page-hero">
        <div className="about-page-hero-overlay"></div>

        <div className="container about-page-hero-content">
          <p className="about-page-tag">
            <span></span>
            ABOUT HOUSEKEEPING SOLUTIONS MUMBAI
          </p>

          <h1>
            Reliable Services.
            <br />
            <span>Cleaner Spaces.</span>
          </h1>

          <p>
            Professional housekeeping, cleaning and facility support
            services designed for homes, offices and businesses across Mumbai.
          </p>

          <div className="about-page-breadcrumb">
            <a href="/">Home</a>
            <span>→</span>
            <strong>About Us</strong>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="about-page-intro">
        <div className="container about-page-intro-grid">

          <div className="about-page-image">
            <div className="about-page-image-card">
              <img
                src="/images/abo.jpg"
                alt="Professional housekeeping services"
              />
            </div>

            <div className="about-page-floating-card">
              <strong>Professional</strong>
              <span>Housekeeping Support</span>
            </div>
          </div>

          <div className="about-page-content">

            <p className="section-tag">
              <span></span>
              WHO WE ARE
            </p>

            <h2>
              Your Trusted Partner for
              <span> Professional Facility Services</span>
            </h2>

            <p>
              Housekeeping Solutions Mumbai provides professional housekeeping,
              cleaning and facility support services for homes, offices,
              commercial spaces and businesses across Mumbai.
            </p>

            <p>
              Our goal is simple: to help create cleaner, safer and more
              organized spaces through dependable service and professional
              support. We understand that every home and business has
              different requirements, which is why our services are designed
              around your specific needs.
            </p>

            <p>
              From regular housekeeping and home cleaning to office support,
              pantry services and facility management assistance, we aim to
              make everyday operations easier and more comfortable.
            </p>

            <a href="/contact" className="about-page-button">
              Discuss Your Requirement
              <FiArrowRight />
            </a>

          </div>
        </div>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="about-page-highlights">
        <div className="container">

          <div className="about-section-heading">

            <p className="section-tag">
              <span></span>
              WHAT WE OFFER
            </p>

            <h2>
              Complete Support for
              <span> Your Everyday Needs</span>
            </h2>

            <p>
              Our services are designed to support residential and commercial
              requirements with a professional and reliable approach.
            </p>

          </div>

          <div className="about-highlights-grid">

            {highlights.map((item, index) => (
              <div className="about-highlight-card" key={index}>
                <div className="about-highlight-icon">
                  <FiCheckCircle />
                </div>

                <div>
                  <span>0{index + 1}</span>
                  <h3>{item}</h3>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="about-page-values">
        <div className="container">

          <div className="about-section-heading centered">

            <p className="section-tag">
              <span></span>
              OUR APPROACH
            </p>

            <h2>
              What We
              <span> Stand For</span>
            </h2>

            <p>
              Professional service is not only about completing a task.
              It is about reliability, responsibility and attention to detail.
            </p>

          </div>

          <div className="about-values-grid">

            {values.map((value, index) => (
              <div className="about-value-card" key={index}>

                <div className="about-value-icon">
                  {value.icon}
                </div>

                <span className="about-value-number">
                  0{index + 1}
                </span>

                <h3>{value.title}</h3>

                <p>{value.text}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="about-page-mission">

        <div className="container about-mission-container">

          <div className="about-mission-content">

            <p className="section-tag">
              <span></span>
              OUR MISSION
            </p>

            <h2>
              Making Clean &
              <span> Organized Spaces Easier</span>
            </h2>

            <p>
              Our mission is to provide dependable housekeeping and facility
              support that helps customers maintain clean, comfortable and
              well-managed spaces.
            </p>

            <p>
              We believe that professional service should be simple,
              transparent and focused on the customer's actual requirements.
            </p>

          </div>

          <div className="about-mission-card">

            <div className="mission-card-icon">
              <FiTarget />
            </div>

            <h3>Our Commitment</h3>

            <p>
              Reliable support, professional service and a strong focus on
              cleanliness and customer satisfaction.
            </p>

            <div className="mission-line"></div>

            <span>Housekeeping Solutions Mumbai</span>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="about-page-cta">

        <div className="container">

          <div className="about-cta-box">

            <div>
              <p>READY TO GET STARTED?</p>

              <h2>
                Let's Discuss Your
                <span> Service Requirements</span>
              </h2>

              <p className="cta-description">
                Tell us what you need and our team can help you find the
                right housekeeping or facility support solution.
              </p>
            </div>

            <a href="/contact" className="about-cta-button">
              Get A Free Quote
              <FiArrowRight />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default AboutPage;