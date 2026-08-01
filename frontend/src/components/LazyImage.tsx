import { useState } from "react";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  // add any extra props if needed
}

export default function LazyImage({ className, style, ...props }: LazyImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      className={className}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.1s ease-in-out",
      }}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
}
