import Image from "next/image";

export default function Solutions() {
  const solotions = [
    {
      title: 'DBank',
      description: [
        'BBank is a decentralized Bitcoin bank with functions similar to traditional financial banks, such as financial account management, investment portfolio, wallet management, and btc credit and other derivatives management.',
      ]
    },
    {
      title: 'SmartWallet',
      description: [
        'A smart wallet is a programmable wallet (Account Abstract) that manages Bitcoin and its associated assets, including transfers, transactions, asset issuance, interactions with other smart contracts, etc.  '
      ]
    },
    {
      title: 'Staking Pool',
      description: [
        'Participants can earn revenue by stake native Bitcoin through the Staking Pool. Users receive an equal amount of btc principal Token: osBTC, where osBTC is anchored 1:1 to native BTC.  '
      ]
    },
    {
      title: 'Yield Market',
      description: [
        'After the user staked btc, the principal token and yield token obtained by the user can be freely circulated and traded in the market, and BifiPal provides the corresponding Yield market and swap for the service.'
      ]
    }
  ]
  return (
    <section id="Product Solutions" className="bg-blue-50 py-10 xl:py-[100px] px-5 xl:px-[80px]">
      <div className="container mx-auto">
        <h2 className="text-3xl xl:text-5xl font-bold text-center">Product Solutions</h2>
        <div className="mt-6 xl:mt-[80px] grid grid-cols-2 gap-5 xl:gap-20">
          {
            solotions.map((solotion, index) => (
              <div key={index} className="col-span-2 xl:col-span-1 bg-white p-[10px] pb-5 xl:p-[20px] xl:pb-8 rounded-3xl space-y-5 xl:space-y-8">
                <Image className="w-full" src={`/product_solution_${index + 1}.svg`} width={520} height={300} alt=""></Image>
                <h3 className="text-2xl xl:text-3xl font-semibold mb-10 text-slate-900">{solotion.title}</h3>
                {
                  solotion.description.map((description, index) => (
                    <p key={index} className="text-sm xl:text-lg">{description}</p>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}
