import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Challenge", href: "/#challenge" },
    { title: "Technology", href: "/#technology" },
    { title: "Unified Geo-Stack", href: "/#unified-geo-stack" },
    { title: "Applications", href: "/#applications" },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#E7F1EB] text-[#123C2B]"
    >
      <div className="container mx-auto px-6 pt-20 sm:px-8 md:pt-24 lg:px-10">
        {/* Main columns */}
        <div className="grid grid-cols-1  gap-14 md:grid-cols-3 md:gap-16 lg:gap-24">
          {/* =========================
              BRAND
          ========================== */}
          <div>
            <Link href="/" className="group flex w-fit items-center gap-3">
              <Image
                src="/logo.png"
                width={56}
                height={56}
                alt="Harvest Global"
                className="h-14 w-14 object-contain transition-transform duration-500 group-hover:scale-105"
              />

              <div>
                <span className="block text-lg font-semibold tracking-tight text-[#123C2B]">
                  Harvest Global
                </span>

                
              </div>
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-6 text-[#235738]/65">
              Building strategic partnerships with leading research institutions
              and technology partners.
            </p>

            {/* Social links */}
        <div className="mt-10 flex items-center gap-4">
  {/* LinkedIn */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#235738]/20 transition-all duration-300 hover:border-[#E46A2A] hover:bg-[#E46A2A]"
  >
    <Image
      src="/svg/linkedIn.svg"
      alt="LinkedIn"
      width={18}
      height={18}
      className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
    />
  </a>

  {/* Instagram */}
  <a
    href="#"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#235738]/20 transition-all duration-300 hover:border-[#E46A2A] hover:bg-[#E46A2A]"
  >
    <Image
      src="/svg/insta.svg"
      alt="Instagram"
      width={18}
      height={18}
      className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
    />
  </a>
</div>
          </div>

          {/* =========================
              NAVIGATION
          ========================== */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#235738]/60">
              Navigate
            </h4>

            <nav className="mt-7">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="group flex w-fit items-center gap-2 text-sm text-[#123C2B]/70 transition-colors duration-300 hover:text-[#E46A2A]"
                    >
                      <span>{link.title}</span>

                      <span className="translate-x-[-4px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        ↗
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#235738]/60">
              Contact
            </h4>

            <div className="mt-7 space-y-8">
              {/* Email */}
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#235738]/40">
                  Email
                </p>

                <a
                  href="mailto:info@harvest-global.com"
                  className="text-sm text-[#123C2B]/75 transition-colors duration-300 hover:text-[#E46A2A]"
                >
                  support@hgsystems.in
                </a>
              </div>

              {/* Location */}
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#235738]/40">
                  Location
                </p>

                <p className="max-w-xs text-sm leading-6 text-[#123C2B]/70">
                  Gurgaon,
                  <br />
                  Haryana, India
                </p>
              </div>

              {/* Website */}
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#235738]/40">
                  Website
                </p>

                <a
                  href="https://harvest-global.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#123C2B]/75 transition-colors duration-300 hover:text-[#E46A2A]"
                >
                  harvest-global.com ↗
                </a>
              </div>
            </div>
          </div>
        </div>
 
      </div>
       <div className="flex items-center justify-center overflow-hidden pt-20">
  <span
    className="
      bg-[url('/images/scroll-expansion.png')]
      bg-cover
      bg-center
      bg-clip-text
      text-[clamp(6rem,16vw,16rem)]
      font-extrabold
      leading-[0.8]
      tracking-[-0.07em]
      text-transparent
      select-none
      whitespace-nowrap
    "
  >
    Harvest Global
  </span>
</div>
    </footer>
  );
}
