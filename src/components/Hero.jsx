import React, { useState, useRef } from "react";

const Hero = () => {
  const product = {
    name: "Thar",
    company: "Mahindra",
    images: [
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/41a8a8b2a63b414d81c687c80d30ede2/raw/file.JPG?q=85&w=900&dpr=1.3",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/953c9ed5b8e24caea1816de9beb6f53d/raw/file.JPG?q=85&w=320",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/953c9ed5b8e24caea1816de9beb6f53d/raw/file.JPG?q=85&w=900&dpr=1.3",
      "https://mda.spinny.com/sp-file-system/public/2024-10-27/8d7b4bc2fdcf4188a934178e9d8cd167/raw/file.JPG?q=85&w=900&dpr=1.3",
    ],
  };

  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const thumbRef = useRef(null);

  const changeImage = (newIndex) => {
    if (animating || newIndex === index) return;
    setAnimating(true);
    setLoading(true); // Set loading true when changing image
    setTimeout(() => {
      setIndex(newIndex);
      setAnimating(false);
    }, 300);
  };

  const prevImage = () =>
    changeImage((index - 1 + product.images.length) % product.images.length);
  const nextImage = () => changeImage((index + 1) % product.images.length);

  const scrollThumbnails = (direction) => {
    if (!thumbRef.current) return;
    const scrollAmount = 150;
    if (direction === "left") {
      thumbRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      thumbRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto md:px-4 mt-6">
      {/* Breadcrumb */}
      <p className="mb-4 text-sm sm:text-base">
        <span>Home</span> /
        <span> Cars</span> /
        <span> {product.company}</span> /
        <span className="text-indigo-500"> {product.name}</span>
      </p>

      <div className="flex flex-col gap-4 relative">
        {/* Main image */}
        <div className="relative w-full h-64 sm:h-[400px] rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
          {loading && (
            <div className="absolute text-gray-500">Loading...</div>
          )}
          <img
            key={index}
            src={product.images[index]}
            alt="Selected product"
            className={`w-full h-full object-cover absolute top-0 left-0 transition-transform duration-300 ${
              animating ? "-translate-x-full" : "translate-x-0"
            }`}
            onLoad={() => setLoading(false)} // Image loaded
          />

          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
          >
            &#8249;
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
          >
            &#8250;
          </button>
        </div>

        {/* Thumbnails */}
        <div className="relative mt-2">
          <div
            ref={thumbRef}
            className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {product.images.map((img, i) => (
              <div
                key={i}
                onClick={() => changeImage(i)}
                className={`flex-shrink-0 w-20 sm:w-28 h-12 sm:h-20 rounded overflow-hidden cursor-pointer border-2 ${
                  i === index ? "border-black" : "border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollThumbnails("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
          >
            &#8249;
          </button>

          <button
            onClick={() => scrollThumbnails("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
