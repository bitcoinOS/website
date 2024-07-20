import Image from "next/image"

export default function TechSolution() {

  const dappList = ["EDX", "BTC Staking", "Yiled Market", "RWA", "Insurance", "Social", "Video Platform", "Games"]
  const bitcoinOSFetureList = ["Smart Wallet", "Staking Protocol", "Yield Protocol", "Swap Protocol"]
  const canisterList = ["Ordinals/Atomicals Canister", "RGB Canister", "BitVM Canister"]
  const infrastructureList = ["Bitcoin Canister", "ckBTC Canister"]
  return (
    <section id="Technical Solutions" className="py-10 xl:py-[100px] px-5 xl:px-[80px]">
      <h2 className="text-3xl xl:text-5xl font-bold text-center">Our Technical Solutions</h2>
      <div className="flex flex-col flex-col-reverse xl:grid xl:grid-cols-3 xl:gap-16 mt-8 xl:mt-[80px]">
        <div className="xl:col-span-2 rounded-3xl space-y-4">
          <Image src="/technical_solutions.png" className="w-full" width={780} height={ 982} alt="" />
        </div>

        <div className="xl:col-span-1 flex flex-col justify-center divide-y divide-slate-400 text-center xl:text-left">
          <div className="py-4">
            <h3 className="text-2xl xl:text-4xl font-bold bg-gradient-to-r from-[#A134FF] to-[#FF991D] text-transparent bg-clip-text">Triple-Best Goods</h3>
            <p className="text-xl xl:text-2xl mt-5 xl:mt-12"><span className="font-bold">bitcoinOS</span> like a airplane</p>
          </div>
          <div className="space-y-8 py-8 xl:py-4">
            <div>
              <p className="text-3xl xl:text-5xl text-slate-900 font-bold">Bitcoin</p>
              <p className="text-base xl:text-2xl text-slate-900 font-400 mt-4">Best Blockchain</p>
            </div>
            <div>
              <p className="text-3xl xl:text-5xl text-slate-900 font-bold">ICP</p>
              <p className="text-base xl:text-2xl text-slate-900 font-400">Best Cryptography Network</p>
            </div>
            <div>
              <p className="text-3xl xl:text-5xl text-slate-900 font-bold">RGB</p>
              <p className="text-base xl:text-2xl text-slate-900 font-400">Best Smart Contract </p>
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