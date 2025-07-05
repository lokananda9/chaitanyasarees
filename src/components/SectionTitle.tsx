import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, className }) => {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-secondary max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
