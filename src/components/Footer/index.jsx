import styles from './styles.module.scss';
import fb from '../../assets/fb.png';
import ld from '../../assets/ld.png';
import ig from '../../assets/ig.png';

const Footer = () => {
  return(
    <div className={styles.footer}>
      <div className='container'>
        <p className={styles.footer__text}>Juntos Somos Mais Fidelização S.A</p>
        <span className={styles.footer__followus}>Siga-nos nas redes sociais:</span>

        <ul className={styles['footer__social-list']}>
          <li>
            <a href="#" className={styles['footer__social-link']}>
              <img src={fb} />
            </a>
          </li>
          <li>
            <a href="#" className={styles['footer__social-link']}>
              <img src={ld} />
            </a>
          </li>
          <li>
            <a href="#" className={styles['footer__social-link']}>
              <img src={ig} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;