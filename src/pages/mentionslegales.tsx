import React from 'react';
import { Scale, Shield, Globe, Lock, Cookie, AlertCircle, ExternalLink } from 'lucide-react';

export default function MentionsLegales() {
  const sections = [
    {
      icon: Scale,
      title: "Éditeur du site",
      content: (
        <>
          <p className="mb-3">Le site web <a href="https://crminstitut.fr" className="text-blue-600 hover:text-blue-800 underline transition-colors">https://crminstitut.fr</a> est édité par :</p>
          <div className="bg-gray-50 rounded-lg p-4 space-y-1.5">
            <p><span className="font-semibold">CRM Institut</span></p>
            <p className="text-sm">SAS au capital social de 2 000 euros</p>
            <p className="text-sm">SIREN : 947 951 075</p>
            <p className="text-sm">Numéro de déclaration d'activité : 11950799295</p>
            <p className="text-sm">Certification Qualiopi</p>
            <p className="text-sm">Siège social : 49 rue des Picottes, 95150 Taverny</p>
            <p className="text-sm">Responsable légal : Raphael Breme</p>
            <p className="text-sm">Email : <a href="mailto:crminstitut@gmail.com" className="text-blue-600 hover:text-blue-800 underline transition-colors">crminstitut@gmail.com</a></p>
          </div>
        </>
      )
    },
    {
      icon: Globe,
      title: "Hébergement",
      content: (
        <>
          <p className="mb-3">Le site <a href="https://crminstitut.fr" className="text-blue-600 hover:text-blue-800 underline transition-colors">https://crminstitut.fr</a> est hébergé par :</p>
          <div className="bg-gray-50 rounded-lg p-4 space-y-1.5">
            <p><span className="font-semibold">Hetzner Online GmbH</span></p>
            <p className="text-sm">Adresse : Fürst-Franz-Straße 70, 91710 Gunzenhausen, Allemagne</p>
            <p className="text-sm">Téléphone : +49 9831 5090 0</p>
            <p className="text-sm">Site web : <a href="https://www.hetzner.com" className="text-blue-600 hover:text-blue-800 underline transition-colors inline-flex items-center gap-1">
              https://www.hetzner.com
              <ExternalLink className="w-3 h-3" />
            </a></p>
          </div>
        </>
      )
    },
    {
      icon: Shield,
      title: "Propriété intellectuelle",
      content: (
        <p className="leading-relaxed">
          Tous les contenus présents sur ce site (textes, images, logos, icônes, vidéos, bases de données, logiciels) sont la propriété exclusive de CRM Institut ou de leurs auteurs respectifs. Toute reproduction, représentation, adaptation, traduction ou utilisation, en tout ou partie, de ces contenus, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation préalable écrite de CRM Institut.
        </p>
      )
    },
    {
      icon: Lock,
      title: "Données personnelles",
      content: (
        <div className="space-y-3">
          <p className="leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD), CRM Institut collecte et traite les données personnelles des utilisateurs de ce site uniquement dans le cadre de ses activités de formation.
          </p>
          <p className="leading-relaxed">
            Les données collectées sont strictement nécessaires à la gestion des demandes, inscriptions, et communications liées à nos prestations. Elles sont conservées pendant la durée strictement nécessaire et ne sont jamais vendues ou communiquées à des tiers à des fins commerciales.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
            <p className="text-sm leading-relaxed">
              Le Délégué à la Protection des Données (DPO) de CRM Institut est joignable à <a href="mailto:crminstitut@gmail.com" className="text-blue-600 hover:text-blue-800 underline transition-colors font-medium">crminstitut@gmail.com</a>. Chaque utilisateur dispose des droits d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de ses données, qu'il peut exercer en contactant le DPO.
            </p>
          </div>
          <p className="leading-relaxed text-sm">
            Pour toute question relative au traitement des données personnelles, vous pouvez également adresser une réclamation auprès de la CNIL.
          </p>
        </div>
      )
    },
    {
      icon: Cookie,
      title: "Cookies",
      content: (
        <p className="leading-relaxed">
          Le site peut utiliser des cookies pour améliorer l'expérience utilisateur, analyser la fréquentation et assurer le bon fonctionnement des services. Les utilisateurs sont informés et peuvent gérer leurs préférences concernant les cookies via les paramètres de leur navigateur ou via un bandeau d'information conforme aux recommandations CNIL.
        </p>
      )
    },
    {
      icon: AlertCircle,
      title: "Responsabilité",
      content: (
        <div className="space-y-3">
          <p className="leading-relaxed">
            CRM Institut met tout en œuvre pour assurer l'exactitude et la mise à jour des informations publiées sur ce site, mais ne saurait être responsable des erreurs, omissions ou perturbations liées à l'accès au site ou son utilisation.
          </p>
          <p className="leading-relaxed">
            En aucun cas, CRM Institut ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation ou de l'impossibilité d'utiliser ce site.
          </p>
        </div>
      )
    },
    {
      icon: ExternalLink,
      title: "Liens hypertextes",
      content: (
        <p className="leading-relaxed">
          Les liens externes présents sur ce site sont fournis à titre informatif. CRM Institut ne saurait être tenue responsable du contenu des sites tiers accessibles par ces liens.
        </p>
      )
    },
    {
      icon: Scale,
      title: "Loi applicable",
      content: (
        <p className="leading-relaxed">
          Les présentes mentions légales sont régies par le droit français. En cas de litige, seuls les tribunaux français sont compétents.
        </p>
      )
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-white text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 tracking-tight">
            Mentions légales
          </h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900">
                      {section.title}
                    </h2>
                    <div className="text-gray-700 text-sm">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © CRM Institut - Tous droits réservés. Reproduction interdite sans autorisation écrite.
          </p>
        </footer>
      </div>
    </section>
  );
}
