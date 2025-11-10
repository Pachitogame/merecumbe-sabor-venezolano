const menuItems = [
  {
    name: "Arepa Reina Pepiada",
    price: "9 €",
    description: "Pollo desmechado con aguacate y mayonesa",
  },
  {
    name: "Tequeños (6 uds)",
    price: "7 €",
    description: "Deditos de queso envueltos en masa crujiente",
  },
  {
    name: "Pabellón Criollo",
    price: "14 €",
    description: "Carne mechada, arroz, caraotas negras, plátano maduro y queso",
  },
  {
    name: "Hallaca Venezolana",
    price: "13 €",
    description: "Masa de maíz rellena de guiso de carne, envuelta en hojas de plátano",
  },
  {
    name: "Cachapa con Queso",
    price: "10 €",
    description: "Pancake de maíz dulce con queso de mano",
  },
  {
    name: "Patacón con Todo",
    price: "12 €",
    description: "Plátano verde frito con carne mechada, queso, aguacate y salsas",
  },
  {
    name: "Empanadas Venezolanas (3 uds)",
    price: "8 €",
    description: "Carne mechada, pollo o queso",
  },
  {
    name: "Quesillo",
    price: "5 €",
    description: "Flan venezolano con caramelo",
  },
];

const Menu = () => {
  return (
    <section id="carta" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestra Carta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre los sabores auténticos de Venezuela con nuestros platos tradicionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {menuItems.map((item, index) => (
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
      </div>
    </section>
  );
};

export default Menu;
