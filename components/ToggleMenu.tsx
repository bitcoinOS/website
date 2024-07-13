import { MouseEvent } from 'react';

export default function ToggleMenu() {
  const handleToggle = (ele: MouseEvent<HTMLButtonElement>) => {
    ele.currentTarget.classList.toggle('expanded');
    document.body.classList.toggle('overflow-hidden');
    document.getElementById('header')?.classList.toggle('h-screen');
    document.getElementById('header')?.classList.toggle('expanded');
    // document.getElementById('header')?.classList.toggle('bg-page');
    document.querySelector('#header nav')?.classList.toggle('hidden');
    document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');
  }

  return (
    <button onClick={handleToggle} type="button" className="flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group " aria-label="Toggle Menu" data-aw-toggle-menu>
      <span className="sr-only">Toggle Menu</span>
      <slot>
        <span
          aria-hidden="true"
          className="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"
        ></span>
        <span
          aria-hidden="true"
          className="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"
        ></span>
        <span
          aria-hidden="true"
          className="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"
        ></span>
      </slot>
    </button>
  )
};
