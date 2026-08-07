const Hero = () => {
  return (
    <section
      id="hero"
      className="w-screen h-screen flex flex-col justify-center items-center "
    >
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-8xl font-bold flex gap-4">
          <span>Harvest</span>
          <span className="text-green-500">Global</span>
        </h1>
        <p className="">Invest in the Future of Food</p>
      </div>
      <div className="button flex gap-4 mt-8">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors cursor-pointer">Explore Opportunities</button>
        <button className="bg-white text-green-500 px-4 py-2 rounded-full hover:bg-green-100 transition-colors cursor-pointer">Contact Us</button>
      </div>
    </section>
  );
};

export default Hero;
