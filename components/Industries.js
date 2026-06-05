export default function Industries() {
  const industries = [
    {
      title: "iGaming",
      description:
        "Online gaming, sports betting, casino and lottery operators navigating complex licensing and growth challenges.",
    },
    {
      title: "Telecommunications",
      description:
        "Telecom operators and service providers expanding into new markets and securing regulatory approvals.",
    },
    {
      title: "FinTech & Payments",
      description:
        "Payment institutions, e-money operators and financial services companies scaling globally.",
    },
    {
      title: "Technology",
      description:
        "Tech companies entering regulated markets and building compliant, scalable operations.",
    },
    {
      title: "Startups",
      description:
        "Early-stage ventures building from the ground up with the right structure, strategy and regulatory framework.",
    },
    {
      title: "Investment & Venture Capital",
      description:
        "Investors and funds requiring due diligence, portfolio advisory and market entry support.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p
            className="text-sm font-medium tracking-[0.3em] uppercase mb-4"
            style={{ color: "#0B493A" }}
          >
            Who We Work With
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "#0B493A" }}
          >
            Industries
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="p-8 rounded-2xl border border-gray-100 hover:border-[#0B493A] transition-colors duration-300 group cursor-pointer"
            >
              <h3
                className="text-xl font-bold mb-3 group-hover:text-[#0B493A] transition-colors"
                style={{ color: "#0B493A" }}
              >
                {industry.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
