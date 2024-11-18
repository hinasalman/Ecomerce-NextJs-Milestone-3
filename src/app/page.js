// src/app/page.js

import Link from 'next/link';
import styles from './page.module.css'; // Assuming you have a CSS file for styling

const products = [
  {
    id: 1,
    name: 'Basic T-shirt',
    description: 'Comfortable cotton t-shirt for everyday wear.',
    price: 20.99,
    image: '/images/basic-tshirt.jpg',  // Image path is relative to the public folder
  },
  {
    id: 2,
    name: 'Cute Baby Dress',
    description: 'Soft cotton baby dress with cute design.',
    price: 15.99,
    image: '/images/cute-baby-dress.jpg',  // Image path is relative to the public folder
  },
  {
    id: 3,
    name: 'Graphic T-shirt',
    description: 'Stylish graphic t-shirt for casual outings.',
    price: 25.99,
    image: '/images/graphic-tshirt.jpg',  // Image path is relative to the public folder
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hina Salman Store</h1>

      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
            <Link href={`/products/${product.id}`} className={styles.viewDetailsBtn}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
