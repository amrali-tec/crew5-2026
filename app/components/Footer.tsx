"use client";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-background py-12 px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-accent transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-accent transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-accent transition">
                Services
              </a>
            </li>
            <li>
              <a href="#works" className="hover:text-accent transition">
                Our Work
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-accent transition">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-xl mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://api.whatsapp.com/send?phone=966568121909"
              target="_blank"
              className="text-accent hover:text-white transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:info@crew5.agency"
              className="text-accent hover:text-white transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/company/crew5-agency/?viewAsMember=true"
              target="_blank"
              className="text-accent hover:text-white transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/crew5_agency/"
              target="_blank"
              className="text-accent hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-xl mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-accent transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 text-center text-white/60 text-sm">
        © 2025 Crew5 Agency. All rights reserved.
      </div>
    </footer>
  );
}
