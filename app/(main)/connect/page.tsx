"use client";

import Image from "next/image";

const ConnectPage = () => {
  return (
    <section id="connect" className="relative bg-black mx-auto h-screen overflow-hidden">
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
              <p className="text-left text-2xl font-semibold md:text-4xl">
   Build 
              </p>

              <h4 className="text-left text-2xl tracking-wider md:text-4xl">
                Let’s build what comes next.
              </h4>
            </div>

            {/* Socials */}
            <div className="connect-block mt-20 flex flex-col">
              <div className="flex flex-col gap-10">
                <div>
                  <p className="text-sm">How to connect</p>

                  <div className="mt-12 text-sm text-white/60">
                    <p>support@hgsystems.in</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/in/harvest-global-3bba22220/?skipRedirect=true"
                    className="group flex h-12 w-12 items-center justify-center rounded-md bg-white/10 transition-all hover:scale-105 hover:bg-white"
                  >
                    <Image
                      height={20}
                      width={20}
                      src="/svg/linkedIn.svg"
                      alt="LinkedIn"
                      className="invert transition-all group-hover:invert-0"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/harvestglobalssp?igsi=cHNrZ2J0MmJ6MnVn&utm_source=q"
                    className="group flex h-12 w-12 items-center justify-center rounded-md bg-white/10 transition-all hover:scale-105 hover:bg-white"
                  >
                    <Image
                      height={20}
                      width={20}
                      src="/svg/insta.svg"
                      alt="Instagram"
                         className="invert transition-all group-hover:invert-0"
                    />
                  </a>

                  <a
                    href="https://x.com/HarvestG_Ssp"
                    className="group flex h-12 w-12 items-center justify-center rounded-md bg-white/10 transition-all hover:scale-105 hover:bg-white"
                  >
                    <Image height={20} width={20} src="/svg/X.svg"    className="invert transition-all group-hover:invert-0" alt="X" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="form connect-block text-white">
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
