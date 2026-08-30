"use client";

import Reveal from "@/components/ui/reveal/Reveal";
import Image from "next/image";
const Connect = () => {
  return (
    <section id="connect" className="relative space-y-20 container mx-auto">

      <div className="relative z-10 space-y-10 p-4 text-white">
        <Reveal
          variant="heading"
          as="h3"
          className="w-3/4 connect-headline text-left text-2xl tracking-wider md:text-5xl"
        >
          Have a challenge worth solving, an idea worth exploring, or a frontier
          worth building?
        </Reveal>

        <Reveal
          variant="heading"
          as="h3"
          className="w-3/4 connect-headline text-left text-2xl tracking-wider md:text-5xl"
        >
          Let’s build what comes next.
        </Reveal>
      </div>
      <Reveal
        variant="stagger"
        itemSelector=".connect-block"
        className="relative z-10 grid grid-cols-1 gap-16 text-white md:grid-cols-2 md:gap-24"
        stagger={0.14}
      >
        {/* Left */}
        <div className="socials connect-block flex flex-col">
          <div className="flex gap-8">
            <span className="text-sm text-white/50">[ 01 ]</span>

            <div className="flex flex-col gap-10">
              <div>
                <p className="text-sm">How to connect</p>

                <div className="mt-12 space-y-1 text-sm text-white/60">
                  <p>info@harvest-global.com</p>
                  <p>+91 9821206807</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 transition-all hover:scale-105 hover:bg-white"
                >
                  <Image
                    src="/svg/linkedIn.svg"
                    alt="LinkedIn"
                    height={20}
                    width={20}
                    className="invert hover:invert-0"
                  />
                </a>

                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-md bg-white/10 transition-all hover:scale-105 hover:bg-white"
                >
                  <Image
                    src="/svg/insta.svg"
                    alt="Instagram"
                    height={20}
                    width={20}
                    className="invert hover:invert-0"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="form connect-block">
          <p className="mb-8 text-sm">Fill in our form:</p>

          <form className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-white/30 bg-transparent px-3 py-5 text-white outline-none placeholder:text-white/30 focus:border-white"
            />

            <input
              type="email"
              placeholder="Email address"
              className="border-b border-white/30 bg-transparent px-3 py-5 text-white outline-none placeholder:text-white/30 focus:border-white"
            />

            <textarea
              placeholder="Your message"
              rows={4}
              className="resize-none border-b border-white/30 bg-transparent px-3 py-5 text-white outline-none placeholder:text-white/30 focus:border-white"
            />

            <button
              type="submit"
              className="mt-7 w-fit rounded-md bg-white px-7 py-4 text-xs uppercase tracking-wide text-black transition-all hover:scale-105"
            >
              Submit message
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  );
};

export default Connect;