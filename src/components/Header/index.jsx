import styles from "./styles.module.scss";
import logo from '../../assets/juntossomosmais_logo.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__wrap}>
          <a href="#" className={styles.header__logo}>
            <img src={logo} />
          </a>

          <form className={styles.header__form}>
            <input type="text" placeholder="Buscar aqui" className={styles.header__seach}/>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header;