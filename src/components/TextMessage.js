const TextMessage = (props) => {
  return ( 
    <>
      {
        (props.type === "error")?
          <div className={"flex items-center textmessage w-full bg-SosTagRed text-white "+" "+props.className}>
            <svg className="m-[5px]" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8.5" cy="8.5" r="8.5" fill="white"/>
              <path className="fill-SosTagRed" d="M7.87702 9.997L7.60402 6.019L7.53902 4.29H9.46302L9.39802 6.019L9.12502 9.997H7.87702ZM8.50102 13.156C8.17168 13.156 7.89435 13.0433 7.66902 12.818C7.45235 12.584 7.34402 12.298 7.34402 11.96C7.34402 11.6133 7.45235 11.3273 7.66902 11.102C7.89435 10.868 8.17168 10.751 8.50102 10.751C8.83035 10.751 9.10335 10.868 9.32002 11.102C9.54535 11.3273 9.65802 11.6133 9.65802 11.96C9.65802 12.298 9.54535 12.584 9.32002 12.818C9.10335 13.0433 8.83035 13.156 8.50102 13.156Z" />
            </svg>
           	<p className="ml-[8px]">
              {props.message}
            </p>
          </div>
        : 
				<div className={"flex items-center textmessage w-full bg-SosTagRedLight text-white "+" "+props.className}>
					<svg className="m-[5px]" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.6 11.4L1.4 7.20005L0 8.60005L5.6 14.2L17.6 2.20005L16.2 0.800049L5.6 11.4Z" fill="white"/>
					</svg>
					<p className="ml-[8px]">
						{props.message}
					</p>
				</div>
      }
    </>
  );
}
 
export default TextMessage;