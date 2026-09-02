import Link from "next/link";
import TopographicBackground from "../ui/Topography";

const Vision = () => {
  return (
    <section
      id="vision"
      className="relative min-h-screen w-full bg-[url('/images/site-bg/bg2.png')] bg-cover bg-center bg-no-repeat"
    >
      <div
        className="
          relative
          min-h-screen
          bg-white
          px-5 py-24
          text-black
          md:h-screen
          md:overflow-hidden
          [clip-path:polygon(0_0,100%_12%,100%_88%,0_100%)]
        "
      >
        {/* Topographic Background */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-60">
          <TopographicBackground />
        </div>

        {/* Content */}
        <div className="container relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] flex-col justify-center">

          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">

            {/* Main Heading */}
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#235738]">
                Vision HG
              </p>

              <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-black md:text-7xl lg:text-5xl">
                Building Earth&apos;s
                <br />
                <span className="text-[#235738]">Intelligence Layer.</span>
              </h2>
            </div>

            {/* Vision Statement */}
            <div className="max-w-xl lg:pb-2">
              <p className="text-xl font-medium leading-relaxed text-black md:text-lg">
                Real-time Earth and Weather Intelligence at scale - from core
                to edge - with strategic investments in sovereign enterprise
                AI data centers and ground segment infrastructure.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px w-full bg-black/10" />

          {/* Platform Content */}
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

            {/* Description */}
            <div className="max-w-4xl">
              <p className="mb-5 text-lg font-semibold text-[#235738]">
                Unified GeoAI Stack · Sovereign AI Private Cloud
              </p>

              <p className="text-lg leading-relaxed text-black/70 md:text-xl">
                Harvest Global SSP Pvt Ltd (HG Systems) pioneering Earth
                Intelligence integrates satellite imagery, climate and
                weather data, ground observations and geospatial intelligence
                into an enterprise-grade GeoAI stack, enabling governments
                and industries to move from fragmented data to predictive,
                actionable intelligence.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-black/70 md:text-xl">
                We build Geofoundational AI models and sovereign cloud
                infrastructure empowering governments, insurance providers,
                and global enterprises to address climate resilience,
                agriculture risk, and spatial governance.
              </p>
            </div>

            {/* CTA */}
            <Link
  href="#platform"
  className="
    group
    inline-flex
    items-center
    gap-5
    rounded-full
    bg-[#235738]
    px-7 py-4
    text-sm
    font-semibold
    uppercase
    tracking-wider
    text-white
    transition-all
    duration-300
    hover:bg-[#E46A2A]
    hover:px-9
  "
>
  Explore Platform

  <span
    className="
      flex h-8 w-8
      items-center justify-center
      rounded-full
      bg-white/10
      transition-all duration-300
      group-hover:bg-white/20
      group-hover:translate-x-1
    "
  >
    →
  </span>
</Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Vision;