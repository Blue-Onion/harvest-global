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
          <div className="pointer-events-none absolute inset-0 z-0">
                <TopographicBackground />
              </div>
        {/* Content */}
      </div>
    </section>
  );
};

export default Vision;