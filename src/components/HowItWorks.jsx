import {
  FiClipboard,
  FiCalendar,
  FiCheckCircle
} from "react-icons/fi";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: <FiClipboard />,
      title: "Choose Your Service",
      description:
        "Tell us what kind of housekeeping, cleaning or facility support you need."
    },
    {
      number: "02",
      icon: <FiCalendar />,
      title: "Set Your Schedule",
      description:
        "Choose a convenient date and service schedule that works for your home or business."
    },
    {
      number: "03",
      icon: <FiCheckCircle />,
      title: "We Handle The Rest",
      description:
        "Our trained professionals take care of the work while you enjoy a clean and organized space."
    }
  ];

  return (
    <section className="how-section" id="how-it-works">
      <div className="container">

        <div className="how-heading">
          <p className="section-tag">
            <span></span>
            HOW IT WORKS
          </p>

          <h2>
            Professional Service in
            <span> 3 Simple Steps</span>
          </h2>

          <p>
            Getting reliable housekeeping and facility support is simple.
            Choose your service, schedule it and let our team handle the rest.
          </p>
        </div>

        <div className="how-grid">
          {steps.map((step, index) => (
            <div className="how-step" key={index}>

              <div className="how-top">
                <div className="how-icon">
                  {step.icon}
                </div>

                <span className="how-number">
                  {step.number}
                </span>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

              {index < steps.length - 1 && (
                <div className="how-arrow">→</div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;