"use client";

import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-base md:text-lg text-text mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <a href="#about" className="hover:text-accent transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-accent transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a href="#works" className="hover:text-accent transition-colors">
                Our Work
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-accent transition-colors">
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-accent transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="font-semibold text-base md:text-lg text-text mb-4">
            Stay Connected
          </h3>
          <p className="text-sm text-muted mb-4">
            Reach out to Crew5 Agency or follow our latest updates on social.
          </p>
          <div className="flex gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=966568121909"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-background transition-colors"
            >
              <FaWhatsapp className="text-sm" />
            </a>
            <a
              href="mailto:info@crew5.agency"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-background transition-colors"
            >
              <FaEnvelope className="text-sm" />
            </a>
            <a
              href="https://www.linkedin.com/company/crew5-agency/?viewAsMember=true"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-background transition-colors"
            >
              <FaLinkedin className="text-sm" />
            </a>
            <a
              href="https://www.instagram.com/crew5_agency/"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-background transition-colors"
            >
              <FaInstagram className="text-sm" />
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-base md:text-lg text-text mb-4">
            Legal
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] md:text-xs text-muted">
          <span>© 2025 Crew5 Agency. All rights reserved.</span>
          <span className="text-muted">
            Made with care by{" "}
            <span className="text-accent font-medium">Crew5</span>.
          </span>
        </div>
      </div>
    </footer>
  );
}
