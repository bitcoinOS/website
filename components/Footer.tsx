import Image from "next/image";
import BifiPalLogo from '@/public/BifiPal-logo.png';

export default function Footer() {
  return (
    <footer className="flex flex-col pt-10 pb-5 xl:pt-[100px] xl:pb-6 px-5 xl:px-[80px]">
      <div className="w-full py-5 xl:py-16 xl:px-20 flex flex-col gap-8 xl:flex-row justify-between items-center border border-slate-200 rounded-3xl">
        <div>
          <Image className='h-8 w-auto m-auto xl:ml-0' src={BifiPalLogo} alt="" />
          <p className="text-xs text-slate-800 italic mt-3">Unlocking the DeFi Gaming Paradigm for Bitcoin</p>
        </div>
        <div className="flex space-x-5 xl:space-x-10 text-xl xl:text-4xl">
          <a href="https://github.com/bitcoinOS/website" target="_blank">
            <GithubIcon />
          </a>
          <a href="https://twitter.com/BifiPal" target="_blank">
            <TwitterIcon />
          </a>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-slate-800">Copyright © 2024 BifiPal. All rights reserved.</p>
    </footer>
  )
};

const GithubIcon = () => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_376_422)">
        <path d="M20 0C31.05 0 40 8.95 40 20C39.9989 24.1905 38.6838 28.2752 36.2396 31.6791C33.7954 35.0829 30.3454 37.6346 26.375 38.975C25.375 39.175 25 38.55 25 38.025C25 37.35 25.025 35.2 25.025 32.525C25.025 30.65 24.4 29.45 23.675 28.825C28.125 28.325 32.8 26.625 32.8 18.95C32.8 16.75 32.025 14.975 30.75 13.575C30.95 13.075 31.65 11.025 30.55 8.275C30.55 8.275 28.875 7.725 25.05 10.325C23.45 9.875 21.75 9.65 20.05 9.65C18.35 9.65 16.65 9.875 15.05 10.325C11.225 7.75 9.55 8.275 9.55 8.275C8.45 11.025 9.15 13.075 9.35 13.575C8.075 14.975 7.3 16.775 7.3 18.95C7.3 26.6 11.95 28.325 16.4 28.825C15.825 29.325 15.3 30.2 15.125 31.5C13.975 32.025 11.1 32.875 9.3 29.85C8.925 29.25 7.8 27.775 6.225 27.8C4.55 27.825 5.55 28.75 6.25 29.125C7.1 29.6 8.075 31.375 8.3 31.95C8.7 33.075 10 35.225 15.025 34.3C15.025 35.975 15.05 37.55 15.05 38.025C15.05 38.55 14.675 39.15 13.675 38.975C9.6916 37.6491 6.22684 35.1025 3.77223 31.6966C1.31762 28.2907 -0.0022012 24.1983 2.75578e-06 20C2.75578e-06 8.95 8.95 0 20 0Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_376_422">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

const TwitterIcon = () => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M31.5023 2H37.6359L24.2359 17.3154L40 38.1563H27.6568L17.9892 25.5164L6.92718 38.1563H0.789876L15.1226 21.7747L0 2H12.6566L21.3953 13.5533L31.5023 2ZM29.3497 34.4851H32.7483L10.8098 5.47842H7.16266L29.3497 34.4851Z" fill="black" />
    </svg>
  )
}