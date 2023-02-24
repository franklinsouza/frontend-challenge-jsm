import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Card = ({index, fname, lname, photo, street, city, state, postcode}) => {
  return(
    <div className={styles.card}>
      <div className={styles.card__img}>
        <Link to={`/detail/${index}`}>
          <img src={photo}/>
        </Link>
      </div>
      <h5 className={styles.card__name}>
        <Link to={`/detail/${index}`}>
          {fname} {lname}
        </Link>
      </h5>
      <p className={styles.card__street}>{street}</p>
      <p className={styles.card__address}>
        {city}<br />
        {state} - CEP: {postcode}
      </p>
    </div>
  )
}

export default Card;