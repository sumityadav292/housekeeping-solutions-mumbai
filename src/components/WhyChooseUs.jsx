import {
  FiShield,
  FiClock,
  FiUsers,
  FiCheckCircle
} from "react-icons/fi";

function WhyChooseUs() {
  const reasons = [
    {
      icon: <FiUsers />,
      title: "Trained Professionals",
      description:
        "Our trained staff follows professional service standards and handles every task with care.",
    },
    {
      icon: <FiShield />,
      title: "Safe & Reliable",
      description:
        "We focus on safety, hygiene and dependable service for homes, offices and businesses.",
    },
    {
      icon: <FiClock />,
      title: "Timely Support",
      description:
        "Quick response and flexible service schedules designed around your requirements.",
    },
    {
      icon: <FiCheckCircle />,
      title: "Quality Assured",
      description:
        "Consistent service quality with attention to cleanliness, presentation and customer satisfaction.",
    },
  ];

  return (
    <section className="why-section" id="why-us">
      <div className="container why-container">

        <div className="why-content">
          <p className="section-tag">
            <span></span>
            WHY CHOOSE US
          </p>

          <h2>
            Reliable Service.
            <br />
            <span>Better Results.</span>
          </h2>

          <p className="why-description">
            We understand that cleanliness and facility support are not just
            about completing a task. They are about creating a safe, organized
            and comfortable environment for everyone.
          </p>

          <a href="#contact" className="why-button">
            Talk To Our Team
            <span>→</span>
          </a>
        </div>

        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">
                {reason.icon}
              </div>

              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;