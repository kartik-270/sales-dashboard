// components/atoms/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className = '' }: CardProps) => {
  const baseStyles = 'bg-white p-6 rounded-lg shadow-md';

  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  );
};