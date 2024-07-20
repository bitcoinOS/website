import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br -mt-[73px] xl:-mt-[60px] bg-[#fce4bc] from-[#fce4bc] via-pink-[#f3bda5] to-purple-300 text-white pt-40 xl:py-20 h-[700px] overflow-hidden">
      <div className="flex h-full mx-6 xl:mx-24 text-left">
        <div className="z-10 relative flex h-full flex-col justify-center text-left w-[80%] xl:w-[400px] text-slate-700">
          <h1 className="text-[40px] xl:text-[80px] leading-none font-bold italic">bitcoinOS</h1>
          <p className="mt-5 text-lg xl:mt-8 xl:text-2xl font-400">A Bitcoin Native Smart Contract & Finance Layer</p>
          <a href="https://test.bitcoinos.cloud" target="_blank" className="hidden xl:flex mt-8 btn bg-slate-950 btn-neutral btn-sm h-[44px] w-[160px] text-slate-200">Stake Now</a>
        </div>
          <Image src="/bitcoin_img_1.png" alt="" className='absolute -bottom-[23%] -right-[30%] xl:-bottom-44 xl:-right-16' width={880} height={880} />
          <Image src="/bitcoin_img_2.png" alt="" className='absolute -left-[25%] top-28 xl:top-auto xl:-bottom-14 xl:left-[400px]' width={260} height={260} />
          <Image src="/bitcoin_img_3.png" alt="" className='absolute top-12 right-0 xl:top-20 xl:right-[40%]' width={160} height={160} />
      </div>
    </section>
  );
}
