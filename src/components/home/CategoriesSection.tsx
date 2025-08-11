import { Link } from "react-router-dom";
import { 
  Laptop, 
  Headphones, 
  Smartphone, 
  HardDrive,
  Mouse,
  Monitor,
  ArrowRight
} from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    {
      id: "notebooks",
      name: "Notebooks",
      description: "Laptops para trabalho e gaming",
      icon: Laptop,
      href: "/produtos/notebooks",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: "perifericos",
      name: "Periféricos",
      description: "Teclados, mouses e headsets",
      icon: Headphones,
      href: "/produtos/perifericos",
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: "smartphones",
      name: "Smartphones",
      description: "Celulares e tablets",
      icon: Smartphone,
      href: "/produtos/smartphones",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: "hardware",
      name: "Hardware",
      description: "Componentes e peças",
      icon: HardDrive,
      href: "/produtos/hardware",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: "acessorios",
      name: "Acessórios",
      description: "Cabos, carregadores e mais",
      icon: Mouse,
      href: "/produtos/acessorios",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: "monitores",
      name: "Monitores",
      description: "Displays para trabalho e gaming",
      icon: Monitor,
      href: "/produtos/monitores",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-accent/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Explore por <span className="gradient-text">Categoria</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Encontre exatamente o que você precisa navegando pelas nossas categorias especializadas.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link
                key={category.id}
                to={category.href}
                className="group"
              >
                <div 
                  className="category-card animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Category Info */}
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {category.description}
                  </p>
                  
                  {/* Arrow Icon */}
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-medium mr-2">Explorar</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;