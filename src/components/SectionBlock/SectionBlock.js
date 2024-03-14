import React from 'react';
import styles from './styles.module.css'

export default function SectionBlock({ imgPath, imgPosition, title, description }) {

  const imageOrder = imgPosition === 'left' ? 1 : 2; // Assuming 'left' or 'right' are the possible values
  const textOrder = imgPosition === 'left' ? 2 : 1;

  return (
    <div className={styles.featureBlockContainer}>
      <div
        className={styles.featureImgContainer}
        style={{ order: imageOrder }}>
        <img className={styles.featureImage} src={imgPath} />
      </div>
      <div
        className="featureBlockText"
        style={{ order: textOrder }}>
        <h1>{title}</h1>
        <div className="featureDescription">{description}</div>
      </div>
    </div>
  );
}
