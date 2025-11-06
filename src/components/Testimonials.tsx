import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Formation de qualité exceptionnelle, parfaitement adaptée à nos besoins. Les formateurs sont des vrais experts qui connaissent le terrain.",
      author: "Sophie M.",
      role: "Responsable Formation",
      company: "PME Industrielle (120 collaborateurs)",
      rating: 5,
    },
    {
      quote:
        "Grâce à CRM Institut, nos équipes ont pu monter en compétences rapidement sur Power BI. Le ROI a été immédiat avec de meilleurs tableaux de bord.",
      author: "Thomas D.",
      role: "Directeur des Systèmes d'Information",
      company: "Entreprise de services (250 collaborateurs)",
      rating: 5,
    },
    {
      quote:
        "L'accompagnement personnalisé fait toute la différence. Le formateur a su adapter le programme à notre contexte métier spécifique.",
      author: "Marie L.",
      role: "Directrice Commerciale",
      company: "ETI Distribution (180 collaborateurs)",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ce Que Disent Nos Clients
          </h2>
          <p className="text-lg text-muted-foreground">
            Des entreprises qui nous ont fait confiance pour former leurs
            équipes et accélérer leur transformation digitale.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-card-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author Info */}
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Rejoignez les centaines d'entreprises qui ont fait le choix de CRM
            Institut pour développer les compétences de leurs équipes en IA,
            CRM, ERP et Data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
