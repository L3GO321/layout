import React from 'react';
import { ShopItem } from './components/ShopItem/ShopItem';
import styles from './styles.module.css';

export const ListView = ({items}) => {
  return (
    <div className={styles.listWrapper}>
      {items.map((card, index) => (
        <ShopItem key={index} item={card} />
      ))}
    </div>
  )
}