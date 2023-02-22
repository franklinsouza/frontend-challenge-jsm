import styles from './styles.module.scss';

const OrderList = ({currentPosts, totalPosts}) => {
  return(
    <div className={styles['order-list']}>
      <span>Exibindo {currentPosts} de {totalPosts} itens</span>
      <div className={styles['order-list__filter-box']}>
        <span className={styles['order-list__orderby']}>Ordernar por:</span>
        <form>
          <select name="" id="">
            <option>Nome</option>
            <option>Estado</option>
          </select>
        </form>
      </div>
    </div>
  )
}

export default OrderList;