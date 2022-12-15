import constructClassName from "../../lib/helpers/constructClassName";
import React from 'react';

const Container = React.forwardRef(({ children, className, remove, onClick }, ref) => {
  return (
    <div onClick={onClick} ref={ref} className={constructClassName("", {className, remove})}>
      {children}
    </div>
  );
});

export default Container;
