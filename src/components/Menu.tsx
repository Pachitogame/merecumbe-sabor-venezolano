import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Necesario para el enlace a la subpágina

const featuredItems = [
  {
    name: "Pabellón Criollo",
    price: "13,90 €",
    description: "Plato tradicional de Venezuela compuesto por arroz, carne mechada, caraotas negras y tajadas. ¡Nuestra especialidad!",
  },
  {
    name: "Arepa Reina Pepiada",
    price: "10,00 €",
    description: "Harina de maíz precocida, rellena de pollo, aguacate y mayonesa. Un clásico de la casa.",
  },
  {
    name: "Tequeños de Queso (6 unidades)",
    price: "7,90 €",
    description: "Deditos de queso fresco venezolano envueltos en masa crujiente de harina de trigo. La entrada perfecta.",
  },
  {
    name: "Cachapa de Queso de Mano",
    price: "11,90 €",
    description: "Tortilla de maíz dulce y tierna rellena del auténtico Queso de Mano venezolano.",
  },
];

const Menu = () => {
  return (
    <section id="carta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestras Especialidades
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selección de los platos más populares y representativos de la gastronomía venezolana.
          </p>
        </div>

        {/* Plato Destacado - Vista en la página de inicio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-card-foreground">
                  {item.name}
                </h3>
                <span className="text-2xl font-bold text-primary">
                  {item.price}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Enlace al Menú Completo */}
        <div className="text-center mt-10">
          <Link to="/menu-completo">
            <Button size="lg" className="text-lg px-8 py-6">
              Ver Menú Completo (¡Más de 50 platos!)
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;