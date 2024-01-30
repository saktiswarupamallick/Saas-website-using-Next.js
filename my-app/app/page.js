import Image from 'next/image';

function HeroSection() {
  return (
    <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col">
      
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
      <p className="text-center text-white">Transform Your Business with Seamless SaaS Solutions - Elevate Efficiency, Amplify Productivity!</p>
      
      <div className="bg-gradient-to-r from-violet-800 to-zinc-50 text-transparent bg-clip-text relative">
        <h1 className="text-6xl font-bold text-center md:text-[300px]">morsystems</h1>
      </div>

      <div className="flex justify-center items-center relative md:mt-[-70px]">
        <Image
          src="/assets/preview.png"
          alt="banner image"
          height={1200}
          width={1200}
          className="rounded-tl-2xl rounded-tr-2xl border-2 border-muted"
        />
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
      </div>
    </section>
  );
}

export default HeroSection;
