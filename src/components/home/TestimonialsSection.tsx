import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "João M. Silva",
      avatar: "/placeholder.svg",
      rating: 5,
      comment: "A Vable.ia me surpreendeu! Produtos incríveis e entrega rápida. Recomendo demais!",
      product: "Notebook Gamer RTX 4070",
      date: "Há 2 dias"
    },
    {
      id: 2,
      name: "Maria C. Santos",
      avatar: "/placeholder.svg",
      rating: 5,
      comment: "Atendimento excepcional e preços justos. Já é minha loja favorita de tecnologia.",
      product: "Headphone Premium Wireless",
      date: "Há 1 semana"
    },
    {
      id: 3,
      name: "Carlos R. Oliveira",
      avatar: "/placeholder.svg",
      rating: 5,
      comment: "Compra segura, produto original e suporte nota 10. Super satisfeito com a experiência.",
      product: "Smartphone Premium 256GB",
      date: "Há 3 dias"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            O que nossos <span className="gradient-text">Clientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milhares de clientes satisfeitos já escolheram a Vable.ia. Veja alguns depoimentos reais.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Comment */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.comment}"
              </blockquote>

              {/* Customer Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
                
                {/* Product Purchased */}
                <div className="bg-accent rounded-lg p-3">
                  <div className="text-xs text-muted-foreground mb-1">
                    Produto comprado:
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {testimonial.product}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full">
            <Star className="h-5 w-5 text-yellow-400 fill-current mr-2" />
            <span className="font-semibold mr-2">4.9/5</span>
            <span className="text-sm">baseado em 2.847 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;