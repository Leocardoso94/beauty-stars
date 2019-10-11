import React, { FC } from 'react';
import Star from './components/Star';
import { COLORS } from './colors';

export interface Props {
  maxStars?: number;
  value?: number;
  onChange?: (newStar: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  size?: number | string;
  editable?: boolean;
}

const BeautyStars: FC<Props> = ({
  maxStars = 5,
  value = 0,
  onChange,
  activeColor = COLORS.active,
  inactiveColor = COLORS.inactive,
  size = 36,
  editable = true,
}) => (
  <ul
    style={{
      color: inactiveColor,
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
    }}
  >
    {Array(maxStars)
      .fill(null)
      .map((_, i) => i + 1)
      .map(starNumber => (
        <li
          title={`${starNumber} star`}
          key={starNumber}
          onClick={() => {
            if (onChange && editable) onChange(starNumber);
          }}
          style={{
            cursor: 'pointer',
            position: 'relative',
            marginRight: starNumber !== maxStars ? 16 : 0,
          }}
        >
          <Star
            selected={starNumber <= value}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            size={size}
          />
        </li>
      ))}
  </ul>
);

export default BeautyStars;
