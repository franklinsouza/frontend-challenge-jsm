import { useState } from 'react';
import styles from './styles.module.scss';

const Filter = ({states, checkState}) => {
  const [formStatus, setFormStatus] = useState(false);

  const checkHandler = (id) => {
    checkState(id);
  };

  const handleFormStatus = () => {
    setFormStatus(!formStatus);
  }
  
  console.log(formStatus);

  return (
    <aside className={styles.filter}>
      <h3 className={styles.filter__title}>Por Estado</h3>
      <form className={`${styles['filter__form']} ${formStatus ? styles['filter__form--open'] : ''}`}>
        {states.map((item) =>
          <div className={styles['filter__line-form']} key={item.id}>
            <input 
              id={item.id}
              type="checkbox" 
              className={styles.filter__checkbox} 
              onChange={() => {checkHandler(item.id)}}
            />
            <label htmlFor={item.id}>
              {item.label}
            </label>
          </div>
        )}
      </form>
      <span onClick={handleFormStatus}>
        {formStatus ? 'Recolher' : 'Ver todos'}
      </span>
    </aside>
  )
}

export default Filter;