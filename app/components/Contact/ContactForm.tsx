"use client";

export default function ContactForm() {
  return (
    <form className="bg-background/20 border border-white/10 rounded-2xl p-8 space-y-6">
      <h2 className="text-2xl font-semibold text-white">Send Us a Message</h2>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-3 rounded-lg bg-background border border-white/10 text-white focus:outline-none focus:border-accent"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-3 rounded-lg bg-background border border-white/10 text-white focus:outline-none focus:border-accent"
      />

      <textarea
        placeholder="Tell us about your project"
        rows={5}
        className="w-full p-3 rounded-lg bg-background border border-white/10 text-white focus:outline-none focus:border-accent"
      />

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-accent text-black font-semibold hover:opacity-90 transition"
      >
        Send Message
      </button>
    </form>
  );
}
