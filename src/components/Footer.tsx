import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Merecumbe</h3>
            <p className="text-secondary-foreground/80 leading-relaxed">
              Auténtica comida venezolana en Madrid. Sabores que te llevan a casa.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-secondary-foreground/80">
              <a href="tel:+34XXXXXXXXX" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={18} />
                +34 XXX XXX XXX
              </a>
              <a href="mailto:info@merecumbe.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={18} />
                info@merecumbe.com
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={18} className="mt-1" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Social & Delivery */}
          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/merecumbecomidavenezolana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                @merecumbecomidavenezolana
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
                Facebook
              </a>
            </div>
          </div>

          {/* Delivery */}
          <div>
            <h4 className="font-bold text-lg mb-4">Pide a domicilio</h4>
            <div className="space-y-3">
              <a
                href="https://glovoapp.com/es/es/madrid/merecumbe"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                🛵 Pedir en Glovo
              </a>
              <a
                href="https://www.ubereats.com/es/store/merecumbe"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                🚗 Pedir en Uber Eats
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Merecumbe. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
