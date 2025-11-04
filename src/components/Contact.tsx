import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    entreprise: "",
    email: "",
    telephone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Replace with your N8N webhook URL
    const webhookUrl = "YOUR_N8N_WEBHOOK_URL_HERE";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "CRM Institut Website",
        }),
      });

      if (response.ok) {
        toast({
          title: "Message envoyé !",
          description:
            "Nous vous répondrons dans les plus brefs délais. Merci de votre intérêt.",
        });
        setFormData({
          nom: "",
          entreprise: "",
          email: "",
          telephone: "",
          message: "",
        });
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description:
          "Une erreur est survenue. Veuillez réessayer ou nous contacter directement.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Parlons de Vos Besoins en Formation
          </h2>
          <p className="text-lg text-muted-foreground">
            Notre équipe est à votre écoute pour construire un programme de
            formation sur-mesure adapté aux enjeux de votre entreprise.
            Contactez-nous pour échanger sur vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl">Nos Coordonnées</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Email
                    </div>
                    <a
                      href="mailto:contact@crm-institut.fr"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      contact@crm-institut.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Téléphone
                    </div>
                    <a
                      href="tel:+33123456789"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      Adresse
                    </div>
                    <p className="text-muted-foreground">
                      Paris, France
                      <br />
                      Formations disponibles en présentiel et distanciel
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-gradient-subtle">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  Horaires d'ouverture
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Lundi - Vendredi : 9h00 - 18h00
                </p>
                <p className="text-sm text-muted-foreground">
                  Nous répondons à vos demandes sous 24h ouvrées
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Demandez un Accompagnement Personnalisé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nom">
                        Nom complet <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="nom"
                        name="nom"
                        type="text"
                        placeholder="Jean Dupont"
                        value={formData.nom}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="entreprise">
                        Entreprise <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="entreprise"
                        name="entreprise"
                        type="text"
                        placeholder="Nom de votre entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email professionnel{" "}
                        <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="j.dupont@entreprise.fr"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="telephone">
                        Téléphone <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        placeholder="+33 6 12 34 56 78"
                        value={formData.telephone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      Votre projet de formation{" "}
                      <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Décrivez vos besoins en formation : domaines d'intérêt, nombre de participants, format souhaité (présentiel/distanciel), etc."
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full sm:w-auto"
                  >
                    {isLoading ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="mr-2" size={18} />
                        Envoyer ma demande
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground">
                    En soumettant ce formulaire, vous acceptez d'être contacté
                    par CRM Institut concernant nos formations professionnelles.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
