import Image from "next/image"

export default function TechSolution() {

  const dappList = ["EDX", "BTC Staking", "Yiled Market", "RWA", "Insurance", "Social", "Video Platform", "Games"]
  const bitcoinOSFetureList = ["Smart Wallet", "Staking Protocol", "Yield Protocol", "Swap Protocol"]
  const canisterList = ["Ordinals/Atomicals Canister", "RGB Canister", "BitVM Canister"]
  const infrastructureList = ["Bitcoin Canister", "ckBTC Canister"]
  return (
    <section id="Technical Solutions" className="py-[100px] px-[80px]">
      <h2 className="text-5xl font-bold text-center">Our Technical Solutions</h2>
      <div className="grid grid-cols-3 gap-16 mt-[80px]">
        <div className="col-span-2 rounded-3xl border-2 border-slate-400 space-y-4 p-5">
          <div className="rounded-2xl bg-slate-100 p-5">
            <h4 className="text-2xl text-purple-400 font-bold text-center">DApp</h4>
            <div className="mt-5 p-5 rounded-xl border border-dashed border-slate-400 bg-white">
              <h5 className="text-xl text-center">ICP Network</h5>
              <div className="flex space-x-2 mt-5">
                {
                  dappList.map((dapp, index) => (
                    <Cylinder key={dapp} className="w-28 text-xs font-bold" borderClass="border-purple-300">{dapp}</Cylinder>
                  ))
                }
              </div>
            </div>
          </div>

          <FlowLine contentClassName="h-12" className="!-mt-6 !-mb-10" />

          <div className="rounded-2xl bg-slate-100 p-5">
            <h4 className="text-2xl text-orange-400 font-bold text-center">bitcoinOS</h4>
            <div className="mt-5 rounded-xl border border-dashed border-slate-400 bg-white">
              <div className="flex divide-x divide-dashed">
                <div className="p-5">
                  <Cylinder radius="rounded-sm" bg="!bg-orange-100" className="w-28 text-xs text-orange-400 font-bold" borderClass="border-orange-300">Smart Contract Contrainer</Cylinder>
                </div>
                <div className="flex space-x-8 p-5">
                {
                  bitcoinOSFetureList.map((feature, index) => (
                    <Cylinder key={feature} className="w-28 text-xs font-bold" bg="!bg-orange-50" borderClass="border-orange-300">{feature}</Cylinder>
                  ))
                }
                </div>
              </div>
            </div>
            <div className="!-mt-2 !-mb-12 flex w-full justify-around px-20 z-20">
              <FlowLine contentClassName="h-12" />
              <FlowLine contentClassName="h-12" />
              <FlowLine contentClassName="h-12" />
            </div>
             <div className="mt-5 p-5 rounded-xl border border-dashed border-slate-400 bg-white">
              <div className="flex justify-center space-x-12">
                {
                  canisterList.map((canister) => (
                    <Cylinder key={canister} className="w-36 text-xs" bg="!bg-teal-50" borderClass="border-teal-300">{canister}</Cylinder>
                  ))
                }
              </div>
            </div> 
          </div> 

          <FlowLine contentClassName="h-12" className="!-mt-6 !-mb-10" />

          <div className="rounded-2xl bg-slate-100 p-5">
            <h4 className="text-2xl font-bold text-indigo-400 text-center">ICP Infrastructure</h4>
            <div className="mt-5 p-5 rounded-xl border border-dashed border-slate-400 bg-white">
              <div className="flex justify-center space-x-24">
                {
                  infrastructureList.map((infrastructure, index) => (
                    <Cylinder key={infrastructure} className="w-48 text-xs" radius="rounded-none" borderClass="border-indigo-400" contentClassName="!-my-2" bg="!bg-[#F2F4FE]">{infrastructure}</Cylinder>
                  ))
                }
              </div>
            </div>
          </div>

          <FlowLine contentClassName="h-12" className="!-mt-2 !-mb-10 z-20" />

          <div className="relative bg-orange-50 border-2 border-orange-300 py-8 px-10 rounded-3xl text-2xl font-bold text-center z-0">
            <Image className="absolute left-10 top-8" width={152} height={32} alt="" src="/bitcoinOS_logo_2.png"></Image>
            Bitcoin P2P Network
          </div>
        </div>

        <div className="flex flex-col justify-center divide-y-2 divide-slate-400">
          <div className="py-4 text-left">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-500 text-transparent bg-clip-text">Triple-Best Goods</h3>
            <p className="text-2xl mt-12"><span className="font-bold">bitcoinOS</span> like a airplane</p>
          </div>
          <div className="space-y-8 py-4">
            <div>
              <p className="text-5xl text-slate-900 font-bold">Bitcoin</p>
              <p className="text-2xl text-slate-900 font-400 mt-4">Best Blockchain</p>
            </div>
            <div>
              <p className="text-5xl text-slate-900 font-bold">ICP</p>
              <p className="text-2xl text-slate-900 font-400">Best Cryptography Network</p>
            </div>
            <div>
              <p className="text-5xl text-slate-900 font-bold">RGB</p>
              <p className="text-2xl text-slate-900 font-400">Best Smart Contract </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  ) 
};

// 圆柱体组件
const Cylinder = ({className, contentClassName, children, borderClass, radius = 'rounded-md', bg = 'bg-white'}: Readonly<{
  className?: string,
  borderClass?: string
  children?: React.ReactNode
  radius?: string
  contentClassName?: string
  bg?: string
}>) => {
  return (
    <div className={`flex flex-col ltr ${className}`}>
      <div className={`h-6 rounded-[50%] border-2 z-20 bg-white ${borderClass}`}></div>
      <div className={`-my-3 flex items-center justify-center pt-6 pb-2 text-center px-2 h-full border-x-2 z-10 bg-white ${borderClass} ${radius} ${bg} ${contentClassName}`}>
        {children} 
      </div>
      <div className={`h-6 rounded-[50%] border-2 z-0 ${borderClass} ${bg}`}></div>
    </div>
  )
}

const FlowLine = ({
  className,
  contentClassName
}: {
  className?: string
  contentClassName?: string
}) => {
  return (
    <div className={`relative flex flex-col justify-center items-center ${className}`}>
      <span>▲</span>
      <div className={`border-l border-r border-dashed border-slate-400 -my-1 ${contentClassName}`}></div>
      <span>▼</span>
    </div>
  )
}