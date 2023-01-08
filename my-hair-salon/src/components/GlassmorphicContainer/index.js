import React from 'react';

const GlassmorphicContainer = ({ children }) => {
  return (
    <div
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        borderRadius: '8px',
        
      }}
    >
      {children}
    </div>
  );
};

export default GlassmorphicContainer;
