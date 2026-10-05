import {
  FiUsers,
  FiHome,
  FiBriefcase,
  FiCoffee,
  FiSettings,
  FiDroplet
} from "react-icons/fi";

function Services() {
  const services = [
    {
      icon: <FiUsers />,
      title: "Housekeeping Services",
      description:
        "Professional housekeeping staff for homes, offices and commercial spaces.",
    },
    {
      icon: <FiHome />,
      title: "House Cleaning",
      description:
        "Reliable cleaning solutions to keep your home fresh, clean and comfortable.",
    },
    {
      icon: <FiBriefcase />,
      title: "Office Boy Services",
      description:
        "Trained office support staff for day-to-day workplace assistance.",
    },
    {
      icon: <FiCoffee />,
      title: "Pantry Boy Services",
      description:
        "Dedicated pantry staff to manage refreshments and workplace pantry needs.",
    },
    {
      icon: <FiSettings />,
      title: "Facility Management",
      description:
        "Complete facility support solutions designed for smooth daily operations.",
    },
    {
      icon: <FiDroplet />,
      title: "Deep Cleaning",
      description:
        "Detailed cleaning services for residential and commercial environments.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">

        <div className="services-heading">
          <div>
            <p className="section-tag">
              <span></span>
              OUR SERVICES
            </p>

            <h2>
              Professional Services for
              <span> Every Space</span>
            </h2>
          </div>

          <p className="services-intro">
            From housekeeping to complete facility management, we provide
            dependable services tailored to your needs across Mumbai.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <div className="service-number">
                0{index + 1}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                Learn More <span>→</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;