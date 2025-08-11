import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  Headphones
} from "lucide-react";

const Contato = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Rua da Tecnologia, 123\nSão Paulo - SP, 01234-567",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(11) 99999-9999\n(11) 3333-3333",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@vable.ia\nsuporte@vable.ia",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Clock,
      title: "Horário",
      info: "Segunda a Sexta: 8h às 18h\nSábado: 9h às 17h",
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
              Entre em <span className="gradient-text">Contato</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Estamos aqui para ajudar! Entre em contato conosco através dos canais abaixo 
              ou envie uma mensagem usando o formulário.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-hover transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
                      {item.info}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & WhatsApp */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Envie uma <span className="gradient-text">Mensagem</span>
                </h2>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                </p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome *</Label>
                        <Input id="name" placeholder="Seu nome completo" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input id="email" type="email" placeholder="seu@email.com" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input id="phone" placeholder="(11) 99999-9999" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Assunto *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o assunto" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="duvida">Dúvida sobre produto</SelectItem>
                            <SelectItem value="pedido">Status do pedido</SelectItem>
                            <SelectItem value="suporte">Suporte técnico</SelectItem>
                            <SelectItem value="troca">Troca/Devolução</SelectItem>
                            <SelectItem value="parceria">Parceria</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Descreva sua dúvida ou solicitação..." 
                        className="min-h-32"
                        required 
                      />
                    </div>

                    <Button className="w-full btn-hero group">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp & Support */}
            <div className="space-y-8">
              {/* WhatsApp Card */}
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageSquare className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>
                  <p className="mb-6 opacity-90">
                    Fale diretamente conosco pelo WhatsApp! Atendimento rápido e personalizado.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-green-600 hover:bg-gray-100"
                    onClick={() => window.open('https://wa.me/5511999999999?text=Olá, gostaria de saber mais sobre um produto.', '_blank')}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Chamar no WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Support Card */}
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <Headphones className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Suporte Técnico</h3>
                  <p className="text-muted-foreground mb-6">
                    Precisa de ajuda com algum produto? Nossa equipe de suporte está pronta para ajudar.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Segunda a Sexta: 8h às 22h</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Sábados e Domingos: 9h às 18h</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Card */}
              <Card>
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Perguntas Frequentes</h3>
                  <p className="text-muted-foreground mb-6">
                    Confira nossa seção de FAQ para respostas rápidas às dúvidas mais comuns.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver FAQ
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;