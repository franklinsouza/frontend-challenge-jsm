import styles from './styles.module.scss';

const Breadcrumbie = () => {
  return (
    <div className={styles.breadcrumbie}>
      <span><a href="#" className={styles.breadcrumbie__link}>Home</a></span>
      <span className={styles.breadcrumbie__space}>&#62;</span>
      <span><a href="#" className={styles.breadcrumbie__link}>Usuários</a></span>
      <span className={styles.breadcrumbie__space}>&#62;</span>
      <span><a href="#" className={styles.breadcrumbie__link}>Detalhes</a></span>
    </div>
  )
}

export default Breadcrumbie;