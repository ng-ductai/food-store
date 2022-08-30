import { useEffect, useState } from "react";

const LoadImage = (src) => {
  const [sourceLoad, setSourceLoad] = useState(null);

  useEffect(() => {
    const img = new Image();

    img.src = src;
    img.onload = () => setSourceLoad(src);
  }, [src]);

  return sourceLoad;
};

export default LoadImage;
