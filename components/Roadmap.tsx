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
        'Launch bitcoinOS swap protocol',
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
    <section id="solutions" className="py-[100px] px-[80px]">
      <h2 className="text-5xl font-bold text-center">Roadmap</h2>
      <div className="grid grid-cols-3 mt-[80px] gap-y-48">
        {
          roadmapData.map(({title, events}, index) => (
            <div key={index} className="relative pt-8 px-10 border-t-2 border-orange-200">
              <div className="w-4 h-4 bg-orange-400 absolute -top-2"></div>
              <h3 className="text-2xl text-bold text-slate-900">{title}</h3>
              <ul className="text-lg mt-5 text-slate-600 list-disc pl-4">
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
