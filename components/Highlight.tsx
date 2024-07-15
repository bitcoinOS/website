export default function Highlight() {
  const paragraphs = [
    {
      className: 'col-span-4 bg-orange-100/30 border-2 border-orange-300',
      titleColor: 'text-orange-500',
      title: 'The 1st Bitcoin native smart contract',
      descriptions: [
        'The innovation of using Bitcoin native smart contracts creates a new paradigm for Bitcoin applications.',
        'bitcoinOS utilizes this innovation to establish a bitcoin finance (bi-fi) layer, which bridges to all of the Bitcoin ecosystem, as well as the real world, such as the various btc-ETF funds around the world.'
      ],
    },
    {
      className: 'col-span-3 bg-blue-100/60 border-2 border-blue-300',
      titleColor: 'text-blue-500',
      title: 'The 1st Bitcoin native smart contract',
      descriptions: [
        'The innovation of using Bitcoin native smart contracts creates a new paradigm for Bitcoin applications.',
        'bitcoinOS utilizes this innovation to establish a bitcoin finance (bi-fi) layer, which bridges to all of the Bitcoin ecosystem, as well as the real world, such as the various btc-ETF funds around the world.'
      ],
    },
    {
      className: 'col-span-3 bg-purple-100/50 border-2 border-purple-300',
      titleColor: 'text-purple-500',
      title: 'Inter-Chain & AI',
      descriptions: [
        'bitcoinOS uses ICP Chain Fusion technology to achieve inter-chain and interoperability among major blockchains, and share the liquidity of various assets in the Ethereum and Solana ecosystems.',
        'With WebAssembly runtime,  bitcoinOS enables facilitate innovative AI applications in the Bitcoin ecosystem.'
      ],
    },
  ]
  return (
    <section id="Highlight" className="py-[100px] px-[80px]">
      <div className="grid grid-cols-6 gap-8">
      <div className="col-span-2 bg-slate-100/30 border-2 border-slate-200 p-8 rounded-3xl space-y-8">
        <h3 className="text-5xl font-bold">Highlight</h3>
      </div>
      {
        paragraphs.map((paragraph, index) => (
          <div key={index} className={`p-8 rounded-3xl space-y-8 ${paragraph.className}`}>
            <h3 className={`text-3xl font-semibold mb-10 ${paragraph.titleColor}`}>{paragraph.title}</h3>
            {
              paragraph.descriptions.map((description, index) => (
                <p key={index} className="text-lg">{description}</p>
              ))
            }
          </div>
        ))
      }
      </div>
    </section>
  ) 
};
