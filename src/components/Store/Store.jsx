import React, { useState } from 'react'
import { IconSwitch, ListView, CardsView } from './components';

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

const iconType = {
  card: 'view_list',
  list: 'view_module'
}

export const Store = () => {
  const [viewType, setViewType] = useState('card') // 'card' || 'list'

  const onSwitchIcon = () => {
    setViewType(viewType === 'card' ? 'list' : 'card')
  }

  return (
    <>
      <IconSwitch icon={iconType[viewType]} onSwitch={onSwitchIcon} />
      {viewType === 'card' && <CardsView cards={products} />}
      {viewType === 'list' && <ListView items={products} />}
    </>
  )
}