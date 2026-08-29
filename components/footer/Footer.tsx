import Image from "next/image";
import Link from "next/link";
import StarBackground from "@/components/ui/Starbackground";
import Reveal from "@/components/ui/reveal/Reveal";
import { data } from "@/data";

export default function Footer() {
  const { navigation, site, footer } = data;

  return (
    <footer
      id="contact"
      className="relative border-t border-white/10 bg-black py-16 md:py-20"
    >
      <StarBackground />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 md:px-10">
        <Reveal
          variant="stagger"
          itemSelector="[data-footer-col]"
          className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr] lg:gap-20"
          stagger={0.12}
        >
          {/* Brand */}
          <div data-footer-col>
            <Link href="#hero" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                width={56}
                height={56}
                alt={`${site.name} logo`}
                className="h-14 w-14 object-contain"
              />
              <span className="text-base font-semibold leading-tight text-white">
                {site.name}
                <span className="block text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                  {site.shortName}
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-neutral-500">
              {footer.brandDescription}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer" data-footer-col>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Navigate
            </p>
            <ul className="mt-5 space-y-3">
              {navigation.links.map((item) => (
                <li key={item.href}>
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
          <div data-footer-col>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-500">
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-400">
              <li>
                <a href={`tel:${footer.contact.phone}`} className="transition-colors hover:text-white">
                  {footer.contact.phone}
                </a>
              </li>
              <li className="text-neutral-500">
                {footer.contact.addressLines.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </li>
              <li>
                <a
                  href={footer.contact.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  {footer.contact.website}
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal variant="fade-up" className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center" y={20}>
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} {footer.copyright}
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-neutral-600">
            {footer.tagline}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
