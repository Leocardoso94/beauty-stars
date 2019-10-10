import React, { FC } from 'react';
import styles from './styles.css';
import Star from './components/Star';
import { COLORS } from './colors';

export interface Props {
  maxStars?: number;
  value?: number;
  onChange?: (newStar: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  size?: number;
}

const BeautyStars: FC<Props> = ({
  maxStars = 5,
  value = 0,
  onChange,
  activeColor = COLORS.active,
  inactiveColor = COLORS.inactive,
  size = 36,
}) => {
  return (
    <div className={styles.wrapper}>
      <ul style={{ color: inactiveColor }}>
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
              <Star
                selected={n <= value}
                activeColor={activeColor}
                inactiveColor={inactiveColor}
                size={size}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BeautyStars;
