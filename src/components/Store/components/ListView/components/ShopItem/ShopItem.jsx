import { ProductButton } from '../../../ProductButton/ProductButton';
import styles from './styles.module.css';

export const ShopItem = ({item}) => {
  return (
    <div className={styles.itemWrapper}>
      <img src={item.img} alt={item.name} width='100' height='100' />
      <div className={styles.title}>{item.name}</div>
      <div className={styles.color}>{item.color}</div>
      <div className={styles.price}>${item.price}</div>
      <ProductButton />
    </div>

  )
}