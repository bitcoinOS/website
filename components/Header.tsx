"use client";
import { useEffect, useState } from "react";
import ToggleMenu from "./ToggleMenu";
import Image from 'next/image';

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const links = [
    {
      text: 'Home',
      links: []
    },
    {
      text: 'Highlight',
      links: []
    },
    {
      text: 'Product Solutions',
      links: []
    },
    {
      text: 'Technical Solutions',
      links: []
    },
    {
      text: 'Our Advantages',
      links: []
    },
  ]


  useEffect(() => {
    let ticking = false
    const fn = () => {
      const scrollPos = window.scrollY;
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolling(scrollPos > 80)
          ticking = false
        })
        ticking = true
      }
    }
    document.addEventListener("scroll", fn);
    return () => {
      document.removeEventListener('scroll', fn)
    }
  }, [])

  const handleGoTo = (id: string) => {
    const target = document.getElementById(id)
    if (target) {
      scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return <header
    // class:list={[
    //   { sticky: isSticky, relative: !isSticky, dark: isDark },
    //   '',
    // ]}
    className={`top-0 z-40 flex-none bg-white/95 mx-auto w-full border-b transition-[opacity] transition-colors ease-in-out sticky backdrop-blur-md dark:bg-dark-header ${isScrolling ? 'border-gray-50/6 bg-white/0' : 'border-transparent'}`}
  >
    <div className="absolute inset-0"></div>
    <div
      // class:list={[
      //   'relative text-default py-3 px-3 md:px-6 mx-auto w-full',
      //   {
      //     'md:flex md:justify-between': position !== 'center',
      //   },
      //   {
      //     'md:grid md:grid-cols-3 md:items-center': position === 'center',
      //   },
      //   {
      //     'max-w-7xl': !isFullWidth,
      //   },
      // ]}
      className="relative text-default py-3 px-3 md:px-10 mx-auto w-full flex md:items-center"
    >
      <div className="flex justify-between">
        <a className="flex items-center" href="/">
          {/* <Logo /> */}
          <Image className='h-8' width={130} height={32} src="/bitcoinOS-logo.png" alt=""  />
          {/* <img className='h-8' src="/bitcoinOS-logo.png" alt="" /> */}
        </a>
        <div className="flex items-center md:hidden">
          <ToggleMenu />
        </div>
      </div>
      <nav
        className="flex-1 items-center w-full md:w-auto hidden md:flex  text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:justify-self-center md:px-20"
        aria-label="Main navigation"
      >
        <ul
          className="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-sm tracking-[0.01rem] font-medium md:justify-center mb-0"
        >
          {
            links.map(({ text, links }) => (
              <li key={text} className={links?.length ? 'dropdown' : ''}>
                <a
                  className={`over:text-link dark:hover:text-white px-4 py-1 flex items-center`}
                  // href=""
                  onClick={() => handleGoTo(text)}
                >
                  {text}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
      <div
        className="hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0 md:justify-self-end"
      >
        <div className="items-center flex justify-between w-full md:w-auto">
          <div className="flex">
            <button className="btn bg-slate-950 btn-neutral btn-sm h-[36px]">Launch App</button> 
          </div>
        </div>
      </div>
    </div>
  </header>
};
