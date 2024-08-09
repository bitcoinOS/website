export default function Advantages() {

  // const advantageList = [
  //   'Retaining the security of bitcoin network, user assets are always on top of BTC main chain.',
  //   'Reduced transaction costs with single pool FlashSwap model and user transactions on L2.',
  //   'Increase the possibility and convenience for users to get additional income.',
  //   'Built on the BTC chain, and the DeFi ecosystem in BTC is in a period of rapid rise.',
  //   'Release of Staking BTC liquidity, increased on-chain funding freedom and revenue options.',
  // ]

  const advantageList = [
    {
      icon: SecurityIcon,
      description: 'Retaining the security of bitcoin network, user assets are always on top of BTC main chain.'
    },
    {
      icon: TransactionIcon,
      description: 'Reduced transaction costs with single pool FlashSwap model and user transactions on L2.'
    },
    {
      icon: IncomeIcon,
      description: 'Increase the possibility and convenience for users to get additional income.'
    },
    {
      icon: BtcIcon,
      description: 'Built on the BTC chain, and the DeFi ecosystem in BTC is in a period of rapid rise.'
    },
    {
      icon: LiquidityIcon,
      description: 'Release of Staking BTC liquidity, increased on-chain funding freedom and revenue options.'
    },
  ]

  return (
    <section id="Our Advantages" className="py-10 xl:py-[100px] px-5 xl:px-[80px] bg-gradient-to-b from-[#FFE9CF] to-[#F6E7FF]">
      <h2 className="text-3xl xl:text-5xl font-bold text-center">Our Advantages</h2>
      <div className="grid grid-cols-5 gap-2 mt-6 xl:mt-[80px]">
        {
          advantageList.map((advantage, index) => (
            <div key={index} className="col-span-5 xl:col-span-1 flex xl:flex-col gap-4 xl:gap-8 p-6 xl:pt-14 xl:pb-24 bg-white rounded-3xl">
              <div className="w-12 flex xl:w-auto">
                <advantage.icon />
              </div>
              <p className="text-left text-base xl:text-xl text-slate-600">{advantage.description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
};

const SecurityIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M51.1679 46.4453C51.1552 46.4644 51.1431 46.4839 51.1318 46.5039C50.3099 47.9421 48.8968 49.5305 47.1377 51.1506C45.3893 52.761 43.3482 54.3585 41.3198 55.8204C37.2847 58.7287 33.354 61.0622 32 61.8472C30.646 61.0622 26.7153 58.7287 22.6802 55.8204C20.6518 54.3585 18.6107 52.761 16.8623 51.1506C15.1032 49.5305 13.6901 47.9421 12.8682 46.5039C12.8569 46.4839 12.8448 46.4644 12.8321 46.4453C12.0337 45.2477 11.139 43.0729 10.2258 40.3047C9.32244 37.5666 8.43084 34.3436 7.61515 31.119C5.98583 24.6779 4.67219 18.282 4.18497 15.8414C4.18624 15.8402 4.18784 15.839 4.18983 15.8377C4.19368 15.8353 4.19975 15.8325 4.20953 15.8308C17.2059 13.6967 29.1567 4.58532 31.9887 2.30453L31.3673 1.53288L31.9887 2.30453C31.9972 2.29772 32.0079 2.29353 32.0207 2.29332C32.0332 2.29311 32.0418 2.29675 32.0481 2.30149L32.653 1.50517L32.0481 2.30149C33.5413 3.43568 37.4179 6.26876 42.4359 9.08766C47.4425 11.9001 53.6484 14.7348 59.7911 15.8193C59.7965 15.8203 59.8009 15.8216 59.8044 15.823C59.8076 15.8243 59.8101 15.8256 59.8121 15.8269C59.8142 15.8282 59.8158 15.8295 59.8172 15.8307C59.332 18.2616 58.0184 24.6594 56.3883 31.1052C55.5723 34.332 54.6801 37.5581 53.7762 40.2989C52.8623 43.0698 51.9669 45.2468 51.1679 46.4453Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    <path d="M23 26L32 29V41L23 37V26Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    <path d="M32 29L41 26V37L32 41V29Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    <path d="M23 26L32 23L41 26L32 29L23 26Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
  </svg>
)

const TransactionIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.5 37.5L24.7228 38.1292L25.2472 38.777L25.9789 38.3779L25.5 37.5ZM36.5 31.5L37.2894 30.8861L36.7674 30.215L36.0211 30.6221L36.5 31.5ZM46.876 45.9923C47.424 46.0608 47.9238 45.6721 47.9923 45.124L49.1086 36.1935C49.1771 35.6455 48.7884 35.1457 48.2403 35.0772C47.6923 35.0087 47.1925 35.3974 47.124 35.9455L46.1318 43.8837L38.1935 42.8914C37.6455 42.8229 37.1457 43.2116 37.0772 43.7597C37.0087 44.3077 37.3974 44.8075 37.9455 44.876L46.876 45.9923ZM16.2228 27.6292L24.7228 38.1292L26.2772 36.8708L17.7772 26.3708L16.2228 27.6292ZM25.9789 38.3779L36.9789 32.3779L36.0211 30.6221L25.0211 36.6221L25.9789 38.3779ZM35.7106 32.1139L46.2106 45.6139L47.7894 44.3861L37.2894 30.8861L35.7106 32.1139Z" fill="black" />
    <rect x="3" y="7" width="58" height="52" rx="7" stroke="black" strokeWidth="2" />
    <rect x="2.5" y="16.5" width="59" height="1" stroke="black" />
  </svg>

)

const IncomeIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 15V51C1 55.4183 4.58172 59 9 59H55C59.4183 59 63 55.4183 63 51V23C63 18.5817 59.4183 15 55 15H11" stroke="black" strokeWidth="2" strokeLinecap="round" />
    <path d="M47 15V13C47 8.58172 43.4183 5 39 5H9C4.58172 5 1 8.58172 1 13V15" stroke="black" strokeWidth="2" />
    <path d="M33 37C33 33.134 36.134 30 40 30H63V44H40C36.134 44 33 40.866 33 37Z" stroke="black" strokeWidth="2" />
    <circle cx="40" cy="37" r="2" stroke="black" strokeWidth="2" />
  </svg>
)

const BtcIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_192_980)">
      <path d="M1.92895 24.5046L1.92902 24.5044C6.06836 7.89581 22.891 -2.21264 39.4959 1.92793L39.4959 1.92794C56.1044 6.06857 66.2125 22.8907 62.0724 39.4989C57.93 56.1056 41.1088 66.2129 24.4979 62.0718C7.8942 57.9311 -2.21419 41.1103 1.92895 24.5046Z" stroke="black" strokeWidth="2" />
      <path d="M46.1049 27.441C46.7418 23.1823 43.4991 20.8939 39.0658 19.3667L40.5035 13.5987L36.9929 12.7236L35.5924 18.3396C34.6684 18.1094 33.7213 17.8925 32.7786 17.6779L34.188 12.0245L30.6795 11.1494L29.24 16.9165C28.476 16.7423 27.7262 16.5707 26.9978 16.3894L27.0013 16.3716L22.1595 15.1627L21.2253 18.9125C21.2253 18.9125 23.8302 19.5094 23.7751 19.5467C25.1973 19.9019 25.4538 20.8427 25.4111 21.5885L23.7733 28.1596C23.8711 28.185 23.9978 28.2201 24.1382 28.277C24.0209 28.2476 23.896 28.2161 23.7675 28.185L21.4715 37.3894C21.2973 37.8214 20.856 38.4699 19.8622 38.2236C19.8973 38.2743 17.3089 37.5868 17.3089 37.5868L15.5667 41.605L20.1355 42.7441C20.9849 42.957 21.8191 43.1792 22.6386 43.3899L21.1866 49.2241L24.6938 50.0992L26.1324 44.3272C27.0915 44.5867 28.0213 44.8272 28.9315 45.0534L27.4978 50.7983L31.0089 51.6734L32.4622 45.8503C38.4502 46.9828 42.9529 46.5259 44.8471 41.1112C46.3746 36.7512 44.7715 34.2361 41.6213 32.5956C43.9151 32.0667 45.644 30.5574 46.1049 27.441ZM38.0831 38.6903C36.9969 43.0508 29.6564 40.6934 27.2751 40.1019L29.2031 32.3734C31.5831 32.9667 39.2164 34.1427 38.0831 38.6903ZM39.1675 27.3783C38.1782 31.3445 32.0675 29.329 30.0853 28.8347L31.8329 21.825C33.8146 22.3192 40.1991 23.2414 39.1675 27.3783Z" stroke="black" strokeWidth="2" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_192_980">
        <rect width="64" height="64" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

const LiquidityIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31.8229 1.9743C31.8228 1.9741 31.8261 1.97515 31.8332 1.97803C31.8265 1.97593 31.823 1.97449 31.8229 1.9743ZM32 2.06724C32.0192 2.07886 32.04 2.09174 32.0624 2.10599C32.2828 2.24617 32.5851 2.47124 32.9657 2.78806C33.7227 3.41828 34.7196 4.35286 35.8774 5.54149C38.19 7.91573 41.0985 11.2567 43.9469 15.0958C46.7965 18.9367 49.5704 23.2551 51.628 27.5854C53.6917 31.9284 55 36.2108 55 40C55 52.2267 44.337 62 32 62C19.6629 62 9 52.2267 9 40C9 36.2108 10.3083 31.9284 12.372 27.5854C14.4296 23.2551 17.2035 18.9367 20.0531 15.0958C22.9015 11.2567 25.81 7.91573 28.1226 5.54149C29.2804 4.35286 30.2773 3.41828 31.0343 2.78806C31.4149 2.47124 31.7172 2.24617 31.9376 2.10599C31.96 2.09174 31.9808 2.07886 32 2.06724ZM32.1668 1.97802C32.1738 1.97516 32.1772 1.97411 32.1771 1.9743C32.177 1.97449 32.1735 1.97592 32.1668 1.97802Z" stroke="black" strokeWidth="2" />
    <path d="M50 38C50 47.9411 41.9411 56 32 56" stroke="black" strokeWidth="2" />
  </svg>
)
