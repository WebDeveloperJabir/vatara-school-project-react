import React, { forwardRef } from "react";

const SimpleLoader = forwardRef((props, ref) => {
  return (
    <div className='simple-loader' ref={ref}>
      <div className='upper-loader'></div>
      <p className='loader-text'>Loading...</p>
    </div>
  );
});

export default SimpleLoader;
