export default function Insights() {
  const articles = [
    {
      category: "iGaming",
      title:
        "How to Choose the Right Jurisdiction for Your Online Casino License",
      excerpt:
        "A practical guide to evaluating licensing jurisdictions based on cost, timeline, reputation and market access.",
      date: "Coming Soon",
    },
    {
      category: "FinTech",
      title: "Building a Compliant Payment Institution from Scratch",
      excerpt:
        "The key steps to structuring a fintech business that meets regulatory requirements while remaining commercially competitive.",
      date: "Coming Soon",
    },
    {
      category: "Strategy",
      title: "Why Most Market Entry Strategies Fail in Regulated Industries",
      excerpt:
        "Common mistakes operators make when entering new markets and how to avoid them with the right advisory support.",
      date: "Coming Soon",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <div>
            <p
              className="text-sm font-medium tracking-[0.3em] uppercase mb-4"
              style={{ color: "#0B493A" }}
            >
              Thought Leadership
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "#0B493A" }}
            >
              Insights
            </h2>
          </div>
          <p className="text-sm text-gray-400">
            Articles and analysis coming soon.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.title}
              className="flex flex-col group cursor-pointer"
            >
              <div
                className="rounded-2xl p-8 flex-1 flex flex-col border border-gray-100 hover:border-[#0B493A] transition-colors duration-300"
                style={{ backgroundColor: "#FFF2E6" }}
              >
                <span
                  className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
                  style={{ color: "#0B493A" }}
                >
                  {article.category}
                </span>
                <h3
                  className="text-lg font-bold mb-3 leading-snug flex-1"
                  style={{ color: "#0B493A" }}
                >
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <span className="text-xs text-gray-400">{article.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
