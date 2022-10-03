import React, { useState, useEffect } from 'react';

function Delayed({ children, time = 0.5 }) {
  // declare time in seconds, not miliseconds
  const [visible, setVisible] = useState(false);
  console.log(children);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, time * 1000);

    return () => clearTimeout(timer);
  }, []);
  return visible === true ? children : null;
}

export default Delayed;
