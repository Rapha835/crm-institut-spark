import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Download } from 'lucide-react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface AccordionItemProps {
  title: string;
  number: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, number, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-blue-600">{number}</span>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        {isOpen ? <ChevronUp size={20} className="text-blue-600" /> : <ChevronDown size={20} className="text-gray-400" />}
      </button>
      {isOpen && <div className="px-6 py-4 bg-white text-gray-700 prose prose-sm max-w-none">{children}</div>}
    </div>
  );
};

export default function CGVShort() {
  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/CGV_CRM_INSTITUT.pdf';
  link.download = 'CGV_CRM_INSTITUT.pdf';
  link.click();
};

  return (
     <Header />
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Conditions Générales de Vente</h1>
              <p className="text-gray-600 text-sm">CRM Institut | Version en vigueur au 19/11/2025</p>
            </div>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm"
            >
              <Download size={18} />
              Télécharger CGV complètes
            </button>
          </div>
          
          {/* Quick Info */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm"><strong>SIREN :</strong> 947 951 075</p>
              <p className="text-sm"><strong>NDA :</strong> 11950799295</p>
              <p className="text-sm"><strong>Certification :</strong> Qualiopi</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm"><strong>Email :</strong> crminstitut@gmail.com</p>
              <p className="text-sm"><strong>Adresse :</strong> 49 rue des Picottes, 95150 Taverny</p>
              <p className="text-sm"><strong>Contact :</strong> Raphael Breme</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Préambule */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
          <p className="text-gray-800 leading-relaxed">
            Les présentes CGV s'appliquent à toute prestation de formation proposée par CRM Institut. 
            En confirmant son inscription, le Client accepte sans réserve l'ensemble des présentes CGV 
            ainsi que le Règlement intérieur de CRM Institut.
          </p>
        </div>

        {/* Accordion Sections */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <AccordionItem number="1" title="Présentation de CRM Institut" defaultOpen={true}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Identification</h4>
                <ul className="space-y-1 text-sm">
                  <li><strong>Forme juridique :</strong> SAS (Société par Actions Simplifiée)</li>
                  <li><strong>SIRET :</strong> 947 951 075 00011</li>
                  <li><strong>Certification Qualiopi :</strong> Oui</li>
                  <li><strong>NAF/APE :</strong> 85.59A – Formation continue d'adultes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Activités</h4>
                <p className="text-sm">CRM Institut accompagne les particuliers et les entreprises dans l'acquisition de compétences 
                en gestion client, intelligence artificielle, technologie et architecture de données, en présentiel, distanciel ou format mixte.</p>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem number="2" title="Formations proposées">
            <div className="space-y-3 text-sm">
              <p>CRM Institut propose des formations :</p>
              <ul className="list-disc list-inside space-y-1">
                <li>En présentiel, à distance ou hybride</li>
                <li>Inter-entreprises, intra-entreprises ou individuelles</li>
                <li>Financées (OPCO, CPF, etc.) ou auto-financées</li>
              </ul>
              <p className="text-gray-600 italic">Les descriptions, durées et prix sont à titre indicatif et feront l'objet d'une révision lors du devis.</p>
            </div>
          </AccordionItem>

          <AccordionItem number="3" title="Inscription et admission">
            <div className="space-y-3 text-sm">
              <p><strong>L'inscription s'effectue via :</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Un bulletin d'inscription (en ligne ou papier)</li>
                <li>La transmission de documents justificatifs si nécessaire</li>
              </ul>
              <p><strong>L'inscription est confirmée après :</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Réception de la convention/contrat signé</li>
                <li>Confirmation écrite de CRM Institut</li>
              </ul>
              <p className="text-gray-600">Toute inscription emporte acceptation du Règlement intérieur.</p>
            </div>
          </AccordionItem>

          <AccordionItem number="4" title="Tarifs et facturation">
            <div className="space-y-3 text-sm">
              <p><strong>Modalités de paiement :</strong></p>
              <ul className="space-y-2">
                <li>✓ <strong>30 % d'acompte</strong> à la signature</li>
                <li>✓ <strong>70 % du solde</strong> après réalisation complète</li>
              </ul>
              <p className="text-gray-600">Les tarifs sont indiqués net de TVA et confirmés à la signature du devis.</p>
              <p className="bg-blue-50 p-2 rounded text-gray-700">
                <strong>Délai :</strong> 30 jours nets après fin de formation
              </p>
            </div>
          </AccordionItem>

          <AccordionItem number="5" title="Paiement">
            <div className="space-y-3 text-sm">
              <p><strong>Sauf accord écrit entre les parties, le paiement est en une seule fois.</strong></p>
              <p><strong>Modalités acceptées :</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Virement bancaire</li>
                <li>Prélèvement automatique</li>
              </ul>
              <p className="text-red-600 font-semibold">En cas de non-paiement après 30 jours, CRM Institut peut suspendre l'accès et engager des poursuites.</p>
            </div>
          </AccordionItem>

          <AccordionItem number="6" title="Prise en charge CPF">
            <div className="space-y-3 text-sm">
              <p>La politique CPF de CRM Institut est basée sur les CGU officielles de <strong>Mon Compte Formation</strong>, 
              accessibles ici :</p>
              <a href="https://www.moncompteformation.gouv.fr/espace-public/conditions-generales-dutilisation" 
                 className="text-blue-600 hover:underline block break-all">
                https://www.moncompteformation.gouv.fr/espace-public/conditions-generales-dutilisation
              </a>
              <p className="text-gray-600">Le Client demeure responsable de la demande de prise en charge auprès de l'organisme financeur.</p>
            </div>
          </AccordionItem>

          <AccordionItem number="7" title="Annulation et remboursement">
            <div className="space-y-3 text-sm">
              <p><strong>En cas d'annulation avant la formation :</strong></p>
              <div className="bg-gray-50 p-3 rounded space-y-1 text-xs">
                <div className="flex justify-between"><span>Plus de 30 jours avant</span><span className="font-semibold">100% remboursé</span></div>
                <div className="flex justify-between border-t pt-1"><span>15-30 jours avant</span><span className="font-semibold">50% remboursé</span></div>
                <div className="flex justify-between border-t pt-1"><span>Moins de 15 jours avant</span><span className="font-semibold">0% remboursé</span></div>
                <div className="flex justify-between border-t pt-1"><span>Après début</span><span className="font-semibold">0% remboursé</span></div>
              </div>
              <p className="text-gray-600 italic">Report gratuit dans une autre session si demande 15 jours avant.</p>
            </div>
          </AccordionItem>

          <AccordionItem number="8" title="Droit de rétractation (14 jours)">
            <div className="space-y-3 text-sm">
              <p>Pour tout contrat à distance avec un <strong>consommateur</strong>, un droit de rétractation de 
              <strong> 14 jours</strong> s'applique.</p>
              <p><strong>Exercice du droit :</strong> Notification écrite à crminstitut@gmail.com</p>
              <p className="bg-yellow-50 p-2 rounded">
                ⚠️ <strong>Accord exprès :</strong> Le Client peut demander que la formation commence avant la fin des 14 jours. 
                Dans ce cas, le droit de rétractation s'éteint dès le commencement.
              </p>
              <p className="text-gray-600">Remboursement intégral sous 30 jours en cas de rétractation valide.</p>
            </div>
          </AccordionItem>

          <AccordionItem number="9" title="Règlement intérieur">
            <div className="space-y-3 text-sm">
              <p><strong>Le Règlement intérieur énonce les règles relatives à :</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Assiduité, ponctualité et présence</li>
                <li>Hygiène, sécurité et discipline</li>
                <li>Utilisation du matériel et des locaux</li>
                <li>Confidentialité des supports pédagogiques</li>
                <li>Comportement et respect mutuel</li>
              </ul>
              <p className="text-gray-600">Disponible sur demande à crminstitut@gmail.com</p>
            </div>
          </AccordionItem>

          <AccordionItem number="10" title="Accessibilité handicap">
            <div className="space-y-3 text-sm">
              <p>CRM Institut s'engage à adapter les formations aux personnes en situation de handicap conformément à la loi.</p>
              <p><strong>Adaptations possibles :</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Aménagement des horaires</li>
                <li>Supports adaptés (gros caractères, vidéos sous-titrées, etc.)</li>
                <li>Accessibilité des locaux</li>
                <li>Accompagnement par un tiers</li>
              </ul>
              <p><strong>Personne référente :</strong> crminstitut@gmail.com</p>
              <p className="text-gray-600 text-xs">Informez-nous au moins 15 jours avant le début. Toute demande d'adaptation sera étudiée sur mesure.</p>
            </div>
          </AccordionItem>

          <AccordionItem number="11" title="Données personnelles">
            <div className="space-y-3 text-sm">
              <p>CRM Institut respecte le <strong>RGPD</strong> et la loi Informatique et Libertés.</p>
              <p><strong>Droits de chaque personne :</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Droit d'accès à ses données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit à la portabilité</li>
                <li>Droit d'opposition</li>
              </ul>
              <p><strong>Délégué à la Protection des Données (DPO) :</strong> crminstitut@gmail.com</p>
              <p className="text-gray-600 text-xs">En cas de litige non résolu, réclamation possible à la CNIL : www.cnil.fr</p>
            </div>
          </AccordionItem>

          <AccordionItem number="12" title="Responsabilité">
            <div className="space-y-3 text-sm">
              <p><strong>CRM Institut s'engage à :</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>Dispenser une formation de qualité professionnelle</li>
                <li>Employer des formateurs qualifiés</li>
                <li>Respecter la convention signée</li>
              </ul>
              <p className="bg-blue-50 p-2 rounded">
                <strong>Obligation de moyen :</strong> CRM Institut ne garantit pas un résultat spécifique.
              </p>
              <p className="text-gray-600 text-sm"><strong>Non responsable de :</strong> Dommages indirects, objets perdus, frais personnels, incident trajet, plateforme Digiforma, conséquences du non-respect du Règlement.</p>
            </div>
          </AccordionItem>

          <AccordionItem number="13" title="Propriété intellectuelle">
            <div className="space-y-3 text-sm">
              <p><strong>Les supports pédagogiques restent la propriété de CRM Institut.</strong></p>
              <p className="text-red-600 font-semibold">Interdiction de :</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Reproduire ou photocopier sans autorisation</li>
                <li>Diffuser ou publier auprès de tiers</li>
                <li>Modifier les contenus</li>
              </ul>
              <p className="text-gray-600 text-sm">Violation entraîne : poursuites judiciaires, exclusion définitive, dommages et intérêts.</p>
            </div>
          </AccordionItem>

          <AccordionItem number="14" title="Médiation et litiges">
            <div className="space-y-3 text-sm">
              <p><strong>Résolution amiable :</strong> Contact à crminstitut@gmail.com – Réponse sous 15 jours</p>
              <p><strong>Médiation consommateur :</strong> CRM Institut adhère à un dispositif agréé de médiation (Médiation Consommation AME ou équivalent)</p>
              <p><strong>Juridiction compétente :</strong> Tribunal judiciaire de Pontoise</p>
              <p><strong>Loi applicable :</strong> Droit français</p>
            </div>
          </AccordionItem>

          <AccordionItem number="15" title="Force majeure">
            <div className="space-y-3 text-sm">
              <p>En cas de force majeure (épidémies, décisions gouvernementales, pannes informatiques, etc.) :</p>
              <ul className="list-disc list-inside space-y-1">
                <li>CRM Institut peut reporter ou adapter la formation</li>
                <li>Si prolongée : remboursement intégral possible</li>
              </ul>
            </div>
          </AccordionItem>

          <AccordionItem number="16" title="Acceptation et entrée en vigueur">
            <div className="space-y-3 text-sm">
              <p><strong>Entrée en vigueur :</strong> 19 novembre 2025</p>
              <p>L'inscription emporte acceptation sans réserve des présentes CGV et du Règlement intérieur.</p>
              <p className="text-gray-600 text-sm">Pour toute question : crminstitut@gmail.com | 49 rue des Picottes, 95150 Taverny</p>
            </div>
          </AccordionItem>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 border-t border-gray-200 mt-12 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-600">
          <p><strong>Document établi le 19 novembre 2025</strong></p>
          <p className="mt-2">Certification Qualiopi • SIREN 947 951 075 • NDA 11950799295</p>
          <p className="mt-2 italic">Tous droits réservés. Reproduction interdite sans autorisation écrite.</p>
        </div>
      </div>
    </section>
  <Footer />
  );
}
