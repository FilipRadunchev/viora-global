export default function Numbers() {
  const stats = [
    { number: "20+", label: "Markets Entered" },
    { number: "50+", label: "Licenses Secured" },
    { number: "30+", label: "Partnerships Facilitated" },
    { number: "40+", label: "Businesses Launched" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="text-5xl font-bold mb-2"
                style={{ color: "#0B493A" }}
              >
                {stat.number}
              </p>
              <p className="text-sm text-gray-500 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
