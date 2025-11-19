import React from "react";

interface AccessibleImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string; // require alt text
}

export const AccessibleImage: React.FC<AccessibleImageProps> = ({ alt, ...props }) => (
  <img alt={alt} {...props} />
);
