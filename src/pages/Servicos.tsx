import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Headphones, Truck, Wrench, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Servicos = () => {
  const services = [
    {
      icon: Shield,
      title: "Garantia Estendida",
      description: "Proteção adicional para seus produtos com cobertura completa contra defeitos.",
      features: ["Até 3 anos de garantia", "Suporte técnico especializado", "Troca rápida em caso de defeito"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Atendimento técnico especializado disponível todos os dias da semana.",
      features: ["Chat online 24h", "WhatsApp Business", "Suporte por telefone"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Wrench,
      title: "Consultoria de Compra",
      description: "Nossa equipe te ajuda a escolher o produto ideal para suas necessidades.",
      features: ["Análise personalizada", "Comparativo de produtos", "Recomendações especializadas"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Truck,
      title: "Entrega Express",
      description: "Receba seus produtos no mesmo dia ou em até 24 horas úteis.",
      features: ["Entrega em SP capital", "Rastreamento em tempo real", "Seguro total da mercadoria"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-lighter to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Nossos <span className="gradient-text">Serviços</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Muito mais que uma loja online. Oferecemos serviços completos para garantir 
              a melhor experiência tecnológica para você.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-hover transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button className="w-full" variant="outline">
                      Saiba Mais
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Serviços <span className="gradient-text">Adicionais</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Outros serviços que oferecemos para tornar sua experiência ainda melhor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Programa Fidelidade</h3>
                <p className="text-muted-foreground text-sm">
                  Acumule pontos a cada compra e troque por descontos exclusivos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Agendamento</h3>
                <p className="text-muted-foreground text-sm">
                  Agende a entrega no horário mais conveniente para você.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Wrench className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Instalação</h3>
                <p className="text-muted-foreground text-sm">
                  Serviço de instalação e configuração para produtos selecionados.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Precisa de ajuda especializada?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Nossa equipe está pronta para oferecer o suporte que você precisa.
          </p>
          <Link to="/contato">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Falar com Especialista
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;