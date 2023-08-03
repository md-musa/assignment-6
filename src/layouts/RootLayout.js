import Nav from '@/components/nav';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <div className="max-w-6xl mx-auto bg-gray-100">
      <Nav />
      {children}
    </div>
  );
}
