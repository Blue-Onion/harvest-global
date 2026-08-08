const Hero = () => {
  return (
    <section
      id="hero"
      className="w-screen h-screen flex flex-col justify-center items-center "
    >
      <div className="flex flex-col justify-center items-center ">
        <h1 className=" text-6xl md:text-8xl font-bold flex gap-4">
          <span className="text-emerald-600">Harvest</span>
          <span className="text-orange-500">Global</span>
        </h1>
        <p className="">Invest in the Future of Food</p>
      </div>
      <div className="button flex gap-4 mt-8">
        <button className="bg-emerald-500 shadow-2xl shadow-emerald-500/40 text-white font-bold px-4 py-2 rounded-full hover:bg-green-600 transition-colors cursor-pointer text-md md:text-xl">Explore Opportunities</button>
        <button className="bg-orange-500 shadow-2xl shadow-orange-500/40 text-white font-bold px-4 py-2 rounded-full transition-colors cursor-pointer">Contact Us</button>
      </div>
    </section>
  );
};

export default Hero;
