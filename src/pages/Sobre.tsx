import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Truck, Heart, Award, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Sobre = () => {
  const values = [
    {
      icon: Heart,
      title: "Paixão por Tecnologia",
      description: "Amamos o que fazemos e isso se reflete na qualidade dos nossos produtos e atendimento."
    },
    {
      icon: Shield,
      title: "Confiança e Segurança",
      description: "Garantimos a autenticidade de todos os produtos e a segurança em todas as transações."
    },
    {
      icon: Users,
      title: "Foco no Cliente",
      description: "Nossos clientes são nossa prioridade. Trabalhamos para superar suas expectativas."
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Buscamos constantemente a excelência em produtos, preços e experiência de compra."
    }
  ];

  const stats = [
    { number: "50.000+", label: "Clientes Satisfeitos" },
    { number: "1.000+", label: "Produtos Disponíveis" },
    { number: "99%", label: "Taxa de Satisfação" },
    { number: "24h", label: "Suporte Disponível" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-lighter to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Sobre a <span className="gradient-text">Vable.ia</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Somos uma empresa 100% brasileira, apaixonada por tecnologia e dedicada a 
              oferecer os melhores produtos tech com preços justos e atendimento excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Missão */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso à tecnologia de qualidade, oferecendo produtos 
                inovadores com preços acessíveis e experiência de compra excepcional.
              </p>
            </div>

            {/* Visão */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como a principal referência em e-commerce de tecnologia 
                no Brasil, pela qualidade, confiabilidade e inovação.
              </p>
            </div>

            {/* Valores */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transparência, ética, excelência no atendimento e compromisso com a 
                satisfação total de nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Details */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              O que nos <span className="gradient-text">Move</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Nossos valores fundamentais guiam cada decisão e ação em nossa jornada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-card hover:shadow-hover transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Números que <span className="gradient-text">Impressionam</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Resultados que comprovam nossa dedicação e qualidade.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Pronto para fazer parte da nossa história?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubra por que milhares de clientes confiam na Vable.ia para suas necessidades tecnológicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/produtos">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Explorar Produtos
              </Button>
            </Link>
            <Link to="/contato">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Entre em Contato
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;