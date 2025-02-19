import styles from './Header.module.css';
import instagram from '../../assets/instagram.png';
import whatsapp from '../../assets/whatsapp.png';

import { SlMenu } from "react-icons/sl";

import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.desktopOnly}>
        <nav>
          <h1 id={styles.logo}>PSI PATI</h1>
          <ul className={styles.navLinks}>
            <li><a href="#">Início</a></li>
            <li><a href="#">Benefícios</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Depoimentos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/psi.patriciabraccio" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5519996438363&text=Oie%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+terapia%21+&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="Whatsapp" />
            </a>
          </div>
        </nav>
      </div>

      <div className={styles.headerMobile}>
        <button onClick={toggleMenu} className={styles.menuButton} aria-label="Menu">
          <SlMenu style={{ fontSize: '24px', color: '#000' }} />
        </button>
      </div>

      <div className={`${styles.menuMobile} ${isOpen ? styles.active : ''}`}>
        <nav>
          <ul className={styles.navLinks}>
            <h1>PSI PATI</h1>
            <li><a href="#">Início</a></li>
            <li><a href="#">Benefícios</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Depoimentos</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/psi.patriciabraccio" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram" width="32" height="32" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=5519996438363&text=Oie%2C+gostaria+de+saber+mais+informa%C3%A7%C3%B5es+sobre+a+terapia%21+&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
              <img src={whatsapp} alt="Whatsapp" width="32" height="32" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}