import React from 'react';
import styles from './PolicySection.module.css'

export default function PolicySection(props) {
  const { label, text} = props;

  return (
    <div className={styles['policy-section-container']}>
      <div className={styles['policy-section-label']}>{`${label}: `}</div>
      <div className={styles['policy-section-text']}>{text}</div>
    </div>
  )
}
