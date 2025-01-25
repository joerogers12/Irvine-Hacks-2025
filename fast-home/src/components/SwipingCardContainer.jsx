// src/SwipeableCard.js
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from '@use-gesture/react';

const SwipingCardContainer = ({ onSwipe, children }) => {
  const [props, set] = useSpring(() => ({ x: 0, opacity: 1 }));

  const bind = useGesture({
    onDrag: ({ offset: [x], direction: [dx], velocity, memo = x }) => {
      set({ x, opacity: Math.max(1 - Math.abs(x) / 1000, 0) });
      if (velocity > 0.1 && Math.abs(x) > 200) {
        onSwipe(dx > 0 ? 'right' : 'left');
      }
      return memo;
    },
    onDragEnd: () => set({ x: 0, opacity: 1 })
  });

  return (
    <animated.div
      {...bind()}
      style={{
        transform: props.x.to((x) => `translateX(${x}px)`),
        opacity: props.opacity,
      }}
      className="card"
    >
      {children}
    </animated.div>
  );
};

export default SwipingCardContainer;
