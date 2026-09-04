import Link from "next/link";

const Vision = () => {
  return (
    <section
      id="vision"
      className="
        relative min-h-screen w-full overflow-hidden
        bg-[#020914]
        bg-[url('/images/site-bg/bg8.png')]
        bg-cover bg-center bg-no-repeat
      "
    >
      <div
        className="
          relative z-20 mx-auto flex min-h-screen
          max-w-5xl flex-col items-center justify-center
          px-5 py-24 text-center
        "
      >
        {/* Eyebrow */}
        <div className="mb-9 flex items-center gap-9">
          <span className="h-px w-12 bg-blue-500/80 md:w-14" />

          <p
            className="
              text-xs font-medium uppercase
              tracking-[0.3em] text-blue-400
              md:text-sm
            "
          >
            Vision HG
          </p>

          <span className="h-px w-12 bg-blue-500/80 md:w-14" />
        </div>

        {/* Heading */}
        <h2
          className="
            max-w-4xl
            text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.08]
            tracking-[-0.035em] text-white
          "
        >
          Real time
          <br />
          Earth and Weather Intelligence
          <br />
          at scale <span className="text-[#4b8ff5]">from core and edge</span>
          <br />
          with strategic investments in
          <br />
          <span className="text-[#d99a45]">
            sovereign enterprise AI DCs and
          </span>
          <br />
          <span className="text-[#d99a45]">Ground Segment infrastructure</span>
        </h2>

        {/* Divider */}
        <div className="my-10 h-px w-24 bg-blue-500/80" />

        {/* Description */}
        <p
          className="
            max-w-2xl
            text-sm leading-7
            text-white/80
            sm:text-base
            md:text-lg
            md:leading-8
          "
        >
          Harvest Global SSP Pvt Ltd (HG Systems) builds enterprise-grade GeoAI
          infrastructure, foundation models and sovereign AI environments for
          governments, industries and research institutions.
        </p>
      </div>
    </section>
  );
};

export default Vision;
