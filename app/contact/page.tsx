import ContactHero from "@/app/components/Contact/ContactHero";
import ContactInfo from "@/app/components/Contact/ContactInfo";
import ContactForm from "@/app/components/Contact/ContactForm";
import ContactCTA from "@/app/components/Contact/ContactCTA";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <ContactHero />
      <section className="grid md:grid-cols-2 gap-12 px-6 md:px-12 py-20">
        <ContactInfo />
        <ContactForm />
      </section>
      <ContactCTA />
    </main>
  );
}
