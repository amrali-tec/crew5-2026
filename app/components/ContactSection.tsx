"use client";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
        Contact Us
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="flex flex-col justify-center gap-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <a
            href="https://api.whatsapp.com/send?phone=966568121909"
            target="_blank"
            className="flex items-center gap-4 text-accent hover:text-white transition"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="mailto:info@crew5.agency"
            className="flex items-center gap-4 text-accent hover:text-white transition"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://www.linkedin.com/company/crew5-agency/?viewAsMember=true"
            target="_blank"
            className="flex items-center gap-4 text-accent hover:text-white transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://www.instagram.com/crew5_agency/"
            target="_blank"
            className="flex items-center gap-4 text-accent hover:text-white transition"
          >
            <FaInstagram /> Instagram
          </a>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4 bg-background/20 p-6 rounded-xl">
          <input
            type="text"
            placeholder="Name"
            className="p-3 rounded-md bg-background/40 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-background/40 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-md bg-background/40 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
          ></textarea>
          <button
            type="submit"
            className="bg-accent text-background font-semibold py-3 rounded-md hover:brightness-110 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
