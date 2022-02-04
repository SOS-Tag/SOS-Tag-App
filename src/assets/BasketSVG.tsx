import React from 'react';

type BasketSVGType = {
  color: string
}

const BasketSVG: React.FC<BasketSVGType> = ({
  color,
}) => {
  return (
    <svg 
      width="35" 
      height="30" 
      viewBox="0 0 35 30" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
    <path 
        d="M25.7886 11.0327L18.8205 0.663857C18.5182 0.221286 18.0091 0 17.5 0C16.9909 0 16.4818 0.221286 16.1795 0.679663L9.21136 11.0327H1.59091C0.715909 11.0327 0 11.7439 0 12.6133C0 12.7555 0.015909 12.8978 0.0636363 13.04L4.10455 27.6923C4.47045 29.02 5.69545 30 7.15909 30H27.8409C29.3045 30 30.5295 29.02 30.9114 27.6923L34.9523 13.04L35 12.6133C35 11.7439 34.2841 11.0327 33.4091 11.0327H25.7886ZM12.7273 11.0327L17.5 4.07798L22.2727 11.0327H12.7273ZM17.5 23.6776C15.75 23.6776 14.3182 22.255 14.3182 20.5163C14.3182 18.7777 15.75 17.3551 17.5 17.3551C19.25 17.3551 20.6818 18.7777 20.6818 20.5163C20.6818 22.255 19.25 23.6776 17.5 23.6776Z" 
        fill={color}
    />
  </svg>
  );
}

export default BasketSVG;





