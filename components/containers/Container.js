import constructClassName from "../../lib/helpers/constructClassName";
import React from 'react';

const Container = React.forwardRef(({ children, add, remove }, ref) => {
  return (
    <div ref={ref} className={constructClassName("", {add, remove})}>
      {children}
    </div>
  );
});

export default Container;
