import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "Como escolher o notebook ideal para trabalho remoto",
      excerpt: "Descubra as especificações essenciais e dicas para encontrar o laptop perfeito para suas necessidades profissionais.",
      category: "Guias",
      author: "Tech Team",
      date: "2024-01-15",
      readTime: "5 min",
      image: "/placeholder.svg",
      featured: true
    },
    {
      id: "2",
      title: "Tendências em periféricos gaming para 2024",
      excerpt: "Conheça as novidades em teclados, mouses e headsets que estão revolucionando o mundo dos games.",
      category: "Gaming",
      author: "João Silva",
      date: "2024-01-12",
      readTime: "7 min",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: "3",
      title: "Smartphones com melhor custo-benefício",
      excerpt: "Análise completa dos celulares que oferecem o melhor valor pelo dinheiro investido.",
      category: "Reviews",
      author: "Maria Santos",
      date: "2024-01-10",
      readTime: "6 min",
      image: "/placeholder.svg",
      featured: false
    },
    {
      id: "4",
      title: "Configuração de PC para edição de vídeo",
      excerpt: "Guia completo sobre hardware necessário para trabalhar com edição de vídeo profissionalmente.",
      category: "Tutoriais",
      author: "Carlos Tech",
      date: "2024-01-08",
      readTime: "10 min",
      image: "/placeholder.svg",
      featured: false
    }
  ];

  const categories = ["Todos", "Guias", "Reviews", "Gaming", "Tutoriais", "Notícias"];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-lighter to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Blog <span className="gradient-text">Vable.ia</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Dicas, reviews, tutoriais e as últimas novidades do mundo da tecnologia. 
              Mantenha-se atualizado com nosso conteúdo especializado.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.find(post => post.featured) && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <Badge className="mb-4">Post em Destaque</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {blogPosts.find(post => post.featured)?.title}
                </h2>
              </div>
              
              <Card className="overflow-hidden hover:shadow-hover transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video bg-muted"></div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{blogPosts.find(post => post.featured)?.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(blogPosts.find(post => post.featured)?.date || "")}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{blogPosts.find(post => post.featured)?.readTime}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {blogPosts.find(post => post.featured)?.excerpt}
                    </p>
                    
                    <Button className="btn-hero group w-fit">
                      Ler Artigo Completo
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-accent/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Últimos <span className="gradient-text">Artigos</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Conteúdo atualizado semanalmente para manter você informado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-hover transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Placeholder */}
                <div className="aspect-video bg-muted"></div>
                
                <CardContent className="p-6">
                  {/* Category Badge */}
                  <Badge variant="secondary" className="mb-3">
                    {post.category}
                  </Badge>
                  
                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Read More Link */}
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm" className="w-full group">
                      Ler Mais
                      <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Receba novos <span className="gradient-text">artigos</span> por email
            </h2>
            <p className="text-muted-foreground mb-8">
              Inscreva-se em nossa newsletter e seja o primeiro a saber sobre novos conteúdos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="btn-hero">
                Inscrever
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;