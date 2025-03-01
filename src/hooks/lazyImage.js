import React, { useState, useEffect } from "react";

const LazyImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return loaded ? (
    <img src={src} alt={alt} />
  ) : (
    <div className="image-loader">Loading image...</div>
  );
};

export default LazyImage;
