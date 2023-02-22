import styles from './styles.module.scss';

const Card = ({fname, lname, photo, street, city, state, postcode}) => {
  return(
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img src={photo}/>
      </div>
      <h5 className={styles.card__name}>{fname} {lname}</h5>
      <p className={styles.card__street}>{street}</p>
      <p className={styles.card__address}>
        {city}<br />
        {state} - CEP: {postcode}
      </p>
    </div>
  )
}

export default Card;