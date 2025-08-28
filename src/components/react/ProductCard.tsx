import { type ProductCard } from "../../schemas/ProductCard";

interface ProductCardProps {
  product: ProductCard;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img className="product-card__image" src={product.coverImage.url} alt={product.coverImage.alt} />
      </div>
      <div className="product-card__info">
        <h2 className="product-card__title">{product.title}</h2>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
