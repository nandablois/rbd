import { useState, useEffect } from "react";

interface ImageSliderProps {
  images: string[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full">
      <img
        src={images[index]}
        alt={`Slide ${index}`}
        className="w-full h-full md:h-full object-cover rounded-2xl shadow-lg transition-all"
      />
    </div>
  );
}
