//Users/editing2/crew5-website/app/components/ContactSection.tsx
"use client";
import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full py-20 px-6 md:px-12 bg-transparent relative"
    >
      {/* عنوان القسم */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-white mb-3"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base text-gray-400"
        >
          Let&apos;s build something{" "}
          <span className="text-[#16FF68] font-semibold">remarkable</span>{" "}
          together.
        </motion.p>
      </div>

      {/* المحتوى: معلومات + فورم */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center gap-6"
        >
          <h3 className="text-xl font-semibold text-white mb-2">
            Contact Methods
          </h3>
          <p className="text-gray-400 mb-4">
            Choose the channel that suits you best and our team will respond as
            soon as possible.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=966568121909"
            target="_blank"
            className="flex items-center gap-4 text-[#16FF68] hover:text-white transition-colors duration-200"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16FF68]/10 text-[#16FF68]">
              <FaWhatsapp />
            </span>
            <span className="font-medium">WhatsApp</span>
          </a>

          <a
            href="mailto:info@crew5.agency"
            className="flex items-center gap-4 text-[#16FF68] hover:text-white transition-colors duration-200"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16FF68]/10 text-[#16FF68]">
              <FaEnvelope />
            </span>
            <span className="font-medium">info@crew5.agency</span>
          </a>

          <a
            href="https://www.linkedin.com/company/crew5-agency/?viewAsMember=true"
            target="_blank"
            className="flex items-center gap-4 text-[#16FF68] hover:text-white transition-colors duration-200"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16FF68]/10 text-[#16FF68]">
              <FaLinkedin />
            </span>
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href="https://www.instagram.com/crew5_agency/"
            target="_blank"
            className="flex items-center gap-4 text-[#16FF68] hover:text-white transition-colors duration-200"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#16FF68]/10 text-[#16FF68]">
              <FaInstagram />
            </span>
            <span className="font-medium">@crew5_agency</span>
          </a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(15,23,42,0.75)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1 text-left">
              <label className="text-sm text-gray-300">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="p-3 rounded-md bg-black/30 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#16FF68]/70"
              />
            </div>
            <div className="flex flex-col gap-1 text-left">
              <label className="text-sm text-gray-300">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="p-3 rounded-md bg-black/30 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#16FF68]/70"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1 text-left">
            <label className="text-sm text-gray-300">Subject</label>
            <input
              type="text"
              placeholder="What is this about?"
              className="p-3 rounded-md bg-black/30 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#16FF68]/70"
            />
          </div>

          <div className="flex flex-col gap-1 text-left">
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              placeholder="Tell us about your project..."
              rows={5}
              className="p-3 rounded-md bg-black/30 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#16FF68]/70 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="mt-2 bg-[#16FF68] text-[#050814] font-semibold py-3 rounded-xl hover:shadow-[0_0_25px_rgba(22,255,104,0.7)] transition-all duration-300"
          >
            Send Message
          </motion.button>

          <p className="text-xs text-gray-500 mt-1 text-left">
            By submitting this form, you agree to be contacted by Crew5 Agency
            regarding your inquiry.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
