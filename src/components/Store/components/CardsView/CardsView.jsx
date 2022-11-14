import { ShopCard } from "./components/ShopCard/ShopCard"
import styles from './styles.module.css';

export const CardsView = ({cards}) => {
  return (
    <div className={styles.cards}>
      {cards.map((card, index) => (
        <ShopCard key={index} card={card} />
      ))}
    </div>
  )
}