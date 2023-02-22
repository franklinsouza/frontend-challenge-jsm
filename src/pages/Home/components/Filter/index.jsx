import styles from './styles.module.scss';

const Filter = ({states, checkState}) => {

  const checkHandler = (id) => {
    checkState(id);
  };

  return (
    <aside className={styles.filter}>
      <h3 className={styles.filter__title}>Por Estado</h3>
      <form>
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
      <span>Ver todos</span>
    </aside>
  )
}

export default Filter;