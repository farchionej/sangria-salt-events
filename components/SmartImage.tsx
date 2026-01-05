import React from 'react';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  localSrc?: string;
  fallbackSrc: string;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  fallbackSrc,
  alt,
  className,
  ...props
}) => {
  return (
    <img
      src={fallbackSrc}
      alt={alt}
      className={className}
      {...props}
    />
  );
};
