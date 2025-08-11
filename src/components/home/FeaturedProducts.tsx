import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import laptopGaming from "@/assets/laptop-gaming.jpg";
import headphonesPremium from "@/assets/headphones-premium.jpg";
import keyboardGaming from "@/assets/keyboard-gaming.jpg";
import smartphonePremium from "@/assets/smartphone-premium.jpg";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Notebook Gamer Ultra Performance RTX 4070",
      price: 8999.99,
      originalPrice: 11999.99,
      image: laptopGaming,
      rating: 4.8,
      reviews: 142,
      badge: "NOVO",
      category: "Notebooks"
    },
    {
      id: "2", 
      name: "Headphone Premium Wireless ANC Pro",
      price: 899.99,
      originalPrice: 1299.99,
      image: headphonesPremium,
      rating: 4.9,
      reviews: 89,
      badge: "DESTAQUE",
      category: "Periféricos"
    },
    {
      id: "3",
      name: "Teclado Mecânico RGB Gaming Pro Switch Blue",
      price: 549.99,
      originalPrice: 799.99,
      image: keyboardGaming,
      rating: 4.7,
      reviews: 203,
      badge: "OFERTA",
      category: "Periféricos"
    },
    {
      id: "4",
      name: "Smartphone Premium 256GB Camera 108MP",
      price: 2999.99,
      originalPrice: 3999.99,
      image: smartphonePremium,
      rating: 4.6,
      reviews: 156,
      category: "Smartphones"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Produtos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Confira nossa seleção especial dos produtos mais vendidos e bem avaliados pelos nossos clientes.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Link to="/produtos">
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
            >
              Ver Todos os Produtos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;