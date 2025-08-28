import { useState } from "react";
import { type ProductCard } from "../../schemas/ProductCard";
import "./ProductCardCarousel.css";

interface ProductCardProps {
  product: ProductCard;
}

export default function ProductCardCarousel({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.imageVariants.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + product.imageVariants.length) % product.imageVariants.length);
  };

  return (
    <div className="product-card__carousel">
      <div className="product-card__carousel-controls">
        <button className="product-card__carousel-button" onClick={handlePrevImage}>Previous</button>
        <button className="product-card__carousel-button" onClick={handleNextImage}>Next</button>
      </div>
      <div className="product-card__image-carousel">
        <a href={`products/${product.id}`} className="product-navigation">
          <div className="product-card__coverImage-wrapper">
            <img className="product-card__coverImage" src={product.coverImage.url} alt={product.coverImage.alt} />
          </div>
          <div className="product-card__image-wrapper">
            <img
              className="product-card__image"
              src={product.imageVariants[currentImageIndex].url}
              alt={product.imageVariants[currentImageIndex].alt}
            />
          </div>
        </a>
      </div>
      <div className="product-card__carousel-info">
        <h2 className="product-card__carousel-title">{product.title}</h2>
        <p className="product-card__carousel-price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
