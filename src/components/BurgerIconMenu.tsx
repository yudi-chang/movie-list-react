import { FC } from 'react';
import styles from './BurgerIconMenu.module.scss'; // Assuming you have your styles here

interface HamburgerMenuProps {
  active: boolean;
  onToggle: () => void;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ active, onToggle }) => {
  return (
    <div
      className={`${styles['hamburger-wrapper']} ${active ? styles.active : ''}`}
      id="icon"
      onClick={onToggle}
      data-test="hamburger-menu"
    >
      <div className={styles['icon-1']} id="a"></div>
      <div className={styles['icon-2']} id="b"></div>
      <div className={styles['icon-3']} id="c"></div>
      <div className={styles.clear}></div>
    </div>
  );
};

export default HamburgerMenu;
