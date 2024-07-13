import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-br -mt-[60px] bg-[#fce4bc] from-[#fce4bc] via-pink-[#f3bda5] to-purple-300 text-white py-20 h-[700px] overflow-hidden">
      <div className="flex h-full mx-24 text-left">
        <div className="z-10 flex h-full flex-col justify-center w-[400px]">
          <h1 className="text-[80px] leading-none font-bold italic">bitcoinOS</h1>
          <p className="mt-8 text-2xl font-400">A Bitcoin Native Smart Contract & Finance Layer</p>
          <button className="mt-8 btn bg-slate-950 btn-neutral btn-sm h-[44px] w-[160px] text-slate-200">Stake Now</button>
        </div>
        <div className="w-2/3 z-0">
          <Image src="/bitcoin_img_1.png" alt="" className='absolute -bottom-44 -right-16' width={880} height={880} />
          <Image src="/bitcoin_img_2.png" alt="" className='absolute -bottom-14 left-[400px]' width={260} height={260} />
          <Image src="/bitcoin_img_3.png" alt="" className='absolute top-20 right-[40%]' width={160} height={160} />
        </div>
      </div>
    </section>
  );
}
