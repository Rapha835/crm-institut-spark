import { Award, Users, Target, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import qualiopiLogo from "@/assets/qualiopi-logo.png";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Expertise Reconnue",
      description:
        "Formateurs experts avec une expérience terrain confirmée dans leurs domaines respectifs.",
    },
    {
      icon: Users,
      title: "Accompagnement Personnalisé",
      description:
        "Formations sur-mesure adaptées aux besoins spécifiques de votre entreprise.",
    },
    {
      icon: Target,
      title: "Approche Pratique",
      description:
        "Méthodes pédagogiques axées sur la mise en pratique et les cas d'usage réels.",
    },
    {
      icon: TrendingUp,
      title: "ROI Mesurable",
      description:
        "Parcours conçus pour générer un retour sur investissement rapide et tangible.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Votre Partenaire Formation de Confiance
          </h2>
          <p className="text-lg text-muted-foreground">
            CRM Institut accompagne les PME et ETI dans leur transformation
            digitale grâce à des formations certifiées Qualiopi, éligibles au
            financement CPF et OPCO. Nos programmes allient théorie et pratique
            pour garantir une montée en compétences rapide et efficace de vos
            équipes.
          </p>
        </div>

        {/* Certification Badge */}
        <div className="flex justify-center mb-16">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <img 
              src={qualiopiLogo} 
              alt="Certification Qualiopi - CRM Institut certifié pour les actions de formation" 
              className="h-32 w-auto"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-card-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
