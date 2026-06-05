import React from 'react';
import { useReveal } from '@/lib/reveal';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

const Reveal: React.FC<Props> = ({ children, delay = 0, className = '', y = 24 }) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
