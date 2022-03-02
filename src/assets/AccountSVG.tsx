import React from 'react';

type AccountSVGType = {
    color: string
}

const AccountSVG: React.FC<AccountSVGType> = ({
    color
}) => {
    return (
        <svg 
            width="32" 
            height="32" 
            viewBox="0 0 34 34" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg">
        <path 
            d="M17 0C19.2543 0 21.4163 0.895533 23.0104 2.48959C24.6045 4.08365 25.5 6.24566 25.5 8.5C25.5 10.7543 24.6045 12.9163 23.0104 14.5104C21.4163 16.1045 19.2543 17 17 17C14.7457 17 12.5837 16.1045 10.9896 14.5104C9.39553 12.9163 8.5 10.7543 8.5 8.5C8.5 6.24566 9.39553 4.08365 10.9896 2.48959C12.5837 0.895533 14.7457 0 17 0ZM17 21.25C26.3925 21.25 34 25.0537 34 29.75V34H0V29.75C0 25.0537 7.6075 21.25 17 21.25Z" 
            fill={color}
        />
        </svg>
    );
}

export default AccountSVG;


