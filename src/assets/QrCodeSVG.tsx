import React from 'react';

type QrCodeSVGType = {
    color: string
}

const QrCodeSVG: React.FC<QrCodeSVGType> = ({
    color
}) => {
    return (

      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 22 22" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M0 9.77778H2.44444V12.2222H0V9.77778ZM9.77778 2.44444H12.2222V7.33333H9.77778V2.44444ZM7.33333 9.77778H12.2222V14.6667H9.77778V12.2222H7.33333V9.77778ZM14.6667 9.77778H17.1111V12.2222H19.5556V9.77778H22V12.2222H19.5556V14.6667H22V19.5556H19.5556V22H17.1111V19.5556H12.2222V22H9.77778V17.1111H14.6667V14.6667H17.1111V12.2222H14.6667V9.77778ZM19.5556 19.5556V14.6667H17.1111V19.5556H19.5556ZM14.6667 0H22V7.33333H14.6667V0ZM17.1111 2.44444V4.88889H19.5556V2.44444H17.1111ZM0 0H7.33333V7.33333H0V0ZM2.44444 2.44444V4.88889H4.88889V2.44444H2.44444ZM0 14.6667H7.33333V22H0V14.6667ZM2.44444 17.1111V19.5556H4.88889V17.1111H2.44444Z" 
        fill={color}/>
      </svg>
    );
}

export default QrCodeSVG;


