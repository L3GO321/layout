import { ProductButton } from '../../../ProductButton/ProductButton';
import styles from './styles.module.css';

export const ShopCard = ({card}) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardTitle}>{card.name}</div>
      <div className={styles.cardColor}>{card.color}</div>
      <img src={card.img} alt={card.name} width='300' height='300' />
      <div className={styles.cardInfo}>
        <div className={styles.cardPrice}>${card.price}</div>
        <ProductButton />
      </div>
    </div>
  )
}