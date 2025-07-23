import { useState, useEffect } from "react";

const useScreenSize = (): string => {
  const [screenSize, setScreenSize] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScreenSize("sm"); // Small screens
      } else if (window.innerWidth >= 640 && window.innerWidth < 1024) {
        setScreenSize("md"); // Medium screens
      } else {
        setScreenSize("lg"); // Large screens
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
