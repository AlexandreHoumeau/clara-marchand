

import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring'

function App() {
  const [active, setActive] = useState(false);
  const { x } = useSpring({ config: { duration: 800 }, x: active ? 1 : 0 });

  useEffect(() => {
    const id = setTimeout(() => {
      setActive(!active);
    }, 2000);

    return () => clearTimeout(id);
  }, [active]);

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="App">
      <div className="grid place-items-center h-screen">
      <div className="flex justify-center items-center flex-1">
        <svg className="w-96" viewBox="0 0 200 200">
          <path fill="#FF0066" d="M44.7,-77.3C57.9,-69.8,68.6,-57.8,76.2,-44.2C83.7,-30.5,88.2,-15.3,87.8,-0.2C87.4,14.8,82.1,29.6,74.6,43.3C67.1,57,57.3,69.7,44.5,77.6C31.7,85.5,15.8,88.7,0.6,87.7C-14.7,86.7,-29.4,81.6,-42.9,74C-56.5,66.5,-68.9,56.7,-77,44C-85.1,31.3,-88.9,15.6,-89,-0.1C-89.2,-15.8,-85.6,-31.6,-78.2,-45.6C-70.9,-59.7,-59.8,-72.1,-46.2,-79.2C-32.5,-86.4,-16.3,-88.4,-0.2,-88C15.8,-87.5,31.5,-84.7,44.7,-77.3Z" transform="translate(100 100)" />
        </svg>
      </div>
      </div>
    </div>
  );
}


export default App;
