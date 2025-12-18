import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-white">Contact Information</h2>

      <div className="flex items-start gap-4">
        <FaEnvelope className="text-accent text-xl mt-1" />
        <div>
          <p className="text-white font-medium">Email</p>
          <p className="text-white/70">hello@crew5agency.com</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <FaPhoneAlt className="text-accent text-xl mt-1" />
        <div>
          <p className="text-white font-medium">Phone</p>
          <p className="text-white/70">+966 XXX XXX XXX</p>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <FaMapMarkerAlt className="text-accent text-xl mt-1" />
        <div>
          <p className="text-white font-medium">Location</p>
          <p className="text-white/70">Saudi Arabia</p>
        </div>
      </div>
    </div>
  );
}
