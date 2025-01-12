"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.scss";
import BurgerIconMenu from "./BurgerIconMenu";
import FavoritesCounter from "./FavoritesCounter";
import { Provider } from 'react-redux';
import { store } from '@/state/store';

type LinkType = {
  name: string;
  to: string;
};

const Header = () => {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  }

  const links: LinkType[] = [
    { name: "Movies", to: "/" },
    { name: "Favorites", to: "/favorites" },
    { name: "Contact Us", to: "/contact-us" }
  ];
  
  return (
    <header className={styles.header}>
      <h1 className="text-3xl font-bold cursor-pointer py-3">
        <Link href="/">Film DB</Link>
      </h1>
      <nav className={isActive ? `${styles['active']}` : ""}>
        <Provider store={store}>
          <ul>
            {links.map((link) => (
              <li key={link.name} className={`font-bold px-3 py-2 ${pathname === link.to ? `${styles['active']}` : ""}`}>
                <span>
                  <Link href={link.to} onClick={toggleMenu}>
                    {link.name}
                    {link.to === '/favorites' ? <FavoritesCounter /> : ''}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </Provider>
      </nav>
      <BurgerIconMenu active={isActive} onToggle={toggleMenu} />
    </header>
  );
};

export default Header;
