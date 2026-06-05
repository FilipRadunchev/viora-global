export default function Contact() {
  const CALENDLY_URL = "https://calendly.com/your-link";

  return (
    <section className="py-24" style={{ backgroundColor: "#0B493A" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm font-medium tracking-[0.3em] uppercase mb-6 text-green-300">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Build, Scale or Transform?
        </h2>
        <p className="text-green-200 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Whether you are launching a new business, expanding into a new market
          or navigating a complex regulatory environment, Viora Global is here
          to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 font-medium rounded-full text-sm tracking-wide transition-opacity hover:opacity-90 bg-white"
            style={{ color: "#0B493A" }}
          >
            Book a Strategy Session
          </a>
          <a
            href="mailto:info@vioraglobal.com"
            className="px-8 py-4 font-medium rounded-full text-sm tracking-wide border-2 border-white text-white transition-colors"
          >
            Send Us an Email
          </a>
        </div>
      </div>
    </section>
  );
}
