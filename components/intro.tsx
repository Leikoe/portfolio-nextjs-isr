const Intro = () => {
  return (
    <>
      <div className="flex flex-col-reverse sm:flex-row items-center pt-12">
        <div className="flex flex-col pr-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
            Léo Paillé
          </h1>
          <h2 className="text-gray-700 dark:text-gray-200 mb-4">
            Backend developer based in Bordeaux,France
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-16">
            I'm a french backend developper. I started algorithms at 8 and
            started coding at 10 years old.
          </p>
        </div>
        <div
          className="flex basis-1/3"
          style={{ imageRendering: "crisp-edges" }}
        >
          <img
            src="/favicon/favicon.ico"
            alt="My profile picture"
            height={176}
            width={176}
          />
          {/* <Image
            alt="My profile picture"
            height={176}
            width={176}
            src="/favicon/favicon.ico"
            sizes="30vw"
            quality={100}
            priority
          /> */}
        </div>
      </div>
    </>
  );
};

export default Intro;
