export default function PainPoints(){

  const painPoints = [
    {
      title: 'Lacks Turing-Complete Smart Contracts',
      description: 'Bitcoin only supports Bitcoin Script with limited functionality. Unlike some other blockchain platforms like Ethereum, Bitcoin does not natively support smart contracts. This limits its ability to facilitate complex programmable transactions and decentralized applications (dApps).',
      color: 'text-orange-500'
    },
    {
      title: 'Poor Liquidity & Yield',
      description: 'The vast majority of Bitcoins are kept in wallets. The Bitcoin utilization rate is very low, and the Bitcoin rate of return is less than 0.5%.',
      color: 'text-blue-500'
    },
    {
      title: 'Dilemma of Security vs. Functionality',
      description: 'Bitcoin participants are very concerned about the security of their assets. However, they lack the functionality to utilize Bitcoin to generate value on the Bitcoin network without losing security when bridged to other networks.',
      color: 'text-purple-500'
    }
  ]

  const solutions = [
    {
      title: 'A Turing-complete Smart Contract',
      description: 'Separated private key-managed Bitcoin wallet serves as the Bitcoin native smart contract carrier, using rust-bitcoin, Miniscript, bdk and integrating client-side validation and single-use seals technology of RGB, operating within ICP\'s smart contract container, which inherits bitcoin\'s technical standards and security to give Bitcoin a Turing-complete smart contract.',
      color: 'text-orange-500'
    },
    {
      title: 'Native Bitcoin Staking & Yield',
      description: 'Combining Bitcoin smart contract solutions to create an era of native Bitcoin finance (Bi-Fi) on the Bitcoin ecosystem, including Bitcoin staking, yield markets, derivatives, and RWAs, Insurance, etc.',
      color: 'text-blue-500'
    },
    {
      title: 'Separation of private key management & signing',
      description: 'While retaining the wallet\'s functionality, provides corresponding private key management solutions. These include Threshold ECDSA/Schnorr network custody, end-to-end encrypted private keys, and hardware wallet signers. This approach maintains the security of the Bitcoin network while offering programmability.',
      color: 'text-purple-500'
    }
  ]

  return (
    <div className="bg-gray-100 py-[100px] px-[80px]">
      {/* Bitcoin Pain Points Section */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold">Bitcoin Pain Points</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {
          painPoints.map((point, index) => (
            <div key={index} className={`bg-white p-8 rounded-lg shadow-md`}>
              <h3 className={`text-2xl font-semibold mb-10 ${point.color}`}>{point.title}</h3>
              <p className="text-lg">{point.description}</p>
            </div>
          ))
        }
      </div>

      {/* How to Solve Section */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-bold">How to Solve</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {
          solutions.map((solution, index) => (
            <div key={index} className={`bg-white p-8 rounded-lg shadow-md`}>
              <h3 className={`text-2xl font-semibold mb-10 ${solution.color}`}>{solution.title}</h3>
              <p className="text-lg">{solution.description}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
};