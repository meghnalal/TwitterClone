import React from 'react';

const BoxComponent = ({ backgroundColor, textColor, boxText, borderColor }) => {
    const boxStyle = `bg-${backgroundColor} border-${borderColor} p-4 rounded-full shadow-md w-[280px] h-[40px] border-2 flex items-center justify-center`;
    const textStyle = `text-${textColor} text-center`;
  
    return (
      <div className={boxStyle}>
        <p className={textStyle}>{boxText}</p>
      </div>
    );
  };
  
  export default BoxComponent;
  