import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const setHandlerMenu = () => {
    setMenuOpen((even) => !even);
  };

  return (
    <header className="header fixed w-full top-0 left-0 bg-white z-50 shadow-[0_8px_12px_rgba(0,0,0,0.1)]">
      <div className="header__container container h-24 flex justify-between items-center">
        <a
          href="#"
          className="header__logo text-xl text-slate-900 font-bold hover:text-purple-600"
        >
          Navbar
        </a>

        <div
          className={`header__menu fixed w-full top-24 left-0 text-center py-8 px-16 bg-white shadow-[0_8px_12px_rgba(0,0,0,0.1)] transition-all duration-300 origin-top md:static md:w-auto md:p-0 md:bg-transparent md:shadow-none md:opacity-100 md:scale-y-100 md:flex md:items-center md:gap-10 ${
            menuOpen ? "opacity-0 scale-y-0" : "opacity-100 scale-y-100"
          }`}
        >
          <ul className="header__list flex flex-col gap-6 md:flex-row md:gap-8">
            {[
              ["About", "/about"],
              ["Features", "/features"],
              ["Pricing", "/pricing"],
              ["Contact", "/contact"],
            ].map(([title, url]) => (
              <li>
                <a
                  href="#"
                  className="header__link text-[15px] text-slate-900 font-semibold hover:text-purple-600"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>

          <a href="#" className="header__button button mt-6 md:mt-0">
            Create account
          </a>
        </div>

        <div className="header__toggle inline-flex text-[1.5rem] text-slate-900 cursor-pointer md:hidden">
          {menuOpen ? (
            <BiMenu onClick={setHandlerMenu} />
          ) : (
            <BiX onClick={setHandlerMenu} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
