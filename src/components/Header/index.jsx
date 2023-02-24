import styles from "./styles.module.scss";
import logo from '../../assets/juntossomosmais_logo.png'
import { Link } from "react-router-dom";

const Header = ({search}) => {
  
  function handleSearch (e) {
    search(e.target.value);
  }

  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.header__wrap}>
          <Link to={'/'} className={styles.header__logo}>
            <img src={logo} />
          </Link>

          <form className={styles.header__form}>
            <input 
              type="text" 
              placeholder="Buscar aqui" 
              className={styles.header__seach}
              onChange={handleSearch}
            />
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header;