
import React from 'react';

function MyComponent() {
  const backgroundStyle = {
    backgroundImage: `url(./bimg.png)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
  };

  return (
    <div style={backgroundStyle}>
      {/* your component content */}
    </div>
    
  );
}

export default MyComponent;
