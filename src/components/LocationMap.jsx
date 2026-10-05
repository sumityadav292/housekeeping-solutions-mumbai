import { FiMapPin, FiNavigation, FiPhone } from "react-icons/fi";

function LocationMap() {
  const address =
    "Shop No. 95, Motilal Nagar No. 1, near Masjid, Best Nagar, Goregaon West, Mumbai, Maharashtra 400104";

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section className="location-section">
      <div className="container">

        <div className="location-heading">
          <p className="section-tag">
            <span></span>
            FIND US
          </p>

          <h2>
            Visit Our
            <span> Location</span>
          </h2>

          <p>
            Our office is located in Goregaon West, Mumbai.
            Get in touch with our team or visit us at the address below.
          </p>
        </div>

        <div className="location-card">

          <div className="location-map">
            <iframe
              title="Housekeeping Solutions Mumbai Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                address
              )}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="location-info">

            <div className="location-badge">
              <FiMapPin />
              <span>Our Office</span>
            </div>

            <h3>
              Housekeeping Solutions Mumbai
            </h3>

            <p className="location-address">
              {address}
            </p>

            <div className="location-details">
              <div>
                <FiMapPin />
                <span>Goregaon West, Mumbai</span>
              </div>

              <div>
                <FiPhone />
                <span>Contact our team for enquiries</span>
              </div>
            </div>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="directions-btn"
            >
              <FiNavigation />
              Get Directions
              <span>→</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LocationMap;