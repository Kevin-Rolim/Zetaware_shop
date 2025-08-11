import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-lighter to-background py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                🚀 Tecnologia ao seu alcance
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Tecnologia</span> ao seu alcance.
                <br />
                <span className="text-foreground">Entregue direto para você.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Sua loja de tecnologia sem complicação. Produtos incríveis, preços justos e entrega rápida. 
                Compre hoje, receba sem sair de casa.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/produtos">
                <Button size="lg" className="btn-hero group">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Ver Ofertas
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/produtos">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Conheça nossos Produtos
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Produtos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img
                src={heroBanner}
                alt="Produtos de tecnologia - Notebooks, smartphones, headphones e acessórios"
                className="w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold shadow-lg animate-bounce">
                Novidades!
              </div>
              <div className="absolute -bottom-4 -right-4 bg-destructive text-destructive-foreground px-4 py-2 rounded-lg font-semibold shadow-lg">
                Até 50% OFF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;