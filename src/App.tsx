import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Truck, 
  Landmark, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Facebook,
  Anchor,
  Globe,
  Award
} from 'lucide-react';

// --- Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'outline' }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#F0B1F0] hover:bg-[#E090E0] text-[#1F2C40] font-bold shadow-lg shadow-fuchsia-500/20 focus:ring-fuchsia-400",
    secondary: "bg-[#B099CB] hover:bg-[#9F86C0] text-white shadow-md focus:ring-purple-400",
    outline: "border-2 border-white text-white hover:bg-white/10 focus:ring-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const NovaLogo = ({ className = "", light = false }: { className?: string, light?: boolean }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    {/* Logo Icon - Wing Shape */}
    <svg width="58" height="38" viewBox="0 0 58 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <path d="M0 12C15 12 45 2 58 0V12C45 14 15 22 0 22V12Z" fill="#B099CB" />
      <path d="M0 24C15 24 42 18 55 14V24C42 28 15 32 0 32V24Z" fill="#D946EF" />
      <path d="M0 34C12 34 35 30 45 26V38H0V34Z" fill="#F0B1F0" />
    </svg>
    <div className="flex flex-col justify-center">
      <div className={`flex items-baseline leading-none ${light ? 'text-white' : 'text-[#1F2C40]'}`}>
        <span className="font-display font-bold text-3xl tracking-tight">NOVA</span>
        <span className="font-sans font-light text-3xl ml-1 opacity-90">ES</span>
      </div>
      <span className={`text-[0.65rem] uppercase tracking-wider mt-1 ${light ? 'text-gray-300' : 'text-gray-500'}`}>
        Agência de Atração de Investimentos
      </span>
    </div>
  </div>
);

const SectionHeading = ({ title, subtitle, align = 'center' }: { title: string, subtitle?: string, align?: 'left' | 'center' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-display font-bold text-[#1F2C40] mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-gray-600 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className={`h-1 w-20 bg-[#F0B1F0] mt-6 ${align === 'center' ? 'mx-auto' : ''} rounded-full`} />
  </div>
);

const ServiceCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#B099CB] group h-full"
  >
    <div className="w-14 h-14 bg-[#F5F5F5] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1F2C40] transition-colors duration-300">
      <Icon className="w-7 h-7 text-[#1F2C40] group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-display font-bold text-[#1F2C40] mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
  </motion.div>
);

const StatCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="flex flex-col items-start text-left p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-[#F0B1F0]"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-[#1F2C40]/5 rounded-lg text-[#1F2C40]">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-display font-bold text-[#1F2C40]">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Quem Somos', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Por que ES?', href: '#why-invest' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-gray-800 overflow-x-hidden">
      
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#1F2C40]/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#" className="group">
            <NovaLogo light={true} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-sm font-medium hover:text-[#F0B1F0] transition-colors ${
                  isScrolled ? 'text-gray-200' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="!py-2 !px-4 text-sm gap-2">
              <Phone className="w-4 h-4" />
              WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-[#1F2C40] border-t border-white/10 p-4 shadow-xl md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-200 hover:text-[#F0B1F0] py-2 px-4 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="w-full justify-center gap-2">
              <Phone className="w-4 h-4" />
              Fale no WhatsApp
            </Button>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-br from-[#1F2C40] via-[#2b3d5a] to-[#B099CB]" />
          <div className="absolute inset-0 bg-[#1F2C40]/70" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white leading-tight mb-8 tracking-tight">
                Escolha o crescimento. <br />
                Invista no <span className="text-[#F0B1F0]">Espírito Santo</span>.
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                O ambiente de negócios mais seguro e competitivo do Brasil espera por sua empresa. 
                Conectamos oportunidades a investidores com suporte completo.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="primary" className="gap-2 text-lg">
                  Fale Conosco <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" className="text-lg">
                  Conheça Nossos Serviços
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Seu Ponto Focal Estratégico" 
            subtitle="A NOVA ES atua como one-stop-shop para empresas que buscam investir no estado, oferecendo suporte técnico, institucional e estratégico."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={CheckCircle2}
              title="One Stop Shop"
              description="Atuamos como ponto focal estratégico. Centralizamos informações e processos para empresas que buscam investir no estado, reduzindo atritos e acelerando decisões."
              delay={0.1}
            />
            <ServiceCard 
              icon={TrendingUp}
              title="Suporte Full a Investidores"
              description="Oferecemos suporte técnico, institucional e estratégico. Desde dados e geo-inteligência para definição de localização até identificação de benefícios fiscais e linhas de financiamento."
              delay={0.2}
            />
            <ServiceCard 
              icon={MapPin}
              title="Acompanhamento Ponta a Ponta"
              description="Gestão personalizada do início à operação. Acompanhamento dedicado, confidencial e articulação com órgãos públicos e licenciadores."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section id="why-invest" className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading 
                title="Por Que Investir no ES?" 
                subtitle="Solidez institucional e oportunidades reais de investimento."
                align="left"
              />
              
              <div className="grid gap-6 mt-8">
                <StatCard 
                  icon={MapPin}
                  title="Localização Estratégica"
                  description="Próxima a 70% do PIB do Brasil, com gateway sólido de importação e exportação."
                />
                <StatCard 
                  icon={Truck}
                  title="Logística Integrada"
                  description="Infraestrutura logística integrada com portos, rodovias e ferrovias."
                />
                <StatCard 
                  icon={Landmark}
                  title="Fundo Soberano"
                  description="Único estado com Fundo Soberano próprio, garantindo estabilidade e capacidade de investimento público contínuo."
                />
                <StatCard 
                  icon={Globe}
                  title="Primeira ZPE Privada"
                  description="Primeira ZPE privada do Brasil, com benefícios federais garantidos por até 20 anos."
                />
                <StatCard 
                  icon={Award}
                  title="Gestão Fiscal Nota A"
                  description="14 anos consecutivos com Gestão Fiscal Nota A, sinônimo de solidez financeira e previsibilidade."
                />
              </div>
            </div>
            
            <div className="relative sticky top-24">
              <div className="absolute -inset-4 bg-[#B099CB]/20 rounded-2xl transform rotate-3" />
              <div className="relative rounded-2xl shadow-2xl w-full h-[800px] overflow-hidden bg-gradient-to-br from-[#1F2C40] via-[#B099CB] to-[#F0B1F0]">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4 text-white/90">
                    <Anchor className="w-16 h-16" />
                    <span className="text-lg font-semibold">Imagem ilustrativa</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-[#1F2C40] p-3 rounded-full text-white">
                    <TrendingUp />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider">PIB em Crescimento</p>
                    <p className="text-2xl font-bold text-[#1F2C40]">+4.5% acima da média nacional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Setores em Destaque" subtitle="O Espírito Santo é terra fértil para diversos segmentos econômicos." />
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { Icon: TrendingUp, title: "Indústria 4.0", tag: "Tecnologia & Produção" },
              { Icon: Truck, title: "Logística Avançada", tag: "Hub de Distribuição" },
              { Icon: Landmark, title: "Comércio Atacadista", tag: "Incentivos Fiscais" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg h-80 cursor-pointer"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#1F2C40] via-[#B099CB] to-[#F0B1F0] flex items-center justify-center">
                  <item.Icon className="w-16 h-16 text-white/80 drop-shadow" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2C40] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-[#F0B1F0] text-xs font-bold uppercase tracking-wider mb-2 block">{item.tag}</span>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1F2C40] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#B099CB]/10 skew-x-12 transform translate-x-20" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Pronto para expandir seus horizontes?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Agende uma reunião com nossos especialistas e descubra todos os benefícios fiscais e logísticos que o ES tem para oferecer.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" className="text-lg px-8 py-4">
              Falar com Consultor
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-gray-500 text-gray-300 hover:text-white hover:border-white">
              Baixar Guia de Investimentos
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#151e2e] text-gray-400 py-16 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <a href="#" className="block mb-6">
                <NovaLogo light={true} />
              </a>
              <p className="text-sm leading-relaxed mb-6">
                A NOVA ES conecta oportunidades, constrói pontes e cria o ambiente certo para quem quer investir no estado mais sólido do Brasil.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F0B1F0] hover:text-[#1F2C40] transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F0B1F0] hover:text-[#1F2C40] transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F0B1F0] hover:text-[#1F2C40] transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-[#F0B1F0] transition-colors">Quem Somos</a></li>
                <li><a href="#" className="hover:text-[#F0B1F0] transition-colors">Nossos Serviços</a></li>
                <li><a href="#" className="hover:text-[#F0B1F0] transition-colors">Setores Estratégicos</a></li>
                <li><a href="#" className="hover:text-[#F0B1F0] transition-colors">Incentivos Fiscais</a></li>
                <li><a href="#" className="hover:text-[#F0B1F0] transition-colors">Notícias</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Contato</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#F0B1F0] shrink-0" />
                  <span>Rua Manoel Feu Subtil, 60 - 2º andar<br />Enseada do Suá, Vitória/ES</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#F0B1F0] shrink-0" />
                  <span>+55 (27) 98107-9000</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#F0B1F0] shrink-0" />
                  <span>negocios@nova-es.org.br</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="text-sm mb-4">Receba novidades sobre oportunidades de investimento no ES.</p>
              <form className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Seu e-mail corporativo" 
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#F0B1F0] transition-colors"
                />
                <Button variant="primary" className="w-full">Inscrever-se</Button>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; 2024 NOVA ES. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

