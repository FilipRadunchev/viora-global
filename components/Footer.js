import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex flex-col mb-4">
              <span
                className="text-xl font-bold tracking-tight"
                style={{ color: "#0B493A" }}
              >
                VIORA
              </span>
              <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">
                Global
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Business advisory and growth consultancy helping entrepreneurs,
              investors and operators build, scale and transform businesses in
              regulated industries.
            </p>
          </div>
          <div>
            <p
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: "#0B493A" }}
            >
              Services
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-500 hover:text-[#0B493A] transition-colors"
                >
                  Business Creation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-500 hover:text-[#0B493A] transition-colors"
                >
                  Business Transformation
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-500 hover:text-[#0B493A] transition-colors"
                >
                  Business Growth
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-500 hover:text-[#0B493A] transition-colors"
                >
                  Licensing & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-500 hover:text-[#0B493A] transition-colors"
                >
                  Executive Advisory
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: "#0B493A" }}
            >
              Company
            </p>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-500 hover:text-[#0B493A] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-sm text-gray-500 hover:text-[#0B493A] transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-sm text-gray-500 hover:text-[#0B493A] transition-colors"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 hover:text-[#0B493A] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-gray-400">
            © 2025 Viora Global. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">info@vioraglobal.com</p>
        </div>
      </div>
    </footer>
  );
}
