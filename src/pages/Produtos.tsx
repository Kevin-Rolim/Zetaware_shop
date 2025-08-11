import { useState } from "react";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/home/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, Grid, List } from "lucide-react";

import laptopGaming from "@/assets/laptop-gaming.jpg";
import headphonesPremium from "@/assets/headphones-premium.jpg";
import keyboardGaming from "@/assets/keyboard-gaming.jpg";
import smartphonePremium from "@/assets/smartphone-premium.jpg";

const Produtos = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 15000]);

  const allProducts = [
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
    },
    // Duplicando produtos para demonstração
    {
      id: "5",
      name: "Notebook Ultrabook Profissional Intel i7",
      price: 4999.99,
      originalPrice: 6999.99,
      image: laptopGaming,
      rating: 4.5,
      reviews: 98,
      category: "Notebooks"
    },
    {
      id: "6",
      name: "Headset Gamer RGB 7.1 Surround",
      price: 299.99,
      originalPrice: 449.99,
      image: headphonesPremium,
      rating: 4.4,
      reviews: 67,
      badge: "PROMOÇÃO",
      category: "Periféricos"
    }
  ];

  const categories = ["Todos", "Notebooks", "Periféricos", "Smartphones", "Hardware", "Acessórios"];
  const brands = ["Apple", "Samsung", "Dell", "Asus", "Logitech", "Razer", "Corsair"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Nossos <span className="gradient-text">Produtos</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore nossa vasta seleção de produtos tecnológicos com os melhores preços do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-card sticky top-4">
              <h3 className="font-semibold text-lg mb-6">Filtros</h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-2 block">Buscar produto</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Digite o nome do produto..." className="pl-10" />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-4 block">Faixa de Preço</label>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={15000}
                    step={100}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>R$ {priceRange[0]}</span>
                    <span>R$ {priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-4 block">Categorias</label>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={category} />
                      <label htmlFor={category} className="text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <label className="text-sm font-medium mb-4 block">Marcas</label>
                <div className="space-y-3">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={brand} />
                      <label htmlFor={brand} className="text-sm">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <Button variant="outline" className="w-full">
                Limpar Filtros
              </Button>
            </div>
          </div>

          {/* Products Area */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="text-sm text-muted-foreground">
                Mostrando {allProducts.length} de {allProducts.length} produtos
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Sort */}
                <Select defaultValue="featured">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Mais Vendidos</SelectItem>
                    <SelectItem value="price-low">Menor Preço</SelectItem>
                    <SelectItem value="price-high">Maior Preço</SelectItem>
                    <SelectItem value="newest">Mais Recentes</SelectItem>
                    <SelectItem value="rating">Melhor Avaliação</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode */}
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" 
                : "grid-cols-1"
            }`}>
              {allProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProductCard {...product} />
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Carregar Mais Produtos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Produtos;