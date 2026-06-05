export default function WhyViora() {
  const points = [
    { left: "Most consultants advise.", right: "Viora builds." },
    {
      left: "Most compliance firms interpret regulations.",
      right: "Viora helps businesses launch, operate and scale successfully.",
    },
    {
      left: "Most advisors stop at strategy.",
      right: "Viora supports execution.",
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#0B493A" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-sm font-medium tracking-[0.3em] uppercase mb-4 text-green-300">
            Why Viora
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Viora Difference
          </h2>
        </div>
        <div className="divide-y divide-green-800">
          {points.map((point, index) => (
            <div
              key={index}
              className="py-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
            >
              <p className="text-green-300 text-lg md:text-xl">{point.left}</p>
              <p className="text-white text-xl md:text-2xl font-bold">
                {point.right}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
