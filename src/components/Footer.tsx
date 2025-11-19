import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">CRM Institut</h3>
            <p className="text-background/80 mb-4">
              Organisme de formation certifié Qualiopi spécialisé en
              Intelligence Artificielle, CRM, ERP, Data et Business
              Intelligence. Formations éligibles CPF et OPCO.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/crminstitut/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:crminstitut@gmail.com"
                className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {["Accueil", "À propos", "Formations", "Témoignages", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        scrollToSection(
                          item === "Accueil"
                            ? "hero"
                            : item === "À propos"
                            ? "about"
                            : item.toLowerCase()
                        )
                      }
                      className="text-background/80 hover:text-background transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://crminstitut.catalogueformpro.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Catalogue Digiforma
                </a>
              </li>
              <li>
                <a
                  href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche/resultats?q=%7B%22ou%22:%7B%22modality%22:%22A_DISTANCE%22,%22type%22:%22CP%22%7D,%22debutPagination%22:1,%22nombreOccurences%22:10,%22contexteFormation%22:%22ACTIVITE_PROFESSIONNELLE%22,%22quoi%22:%22création%22,%22certifications%22:null,%22niveauSortie%22:null,%22minPrix%22:null,%22maxPrix%22:null,%22onlyWithAbondementsEligibles%22:null,%22startDate%22:null,%22endDate%22:null,%22durationHours%22:null,%22nomOrganisme%22:%22CRM%20INSTITUT%20SAS%22,%22evaluation%22:null,%22quoiReferentiel%22:null,%22rythme%22:null%7D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Mon Compte Formation
                </a>
              </li>
              <li>
                <a
                  href="/mentionslegales"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/cgv"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  CGV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/80 text-sm">
            © {currentYear} CRM Institut. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-sm text-background/80">
            <span>🎓 Certification Qualiopi</span>
            <span>•</span>
            <span>💼 Organisme référencé CPF</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
