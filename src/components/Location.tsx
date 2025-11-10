import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const openGoogleMaps = () => {
    window.open("https://www.google.com/maps/place/40.3477216,-3.5239043", "_blank");
  };

  return (
    <section id="ubicacion" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ubicación y Contacto
          </h2>
          <p className="text-lg text-muted-foreground">
            Ven a visitarnos y disfruta de la auténtica comida venezolana
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-border h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8!2d-3.5239043!3d40.3477216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIwJzUxLjgiTiAzwrAzMScyNi4xIlc!5e0!3m2!1sen!2ses!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Merecumbe"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Dirección</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Consulta nuestra ubicación exacta en Google Maps
                  </p>
                </div>
              </div>
              <Button
                onClick={openGoogleMaps}
                className="w-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Navigation className="mr-2" size={20} />
                Abrir en Google Maps
              </Button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-3">Horario de apertura</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Lunes</span>
                      <span className="font-semibold">Cerrado</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Martes - Domingo</span>
                      <span className="font-semibold">12:00 - 23:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-4">
                <Phone className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Teléfono</h3>
                  <a
                    href="tel:+34XXXXXXXXX"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +34 XXX XXX XXX
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-lg mb-2">Correo electrónico</h3>
                  <a
                    href="mailto:info@merecumbe.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@merecumbe.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
