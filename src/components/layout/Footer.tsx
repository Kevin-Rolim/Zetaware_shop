import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Shield,
  Truck,
  CreditCard,
  Headphones
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="text-xl font-bold">Vable.ia</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Sua loja de tecnologia sem complicação. Produtos incríveis com entrega rápida e segura.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-primary-light cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-primary-light cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-primary-light cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-primary-light cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/produtos" className="hover:text-primary-light transition-colors">Produtos</Link></li>
              <li><Link to="/ofertas" className="hover:text-primary-light transition-colors">Ofertas Especiais</Link></li>
              <li><Link to="/sobre" className="hover:text-primary-light transition-colors">Sobre Nós</Link></li>
              <li><Link to="/servicos" className="hover:text-primary-light transition-colors">Serviços</Link></li>
              <li><Link to="/blog" className="hover:text-primary-light transition-colors">Blog</Link></li>
              <li><Link to="/contato" className="hover:text-primary-light transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Categorias */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Categorias</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/produtos/notebooks" className="hover:text-primary-light transition-colors">Notebooks</Link></li>
              <li><Link to="/produtos/perifericos" className="hover:text-primary-light transition-colors">Periféricos</Link></li>
              <li><Link to="/produtos/acessorios" className="hover:text-primary-light transition-colors">Acessórios</Link></li>
              <li><Link to="/produtos/hardware" className="hover:text-primary-light transition-colors">Hardware</Link></li>
              <li><Link to="/produtos/smartphones" className="hover:text-primary-light transition-colors">Smartphones</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary-light" />
                <span>Rua da Tecnologia, 123<br />São Paulo - SP, 01234-567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary-light" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary-light" />
                <span>contato@vable.ia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-primary-light/20">
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-primary-light" />
            <div>
              <div className="font-semibold">Compra Segura</div>
              <div className="text-xs text-primary-foreground/80">SSL e LGPD</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="h-8 w-8 text-primary-light" />
            <div>
              <div className="font-semibold">Entrega Rápida</div>
              <div className="text-xs text-primary-foreground/80">Todo o Brasil</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <CreditCard className="h-8 w-8 text-primary-light" />
            <div>
              <div className="font-semibold">Parcelamento</div>
              <div className="text-xs text-primary-foreground/80">Até 12x sem juros</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Headphones className="h-8 w-8 text-primary-light" />
            <div>
              <div className="font-semibold">Suporte 24h</div>
              <div className="text-xs text-primary-foreground/80">Chat e WhatsApp</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-primary-light/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-primary-foreground/80">
              © 2024 Vable.ia. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/politicas/privacidade" className="hover:text-primary-light transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/politicas/termos" className="hover:text-primary-light transition-colors">
                Termos de Uso
              </Link>
              <Link to="/politicas/trocas" className="hover:text-primary-light transition-colors">
                Trocas e Devoluções
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;