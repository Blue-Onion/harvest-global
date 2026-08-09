import Image from "next/image";
import Link from "next/link";

const NAV = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Technology", href: "#technology" },
  { label: "Applications", href: "#applications" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-black py-16 md:py-20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr] lg:gap-20">
          {/* Brand */}
          <div>
            <Link href="#hero" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                width={56}
                height={56}
                alt="Harvest Global SSP Pvt Ltd logo"
                className="h-14 w-14 object-contain"
              />
              <span className="text-base font-semibold leading-tight text-white">
                Harvest Global
                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  HG Systems
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-500">
              Foundational AI for Earth Observation — customized intelligence
              for real-world applications.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {NAV.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-400">
              <li>
                <a href="tel:+919821206807" className="transition-colors hover:text-white">
                  +91 9821206807
                </a>
              </li>
              <li className="text-neutral-500">
                Plot No. 1, Udyog Vihar Phase 1,
                <br />
                Udyog Vihar, Sector 20,
                <br />
                Gurugram, Haryana 122022
              </li>
              <li>
                <a
                  href="https://hgsystems.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  hgsystems.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Harvest Global SSP Pvt Ltd
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">
            AI for Earth · Built for Scale
          </p>
        </div>
      </div>
    </footer>
  );
}
