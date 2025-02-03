import styles from './Header.module.css'

import logo from '../assets/react.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" />
      <p>inicio</p>
      <p>beneficios</p>
      <p>sobre</p>
      <p>depoimentos</p>
      <p>contato</p>
      <img src="" alt="instagram" />
      <img src="" alt="whatsapp" />
    </header>
  );
}