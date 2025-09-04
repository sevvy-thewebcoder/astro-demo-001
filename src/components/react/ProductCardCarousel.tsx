import { useState, useEffect } from "react";
import { type ProductCard } from "../../schemas/ProductCard";
import "./ProductCardCarousel.css";

interface ProductCardProps {
  product: ProductCard;
}

export default function ProductCardCarousel({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect if device is touch-capable
    setIsTouch("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.imageVariants.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.imageVariants.length) % product.imageVariants.length);
  };

  const handleCardClick = () => {
    if (isTouch && !showControls) {
      // First tap shows controls instead of navigating
      setShowControls(true);
    } else {
      // Navigate to product detail page
      window.location.href = `/products/${product.id}`;
    }
  };

  // Basic swipe detection for touch devices
  let startX: number;
  const handleTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) handleNextImage(); // swipe left
    if (endX - startX > 50) handlePrevImage(); // swipe right
  };

  return (
    <div
      className={`product-card__carousel ${showControls ? "show-controls" : ""}`}
      onClick={handleCardClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="product-card__carousel-controls">
        <button className="product-card__carousel-button" onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}>
          Prev
        </button>
        <button className="product-card__carousel-button" onClick={(e) => { e.stopPropagation(); handleNextImage(); }}>
          Next
        </button>
      </div>
      <div className="product-card__image-carousel">
        <div className="product-card__coverImage-wrapper">
          <img
            className="product-card__coverImage"
            src={product.coverImage.url}
            alt={product.coverImage.alt}
          />
        </div>
        <div className="product-card__image-wrapper">
          <img
            className="product-card__image"
            src={product.imageVariants[currentImageIndex].url}
            alt={product.imageVariants[currentImageIndex].alt}
          />
        </div>
      </div>
      <div className="product-card__carousel-info">
        <h2 className="product-card__carousel-title">{product.title}</h2>
        <p className="product-card__carousel-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
