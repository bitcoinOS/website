export default function RoadMap() {
  const roadmapData = [
    {
      title: 'Q2 2024',
      events: [
        'OS smart contract',
        'SmartWallet beta',
        'Native BTC Staking protocol Beta',
      ]
    },
    {
      title: 'Q3 2024',
      events: [
        'Launch SmartWallet',
        'Launch official Staking protocol',
        'Ordinals & Runes assets Issuance',
      ]
    },
    {
      title: 'Q4 2024',
      events: [
        'RGB assets Issuance',
        'Launch osBTC (osBTC 1:1 BTC)',
        'Launch Yield market (PT & YT)',
        'Fast-pay with ckBTC',
      ]
    },
    {
      title: 'Q1 2025',
      events: [
        'osBTC and liquidity protocol',
        'Launch BifiPal swap protocol',
        'Bitcoin ETF financial fund',
        'Network-wide airdrop',
      ]
    },
    {
      title: 'Q2 2025',
      events: [
        'RWA & Insurance ',
        'Bitcoin credits',
        'Fastnet (Bitcoin L2)',
        'Continues ecosystem operation',
        'Stablecoin & Fast-pay',
      ]
    },
  ]
  return (
    <section id="solutions" className="py-10 xl:py-[100px] px-5 xl:px-[80px] ">
      <h2 className="text-3xl xl:text-5xl font-bold text-center">Roadmap</h2>
      <div className="grid grid-cols-3 mt-6 xl:mt-[80px] xl:gap-y-48">
        {
          roadmapData.map(({title, events}, index) => (
            <div key={index} className="col-span-5 xl:col-span-1 relative pt-8 px-10 border-l-2 xl:border-l-0 xl:border-t-2 border-orange-200">
              <div className="w-4 h-4 bg-orange-400 absolute -left-2 top-10 xl:left-auto xl:-top-2"></div>
              <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
              <ul className="text-sm leading-8 xl:text-lg mt-5 text-slate-600 list-disc pl-4">
                {
                  events.map((event, index) => (
                    <li key={index}>{event}</li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </section>
  )
};
