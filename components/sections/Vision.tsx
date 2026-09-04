import Link from "next/link";

const Vision = () => {
  return (
    <section
      id="vision"
      className="
        relative min-h-screen w-full overflow-hidden
        bg-[#020914]
        bg-[url('/images/site-bg/bg-10.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020914]/95 via-[#020914]/70 to-transparent" />

      {/* Content */}
      <div
        className="
          relative z-10 mx-auto flex min-h-screen w-full
          max-w-[1600px] items-center
          px-6 py-28
          sm:px-10
          md:px-16
          lg:px-20
          xl:px-24
        "
      >
        <div
          className="
            w-full 
            text-left
     max-w-3xl
          "
        >
          {/* Eyebrow */}
          <div className="mb-7 flex items-center gap-4 sm:mb-9 sm:gap-5">
            <p
              className="
                text-[10px] font-medium uppercase
                tracking-[0.35em] text-white/60
                sm:text-xs
              "
            >
              Vision HG
            </p>

            <span className="h-px w-12 bg-[#4b8ff5] sm:w-14" />
          </div>

          {/* Heading */}
          <h2
            className="
            text-2xl
            lg:text-5xl
        md:text-4xl
        font-bold
            "
          >
            Real time


            Earth and Weather


            Intelligence{" "}
            <span className="text-[#4b8ff5]">at scale</span>

<br/>
            <span className="text-white/70">
              from core and edge with
            </span>


            <span className="text-white/70">
              strategic investments in
            </span>


<br/>
            <span className="text-[#d99a45]">
              sovereign enterprise AI DCs
            </span>

            <span className="text-[#d99a45]">
              and Ground Segment
            </span>{" "}
            <span className="text-[#d99a45]">
              infrastructure.
            </span>
          </h2>

          {/* Small divider */}
          <div className="my-7 h-px w-12 bg-[#35d6a1] sm:my-9 sm:w-14" />

          {/* Description */}
          <p
            className="
              max-w-[560px]
              text-lg
              md:text-2xl
              text-white/70
            "
          >
            Harvest Global SSP Pvt Ltd (HG Systems) builds
            enterprise-grade GeoAI infrastructure, foundation
            models and sovereign AI environments for governments,
            industries and research institutions.
          </p>


        </div>
      </div>

      {/* Right-side navigation — desktop only */}
      <div
        className="
          absolute right-10 top-1/2 z-20 hidden
          -translate-y-1/2
          lg:block
        "
      >

      </div>

      {/* Bottom-right statement — desktop */}
      <div
        className="
          absolute bottom-12 right-10 z-20
          hidden lg:block
        "
      >

      </div>
    </section>
  );
};

export default Vision;