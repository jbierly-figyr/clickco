function HeroVideo({ video, title, subtitle }) {
  return (
    <div className="pt-10 bg-clickco-blue-500 sm:pt-16 lg:pt-8 lg:pb-14 overflow-hidden relative font-kumbh-sans">
      <div className="absolute z-20 from-clickco-blue-500 bg-gradient-to-b w-auto min-w-full min-h-full max-w-none">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="mt-4 text-4xl tracking-tight font-bold uppercase text-white sm:mt-8 sm:text-6xl lg:mt-20 xl:text-7xl">
            <span className="block">{title}</span>
            <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-clickco-turquoise-400 to-clickco-turquoise-700 sm:pb-5">
              {subtitle}
            </span>
          </h1>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none opacity-50 aspect-video min-w-none"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="mx-auto aspect-video max-w-7xl lg:px-8 md:aspect-[3/1]"></div>
    </div>
  );
}
export { HeroVideo };
