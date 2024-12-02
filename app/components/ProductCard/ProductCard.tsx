import React from 'react'
import AddCard from '../AddCard';
import styles from './ProductCard.module.css'

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <AddCard />
    </div>
  )
}

export default ProductCard;