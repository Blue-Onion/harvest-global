import React from "react";
import Image from "next/image";

const ConnectPage = () => {
  return (
    <section id="connect" className="container mx-auto">
      <div className="space-y-10 p-4 text-white">
        <h3 className="w-3/4 text-left text-2xl tracking-wider md:text-5xl">
          Your move. Whether you’ve got a wild idea, a tight deadline or just
          want to explore what’s possible we’re all ears.
        </h3>

        <h3 className="w-3/4 text-left text-2xl tracking-wider md:text-5xl">
          Drop us a line. Or better yet: let’s meet.
        </h3>
      </div>
      <div className="grid grid-cols-1 gap-16 text-white md:grid-cols-2 md:gap-24">
        {/* Left */}
        <div className="socials flex flex-col">
          <div className="flex gap-8">
            <span className="text-sm text-white/50">[ 01 ]</span>

            <div className="flex flex-col gap-10">
              <div>
                <p className="text-sm">How to connect</p>

                <div className="mt-12 space-y-1 text-sm text-white/60">
                  <p>info@harvest-global.com</p>
                  <p>+91 XX XXXX XXXX</p>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-all hover:scale-105 hover:bg-white"
                >
                  <img
                    src="/images/linkedIn.svg"
                    alt="LinkedIn"
       className="h-5 w-5 invert hover:invert-0"
                  />
                </a>

                <a
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-all hover:scale-105 hover:bg-white"
                >
                  <img
                    src="/images/insta.svg"
                    alt="Instagram"
          className="h-5 w-5 invert hover:invert-0"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="form">
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
              className="mt-7 w-fit rounded-full bg-white px-7 py-4 text-xs uppercase tracking-wide text-black transition-all hover:scale-105"
            >
              Submit message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConnectPage;
