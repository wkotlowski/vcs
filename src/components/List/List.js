import React from 'react';
import styles from './styles.module.css';

export default function List({ items }) {
    return (
      <div className={styles.listContainer}>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index}>
              <span className={styles.checkmark}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
}
