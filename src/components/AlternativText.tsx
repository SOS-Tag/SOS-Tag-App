import React from "react";

type AlternativTextType = {
  className?: string,
  text: string,
  linkText: string,
  link: string,
}

const AlternativText: React.FC<AlternativTextType> = ({
  className,
  text,
  link,
  linkText,
}) => {
  return ( 
    <div className={"AlternativText "+className}>
      {text}
      <a href={link}><span className="font-bold text-SosTagRed">{linkText}</span></a>
    </div>
   );
}

export default AlternativText;