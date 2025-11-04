import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Database, BarChart3, ExternalLink } from "lucide-react";

const Formations = () => {
  const formations = [
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description:
        "Maîtrisez les outils et techniques d'IA pour transformer vos processus métier. De l'initiation aux concepts avancés de Machine Learning et Deep Learning.",
      outcomes: [
        "Comprendre les fondamentaux de l'IA",
        "Implémenter des solutions d'IA concrètes",
        "Optimiser vos processus avec l'automatisation",
        "Exploiter ChatGPT et les LLM en entreprise",
      ],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Database,
      title: "CRM & ERP",
      description:
        "Optimisez votre gestion client et vos processus internes avec les solutions CRM et ERP du marché. Formations sur Salesforce, Microsoft Dynamics, Odoo et plus.",
      outcomes: [
        "Déployer et paramétrer votre CRM/ERP",
        "Améliorer la productivité commerciale",
        "Automatiser vos workflows métier",
        "Exploiter les données pour piloter l'activité",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: BarChart3,
      title: "Data & Business Intelligence",
      description:
        "Transformez vos données en insights actionnables. Formations Power BI, Tableau, SQL et Python pour la data analyse et la visualisation.",
      outcomes: [
        "Collecter et structurer vos données",
        "Créer des tableaux de bord performants",
        "Analyser et prédire les tendances",
        "Prendre des décisions data-driven",
      ],
      color: "from-emerald-500 to-teal-600",
    },
  ];

  return (
    <section id="formations" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Nos Domaines de Formation
          </h2>
          <p className="text-lg text-muted-foreground">
            Des programmes complets conçus pour répondre aux enjeux de
            transformation digitale de votre entreprise.
          </p>
        </div>

        {/* Formations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {formations.map((formation, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-card-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${formation.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <formation.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {formation.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{formation.description}</p>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Objectifs de la formation :
                  </h4>
                  <ul className="space-y-2">
                    {formation.outcomes.map((outcome, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <span className="text-primary mr-2 mt-0.5">✓</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Découvrez notre catalogue complet
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Explorez l'intégralité de nos programmes de formation, calendriers
            et modalités de financement sur notre plateforme Digiforma.
          </p>
          <Button
            size="lg"
            onClick={() => window.open("#digiforma", "_blank")}
            className="text-lg px-8"
          >
            Voir notre catalogue complet
            <ExternalLink className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Formations;
