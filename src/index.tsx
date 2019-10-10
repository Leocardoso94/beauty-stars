import React, { FC } from 'react';
import styles from './styles.css';
import Star from './components/Star';
import { COLORS } from './colors';

export interface Props {
  maxStars?: number;
  value?: number;
  onChange?: (newStar: number) => void;
}

const BeautyStars: FC<Props> = ({ maxStars = 5, value = 0, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <ul style={{ color: COLORS.inactive }}>
        {Array(maxStars)
          .fill(null)
          .map((_, i) => i + 1)
          .map(n => (
            <li
              title={`${n} star`}
              key={n}
              onClick={() => {
                if (onChange) onChange(n);
              }}
            >
              <Star selected={n <= value} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BeautyStars;
