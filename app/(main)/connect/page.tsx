"use client";

import Image from "next/image";

const ConnectPage = () => {
  return (
    <section
      id="connect"
      className="relative bg-black mx-auto h-screen overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/images/connect.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto mt-35 space-y-20 px-4 py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* LEFT */}
          <div className="relative z-10 flex flex-col justify-between text-white">
            {/* Main Text */}
            <div className="space-y-10">
              <p className="text-left text-2xl font-semibold md:text-xl">
                    Earth Intelligence. Built for Impact.
              </p>

              <h4 className="text-left text-2xl tracking-wider md:text-4xl">
                Let’s Connect
              </h4>
            </div>

            {/* Socials */}
            <div className="connect-block mt-20 flex flex-col">
              <div className="flex flex-col gap-10">
                <div>
                  <div className="mt-12 text-sm text-white/60">
                    <p>support@hgsystems.in</p>
                  </div>
                </div>

             <div className="mt-10 flex items-center gap-4">
  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/harvest-global-ssp-ltd/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="
      group flex h-10 w-10 items-center justify-center
      rounded-full
      border border-[#235738]/20
      transition-all duration-300
      hover:border-[#E46A2A]
      hover:bg-[#E46A2A]
    "
  >
    <Image
      src="/svg/linkedIn.svg"
      alt="LinkedIn"
      width={18}
      height={18}
      className="
        invert
        transition-all duration-300
        group-hover:invert-0
      "
    />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/harvestglobalssp?igsi=cHNrZ2J0MmJ6MnVn&utm_source=q"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="
      group flex h-10 w-10 items-center justify-center
      rounded-full
      border border-[#235738]/20
      transition-all duration-300
      hover:border-[#E46A2A]
      hover:bg-[#E46A2A]
    "
  >
    <Image
      src="/svg/insta.svg"
      alt="Instagram"
      width={18}
      height={18}
      className="
        invert
        transition-all duration-300
        group-hover:invert-0
      "
    />
  </a>

  {/* X */}
  <a
    href="https://x.com/HarvestG_Ssp"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
    className="
      group flex h-10 w-10 items-center justify-center
      rounded-full
      border border-[#235738]/20
      transition-all duration-300
      hover:border-[#E46A2A]
      hover:bg-[#E46A2A]
    "
  >
    <Image
      src="/svg/X.svg"
      alt="X"
      width={18}
      height={18}
      className="
        invert
        transition-all duration-300
        group-hover:invert-0
      "
    />
  </a>
</div>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="form connect-block bg-white/15 p-5 rounded-md text-white">
            <p className="mb-8 text-sm">Fill in our form:</p>

            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Name"
                className="border-b border-white/30 bg-transparent px-3 py-5 text-white outline-none placeholder:text-white/40 focus:border-white"
              />

              <input
                type="email"
                placeholder="Email address"
                className="border-b border-white/30 bg-transparent px-3 py-5 text-white outline-none placeholder:text-white/40"
              />

              <textarea
                placeholder="Your message"
                rows={4}
                className="resize-none border-b border-white/30 bg-transparent px-3 py-5 text-white outline-none placeholder:text-white/40 focus:border-white"
              />

              <button
                type="submit"
                className="mt-7 w-fit cursor-pointer rounded-md bg-white px-7 py-4 text-xs uppercase tracking-wide text-black transition-all hover:scale-105"
              >
                Submit message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectPage;
