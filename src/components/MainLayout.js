import React from 'react';

function MainLayout({ children }) {
  return (
    <main className="container py-4">
      {children}
    </main>
  );
}

export default MainLayout;