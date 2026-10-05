import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function FloatingActions() {
  return (
    <div className="floating-actions">

      <a
  href="https://wa.me/919920453384?text=Hello%2C%20I%20am%20interested%20in%20your%20housekeeping%20services.%20I%20would%20like%20to%20know%20more%20about%20your%20services%20and%20pricing."
  target="_blank"
  rel="noopener noreferrer"
  className="floating-action whatsapp-action"
  aria-label="Contact us on WhatsApp"
>
  <FaWhatsapp />
  <span>WhatsApp</span>
</a>

      <a
        href="tel:+919920453384"
        className="floating-action call-action"
        aria-label="Call us"
      >
        <FiPhone />
        <span>Call Us</span>
      </a>

    </div>
  );
}

export default FloatingActions;