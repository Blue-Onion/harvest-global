"use client";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate w-screen h-screen flex flex-col justify-center items-center "
    >
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/earth-observation.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1
          data-title="harvest-hero"
          className="font-display text-4xl font-normal uppercase tracking-tight text-white md:text-6xl lg:text-7xl"
          style={{ visibility: "hidden" }}
        >
          Harvest Global
        </h1>
      </div>
      <div className="hero-content mx-auto  text-center w-[70%] ">
        <h1 className="text-7xl font-bold tracking-wider text-white">
          Intelligence
          <span className="text-emerald-400 highlight-tag tracking-wider">
            Redefined.{" "}
          </span>
          <span className="text-orange-400 highlight-tag tracking-wider">
            Earth
          </span>{" "}
          <span className="tracking-wider">
            Transformed.{" "}
          </span>
        </h1>
        <p className="text-xl mt-10 text-muted-foreground">
          Sovereign GeoAI Stack. Sovereign Private AI Cloud. Edge
          Ground-Stations.
        </p>
      </div>
    </section>
  );
};

export default Hero;
