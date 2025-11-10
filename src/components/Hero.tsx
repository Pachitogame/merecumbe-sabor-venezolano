import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
// RUTA CORREGIDA: Ahora busca la imagen directamente en la carpeta 'public'
const heroImage = "/hero-restaurant.jpg"; 

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Bienvenidos a Merecumbe
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Comida venezolana auténtica en el corazón de Madrid
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              onClick={() => scrollToSection("carta")}
              size="lg"
              className="bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg px-8 py-6"
            >
              Ver la carta
            </Button>
            <Button
              onClick={() => scrollToSection("reservas")}
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground transition-all text-lg px-8 py-6 backdrop-blur-sm"
            >
              Reservar ahora
            </Button>
            <Button
              onClick={() => scrollToSection("ubicacion")}
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white hover:text-foreground transition-all text-lg px-8 py-6 backdrop-blur-sm"
            >
              <MapPin className="mr-2" size={20} />
              Cómo llegar
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <MapPin className="text-primary" size={24} />
              <div>
                <p className="font-semibold">Ubicación</p>
                <p className="text-sm text-white/80">Madrid</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Clock className="text-primary" size={24} />
              <div>
                <p className="font-semibold">Horario</p>
                <p className="text-sm text-white/80">Mar-Dom: 12:00-23:00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Phone className="text-primary" size={24} />
              <div>
                <p className="font-semibold">Teléfono</p>
                <p className="text-sm text-white/80">+34 XXX XXX XXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;