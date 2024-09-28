import React, { useState, useEffect } from 'react';
import Main from './Screens/main';
import logo from './assets/logo.png'

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="App" >
 
      {isMobile ? (
        <Main />
      ) : (
        <div className="text-center p-4">
          <h2 className="text-2xl font-semibold mb-2">Please open this app on your phone</h2>
          <p>This application is designed for mobile devices.</p>
        </div>
      )}
    </div>
  );
}

export default App;