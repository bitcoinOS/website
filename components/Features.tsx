"use client";
import Image from "next/image";
import { SVGProps, useEffect, useState } from "react";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(2)
  const list = [
    {
      title: "Bitcoin Native Smart Contract",
      description: [
        "The first native Turing-complete smart contract solution for Bitcoin.",
        "Bitcoin native smart contracts follow BIPs standard and use Bitcoin native techs such as PSBT, Miniscript, Descriptor, RGB, etc.",
        "A Bitcoin native smart contract as an Account Abstract(AA) of Bitcoin"
      ]
    },
    {
      title: "Finance layer for bitcoin(btc)",
      description: [
        "bitcoin as digital gold",
        "bitcoin as M0 of crypto world",
        "Decentralized Bank of bitcoin",
        "bitcoin-based stablecoin",
        "bitcoin native staking/loan",
        "bitcoin fast pay with ckBTC",
        "bitcoin derivatives ",
      ]
    },
    {
      title: "Finance layer for Bitcoin(BTC)",
      description: [
        "Ordinals assets Issuance",
        "Runes assets Issuance",
        "RGB assets Issuance",
        "RWA with Bitcoin Binding",
        "The Bridge between Bitcoin and L2 ",
        "osBTC 1:1 btc (Principal Token)",
        "BOS for Yield Token",
      ]
    },
    {
      title: "100% on chain with ICP",
      description: [
        "bitcoinOS runs on the best cryptography network",
        "Chain-Key & Threshold Cryptography",
        "Modular blockchain network",
        "Smart Contract Container",
        "WebAssembly",
        "Best privacy",
      ]
    },
  ]
  const [isMouseEnter, setIsMouseEnter] = useState(false)
  const handleMouseEnter = (index: number) => {
    setIsMouseEnter(true)
    setActiveIndex(index)
  }

  const handleMouseLeave = () => setIsMouseEnter(false)

  const autoPlay = () => {
    const interval = setInterval(() => {
      if (isMouseEnter) return
      setActiveIndex((prev) => (prev + 1) % list.length)
    }, 5000)
    return () => clearInterval(interval)
  }

  useEffect(() => {
    const clear = autoPlay()
    return () => clear()
  })

  return (
    <div className="flex flex-col items-center bg-white py-10 xl:py-[100px]">
      <h2 className="text-3xl xl:text-5xl font-bold">What&apos; bitcoinOS</h2>
      <p className="text-sm xl:text-xl text-gray-600 font-400 italic mt-2">Make bitcoin the center of finance</p>
      <div className="flex flex-row w-full mt-6 xl:mt-16 px-5 xl:px-[80px]">
        <div className="hidden xl:block xl:w-1/2 space-y-4 font-500 text-2xl">
          {
            list.map(({ title }, index) => (
              <div onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave} key={title} className={`group cursor-pointer h-[100px] border text-black p-8 rounded-3xl flex items-center justify-between ${(activeIndex === index) ? "bg-orange-300 border-orange-400" : "border-slate-300"}`}>
                <span>{title}</span>
                <BiArrowRightCircleFill className={`text-5xl delay-200 duration-300 text-slate-950 mr-4 opacity-0 transition-all group-hover:mr-0 group-hover:opacity-100 ${activeIndex === index && "mr-0 opacity-100"}`} />
                {/* <button className="bg-black text-white rounded-full p-2">&#x27A4;</button> */}
              </div>
            ))
          }
        </div>
        <div onMouseEnter={() => setIsMouseEnter(true)} onMouseLeave={() => setIsMouseEnter(false)} className="xl:relative w-full space-y-4 xl:space-y-0 xl:w-1/2 xl:border xl:border-orange-300 rounded-3xl xl:ml-10 bg-orange-100/10 flex flex-col">
          {
            list.map(({ title, description }, index) => (
              <div key={title} className={`relative w-full bg-orange-100/10 border border-orange-300 rounded-3xl xl:border-none xl:absolute xl:h-full top-0 p-12 flex flex-col transition-all duration-300 delay-200 ${activeIndex === index ? "xl:opacity-100 xl:ml-0" : "xl:opacity-0 xl:-ml-4"}`}>
                <h2 className="text-xl font-bold">{title}</h2>
                <ol className="flex-1 flex flex-col justify-between list-decimal list-inside mt-10 text-lg">
                  {
                    description.map((desc) => (
                      <li key={desc} className="my-auto">{desc}</li>
                    ))
                  }
                </ol>
                <Image className="absolute bottom-0 right-4" alt="" height={240} width={180} src="/bitcoin_shape.png"></Image>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}


export function BiArrowRightCircleFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"></path></svg>
  )
}