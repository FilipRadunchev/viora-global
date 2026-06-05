export default function Services() {
  const services = [
    {
      number: "01",
      title: "Business Creation",
      description:
        "Turning ideas into operating businesses. From business model development and market research to go-to-market strategy and operational design.",
    },
    {
      number: "02",
      title: "Business Transformation",
      description:
        "Helping companies improve performance and restructure operations through audits, process optimization and change management.",
    },
    {
      number: "03",
      title: "Business Growth",
      description:
        "Driving revenue, expansion and strategic partnerships. New market entry, international expansion and investor readiness.",
    },
    {
      number: "04",
      title: "Licensing & Compliance",
      description:
        "Navigating complex regulatory environments across iGaming, telecom and fintech. AML frameworks, KYC implementation and responsible gaming.",
    },
    {
      number: "05",
      title: "Executive Advisory",
      description:
        "Supporting founders, boards and leadership teams. Fractional COO and CEO advisory, board advisory and corporate governance.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: "#FFF2E6" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p
            className="text-sm font-medium tracking-[0.3em] uppercase mb-4"
            style={{ color: "#0B493A" }}
          >
            What We Do
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "#0B493A" }}
          >
            Our Services
          </h2>
        </div>
        <div className="divide-y divide-gray-200">
          {services.map((service) => (
            <div
              key={service.number}
              className="py-10 flex flex-col md:flex-row md:items-start gap-6 group cursor-pointer"
            >
              <span className="text-sm font-medium text-gray-400 md:w-16 shrink-0">
                {service.number}
              </span>
              <div className="flex-1">
                <h3
                  className="text-2xl font-bold mb-3 transition-colors"
                  style={{ color: "#0B493A" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-2xl">
                  {service.description}
                </p>
              </div>
              <span className="text-2xl font-light text-gray-300 hidden md:block group-hover:text-[#0B493A] transition-colors">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
