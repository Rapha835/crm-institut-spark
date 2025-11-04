import { Button } from "@/components/ui/button";
import { BookOpen, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Formation professionnelle CRM Institut"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-dark/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Certification Badges */}
          <div className="flex justify-center gap-4 mb-8 animate-fade-in">
            <div className="bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-4 py-2 text-primary-foreground font-semibold">
              🎓 Certifié Qualiopi
            </div>
            <div className="bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg px-4 py-2 text-primary-foreground font-semibold">
              💼 CPF & OPCO
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            Formations Professionnelles en{" "}
            <span className="text-primary-light">IA, CRM, ERP et Data</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in">
            Développez les compétences de vos équipes avec des formations
            certifiées, éligibles au financement CPF et OPCO
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open("#digiforma", "_blank")}
              className="w-full sm:w-auto text-lg px-8 py-6"
            >
              <BookOpen className="mr-2" size={20} />
              Découvrir nos formations
            </Button>
            <Button
              variant="hero-outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto text-lg px-8 py-6"
            >
              <Mail className="mr-2" size={20} />
              Prendre contact
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-12 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/80 mb-6 text-sm font-medium">
              Ils nous font confiance
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/60">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">
                  +20
                </div>
                <div className="text-sm">Années d'expertise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-foreground">
                  98%
                </div>
                <div className="text-sm">Taux de satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
