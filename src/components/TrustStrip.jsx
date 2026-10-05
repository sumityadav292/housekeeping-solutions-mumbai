import {
  FiShield,
  FiHome,
  FiUsers,
  FiMapPin
} from "react-icons/fi";

function TrustStrip() {
  const items = [
    {
      icon: <FiShield />,
      title: "Professional Service",
      text: "Housekeeping & Cleaning"
    },
    {
      icon: <FiHome />,
      title: "Flexible Support",
      text: "Home & Business"
    },
    {
      icon: <FiUsers />,
      title: "Quality Focused",
      text: "Reliable Staff"
    },
    {
      icon: <FiMapPin />,
      title: "Service Area",
      text: "Mumbai"
    }
  ];

  return (
    <section className="trust-strip">
      <div className="container trust-strip-container">

        {items.map((item, index) => (
          <div className="trust-strip-item" key={index}>

            <div className="trust-strip-icon">
              {item.icon}
            </div>

            <div className="trust-strip-content">
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default TrustStrip;