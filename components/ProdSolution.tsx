import Image from "next/image";

export default function Solutions() {
  const solotions = [
    {
      title: 'OS Smart Contract',
      description: [
        'Android is the application layer of the Linux-centered mobile Internet, bitcoinOS is the financial layer of the Bitcoin-centered value network.',
        'OS smart contracts are the steward to bitcoinOS, and are the entry point for managing bitcoin assets.'
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
        'After the user staked btc, the principal token and yield token obtained by the user can be freely circulated and traded in the market, and bitcoinOS provides the corresponding Yield market and swap for the service.'
      ]
    }
  ]
  return (
    <section id="solutions" className="bg-blue-50 py-[100px] px-[80px]">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center">Product Solutions</h2>
        <div className="mt-[80px] grid grid-cols-2 gap-20">
          {
            solotions.map((solotion, index) => (
              <div key={index} className="bg-white p-[20px] pb-8 rounded-3xl space-y-8">
                <Image className="w-full" src={`/solution_img_${index + 1}.png`} width={520} height={300} alt=""></Image>
                <h3 className="text-3xl font-semibold mb-10 text-slate-900">{solotion.title}</h3>
                {
                  solotion.description.map((description, index) => (
                    <p key={index} className="text-lg">{description}</p>
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