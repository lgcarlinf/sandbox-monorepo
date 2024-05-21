import React from 'react'

export const Text = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        <h1>Text Component</h1>
        {children}
      </div>
    );
  };
  