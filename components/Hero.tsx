"use client";
import AnimateButton from "./ui/AnimateButton";
import { Button } from "./ui/button";

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

        {/* <div className="absolute inset-0 bg-black/60" /> */}

        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black" /> */}
      </div>
      <div className="flex flex-col gap-7 justify-center items-center ">
        <div className="tagline flex items-center flex-col justify-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl max-w-3xl  flex-col text-center text-[#FBFAF3] font-bold flex gap-4">
       AI FOR EARTH.
<span>

              BUILT FOR SCALE.
</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-center mt-4 ">
            Building strategic partnerships with leading research institutions
            and technology partners.
          </p>
        </div>
        <h3 className="text-4xl text-center font-semibold text-white bg-clip-text tracking-wider ">
          Research. Collaborate. Scale.
        </h3>
      </div>
      <div className="button flex gap-4 mt-8">
        <div className="">
          <AnimateButton
            size="lg"
            radius={21}
            tint="#ffffff"
            tintOpacity={0}
            blur={0}
            textColor="#f5f5f5"
            lineColor="#ffffff"
            baseColor="#525252"
            intensity={1}
            shineSize={10}
            shineFade={40}
            thickness={1}
            speed={2}
            followMouse
            proximity={250}
            autoAnimate={false}
            onClick={() => console.log("clicked")}
          >
            Get Started
          </AnimateButton>
        </div>
        <Button className="bg-orange-500 shadow-2xl px-3 py-6 shadow-orange-500/40  text-md">
          Contact
        </Button>
      </div>
    </section>
  );
};

export default Hero;
