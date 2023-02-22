import styles from './styles.module.scss';

const Footer = () => {
  return(
    <div className={styles.footer}>
      <div className='container'>
        <p className={styles.footer__text}>Juntos Somos Mais Fidelização S.A</p>
        <span className={styles.footer__followus}>Siga-nos nas redes sociais:</span>

        <ul className={styles['footer__social-list']}>
          <li>
            <a href="#" className={styles['footer__social-link']}>F</a>
          </li>
          <li>
            <a href="#" className={styles['footer__social-link']}>IN</a>
          </li>
          <li>
            <a href="#" className={styles['footer__social-link']}>INS</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer;