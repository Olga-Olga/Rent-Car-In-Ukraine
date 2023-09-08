import React from 'react';

export const SpriteSVG = ({ name }) => {
  switch (name) {
    case 'hart':
      return (
        <svg id="icon-hart" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.6667"
            d="M27.787 6.147c-0.681-0.681-1.49-1.222-2.38-1.591s-1.844-0.559-2.807-0.559c-0.963 0-1.917 0.19-2.807 0.559s-1.698 0.909-2.38 1.591l-1.413 1.413-1.413-1.413c-1.376-1.376-3.241-2.148-5.187-2.148s-3.811 0.773-5.187 2.148c-1.376 1.376-2.148 3.241-2.148 5.187s0.773 3.811 2.148 5.187l11.787 11.787 11.787-11.787c0.681-0.681 1.222-1.49 1.591-2.38s0.559-1.844 0.559-2.807c0-0.963-0.19-1.917-0.559-2.807s-0.909-1.699-1.591-2.38z"
          ></path>
        </svg>
      );
    case 'icon-x':
      return (
        <svg id="icon-x" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.4"
            d="M24 8l-16 16"
          ></path>
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.4"
            d="M8 8l16 16"
          ></path>
        </svg>
      );
    case 'chevron-down':
      return (
        <svg id="icon-chevron-down" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3.2"
            d="M8 12l8 8 8-8"
          ></path>
        </svg>
      );
    case 'chevron-up':
      return (
        <svg id="icon-chevron-up" viewBox="0 0 32 32">
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="3.2"
            d="M8 20l8-8 8 8"
          ></path>
        </svg>
      );
    default:
      return 'SVG not found';
  }
};
