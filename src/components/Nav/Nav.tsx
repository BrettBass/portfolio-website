import * as React from 'react';
import styles from './Nav.module.css';
import linksData from './links.json';

const links = linksData.links;

type Link = {
  label: string;
  href: string;
  download?: boolean;
};

const Nav: React.FC<{}> = () => {
  return (
    <div className="flex flex-col h-full bg-slate-300">
      <div className="flex items-center p-4">
        <a className="flex items-center flex-col">
          {' '}
          {/* Use flex container with flex-col to center picture and name vertically */}
          <img
            src="https://avatars.githubusercontent.com/u/62232561?s=400&u=087674da77dc4213ad920e32c259d8c6015bd847&v=4"
            className="h-32 w-32 mr-4 rounded-full"
          />
          <span className="text-3xl lg:text-5xl font-semibold whitespace-nowrap dark:text-slate-50">
            Brett Bass
          </span>
        </a>
      </div>
      <div className="flex-grow text-left">
        {' '}
        {/* Add text-left class to align buttons text to the left */}
        <ul className="font-medium p-4 md:p-0 mt-4">
          {links.map((link: Link) => {
            return (
              <li key={link.href} className="mb-2">
                {link.download ? (
                  <a
                    href={link.href}
                    download
                    className="inline-flex items-center justify-between p-3 overflow-hidden text-2xl font-medium text-gray-900 rounded-lg group bg-transparent group-hover:bg-opacity-10 transition-all duration-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 flex-grow w-full"
                  >
                    <span className="flex items-center"> {link.label}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      (Download)
                    </span>
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={() => (window.location.href = link.href)}
                    className="inline-flex items-center justify-between p-3 overflow-hidden text-2xl font-medium text-gray-900 rounded-lg group bg-transparent group-hover:bg-opacity-10 transition-all duration-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 flex-grow w-full"
                  >
                    <span className="flex items-center">{link.label}</span>
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
