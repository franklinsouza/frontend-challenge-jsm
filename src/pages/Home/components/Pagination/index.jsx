//https://github.com/thomaslnx/JuntosSomosMaisChallenge

import styles from './styles.module.scss';

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return(
    <ul className={styles.pagination}>
      {pageNumbers.map(number => (
        <li key={number} className={styles.pagination__page}>
          <a 
            onClick={() => paginate(number)} 
            href='!#' 
            className={`${styles['pagination__page-link']} ${number == currentPage ? styles['pagination__page-link--active'] : ''}`}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Pagination;