import React from 'react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Welcome' }) => (
  <header className="p-4 bg-gray-100 border-b border-gray-300">
    <h1 className="m-0 text-2xl font-bold">{title}</h1>
  </header>
);

export default Header;