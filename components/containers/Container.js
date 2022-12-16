import constructClassName from "../../lib/helpers/constructClassName";
import React from 'react';

const Container = React.forwardRef(({ children, className="", remove, onClick, style }, ref) => {
  return (
    <div onClick={onClick} style={style} ref={ref} className={constructClassName("", {className, remove})}>
      {children}
    </div>
  );
});

export default Container;
