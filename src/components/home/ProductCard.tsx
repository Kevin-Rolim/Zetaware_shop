import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: string;
  category: string;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  badge,
  category 
}: ProductCardProps) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className="product-card group">
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 space-y-2">
          {badge && (
            <Badge variant="destructive" className="text-xs font-semibold">
              {badge}
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-primary text-primary-foreground text-xs font-semibold">
              -{discount}%
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-3 right-3 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="icon" variant="secondary" className="h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="h-8 w-8">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        {/* Category */}
        <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
          {category}
        </div>

        {/* Product Name */}
        <Link to={`/produto/${id}`}>
          <h3 className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-2 leading-tight">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          <div className="text-xs text-muted-foreground">
            ou 12x de {formatPrice(price / 12)} sem juros
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button className="w-full btn-hero group">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;