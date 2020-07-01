import React, { useEffect } from 'react';
import LandingPageService from './LandingPageService';

import 'uswds/dist/js/uswds.js';
import 'uswds/dist/css/uswds.css';

function App() {

  // useEffect(() => {
  //   const script = document.createElement('script');
  
  //   script.src = "https://use.typekit.net/foobar.js";
  //   script.async = true;
  
  //   document.body.appendChild(script);
  
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);

  return (
    <LandingPageService />
  );
}

export default App;
