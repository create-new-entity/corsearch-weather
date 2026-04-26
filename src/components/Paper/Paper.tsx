

import React from 'react';
import styles from './Paper.module.scss';

type PaperProps = {
  children: React.ReactNode;
  className?: string;
};

const Paper = ({ children, className = '' }: PaperProps) => {
  return (
    <div className={`${styles.paper} ${className}`}>
      {children}
    </div>
  );
};

export default Paper;