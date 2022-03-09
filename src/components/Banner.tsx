
/////////////////////////////////
/* BANNER - RETURN ET TITLE  */ 
/////////////////////////////////

import React, { MouseEventHandler } from "react";

type BannerType = {
  returnClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  title: string;
}

const Banner: React.FC<BannerType> = ({
  returnClick,
  title,
}) => {
  return ( 
      <div className="flex flex-row mt-10 mb-20">
          <button className="w-2/5" onClick={returnClick}>
          <svg className="w-full justify-items-center" width="47" height="34" viewBox="0 0 47 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M47 14.875H8.18227L20.1245 2.99625L17.0909 0L0 17L17.0909 34L20.1032 31.0037L8.18227 19.125H47V14.875Z" 
          fill="#19224F"/>
          </svg>
          </button>
          <h1 className="w-3/5">{title}</h1>
      </div>
  );
}

export default Banner;