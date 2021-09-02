import styles from './Header.module.css';

function Header() {
  return (
      <header className={styles.header}>
        <img
            src="https://www.pngarts.com/files/3/Axe-PNG-Pic.png"
            alt="logo"/>
      </header>
  );
}

export default Header;