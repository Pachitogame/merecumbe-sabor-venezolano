import { Separator } from "@/components/ui/separator";

// --- DATOS COMPLETOS DE LA CARTA POR CATEGORÍA ---
const menuCategories = [
  {
    categoryName: "Entrantes y Aperitivos",
    items: [
      { name: "Ración de Yuca Frita", price: "7,00 €", description: "Palitos de yuca frita acompañada con nata o pico e gallo." },
      { name: "Ración de Tajadas con Queso", price: "7,90 €", description: "Ración de tajadas (plátano maduro frito) con queso." },
      { name: "Ración de Queso", price: "7,00 €", description: "Bastones de queso Frito." },
      { name: "Arepitas de Chicharrón con Queso y Nata Criolla", price: "5,50 / 9,00 €", description: "Arepitas de masa de harina de maíz precocida mezcladas con chicharrón." },
      { name: "Pastelito de Queso", price: "3,50 / 8,00 €", description: "Masa de harina de trigo, relleno de queso fresco." },
      { name: "Pastelito Jamón y Queso", price: "3,50 / 8,00 €", description: "Masa de harina de trigo, relleno de jamón y queso." },
      { name: "Pastelito Andino", price: "3,50 / 8,00 €", description: "Masa de harina de trigo, relleno de carne picada y arroz." },
      { name: "Pastelito de Pollo", price: "3,50 / 8,00 €", description: "Masa de harina de trigo, relleno de pollo mechado." },
      { name: "Teque Yoyo", price: "7,90 / 14,00 €", description: "Masa de harina de trigo frita, rellena de queso fresco, envuelta en plátano maduro y bacon." },
      { name: "Tequeños de Guayaba", price: "7,90 / 14,00 €", description: "Masa de harina de trigo frita, rellena de queso fresco y guayaba." },
      { name: "Tequeños de Queso", price: "7,90 / 14,00 €", description: "Masa de harina de trigo frita, rellena de queso fresco." },
      { name: "Tostones Playeros", price: "9,90 €", description: "Base de plátano verde frito y ensalada rallada de repollo y zanahoria con salsa rosa." },
    ],
  },
  {
    categoryName: "Empanadas",
    items: [
      { name: "Empanada Vegana", price: "5,90 €", description: "Masa de harina de maíz ligeramente dulce, rellena de salteado de verduras frescas." },
      { name: "Empanada de Choriqueso", price: "5,90 €", description: "Masa de harina de maíz, rellena de chorizo y queso." },
      { name: "Empanada de Pollo con Champiñones", price: "5,90 €", description: "Masa de harina de maíz, rellena de pollo mechado con champiñones." },
      { name: "Empanada de Pabellón", price: "7,90 €", description: "Masa de harina de maíz, rellena de carne mechada, caraotas negras, queso y tajadas." },
      { name: "Empanada Pelua", price: "5,90 €", description: "Masa de harina de maíz, rellena de carne mechada con queso rallado." },
      { name: "Empanada de Perico", price: "5,90 €", description: "Masa de harina de maíz, rellena de revoltillo (perico) con queso." },
      { name: "Empanada Catira", price: "5,90 €", description: "Masa de harina de maíz, rellena de pollo mechado y queso rallado." },
      { name: "Empanada de Carne Mechada", price: "5,90 €", description: "Masa de harina de maíz, rellena de carne desmechada." },
      { name: "Empanada de Carne Molida o Picada", price: "5,90 €", description: "Masa de harina de maíz, rellena de carne molida o picada." },
      { name: "Empanada de Cazón", price: "5,90 €", description: "Masa de harina de maíz, rellena de cazón (pescado)." },
      { name: "Empanada de Salchicha en Salsa", price: "5,90 €", description: "Masa de harina de maíz, rellena de salchicha en salsa de tomate y cebolla." },
      { name: "Empanada de Jamón y Queso", price: "5,90 €", description: "Masa de harina de maíz, rellena de jamón y queso." },
      { name: "Empanada de Queso Llanero", price: "5,90 €", description: "Masa de harina de maíz, rellena de queso fresco venezolano." },
      { name: "Empanada de Bacon y Queso", price: "5,90 €", description: "Masa de harina de maíz, rellena de bacon y queso." },
      { name: "Empanada de Dominó", price: "5,90 €", description: "Masa de harina de maíz, rellena de caraotas negras y queso." },
      { name: "Empanada de Mariscos", price: "7,90 €", description: "Masa de harina de maíz, rellena de mezcla de mariscos." },
      { name: "Empanada de Tajada con Queso", price: "5,90 €", description: "Masa de harina de maíz, rellena de plátano maduro frito y queso." },
      { name: "Empanada de Gordon Blue", price: "7,90 €", description: "Masa de harina de maíz, rellena de pollo, jamón y queso." },
    ],
  },
  {
    categoryName: "Cachapas y Tostones",
    items: [
      { name: "Cachapa de Queso Llanero", price: "11,90 €", description: "Tortilla de maíz rellena de queso fresco venezolano." },
      { name: "Cachapa de Queso de Mano", price: "11,90 €", description: "Tortilla de maíz rellena de queso de mano." },
      { name: "Cachapa de Pabellón", price: "16,80 €", description: "Tortilla de maíz, rellena de queso de mano, carne mechada, caraotas y tajadas." },
      { name: "Cachapa de Cochino Frito", price: "16,80 €", description: "Tortilla de maíz, rellena de queso de mano y cochino frito." },
      { name: "Cachapa Reina Pepiada", price: "16,80 €", description: "Tortilla de maíz, rellena de queso de mano y Reina Pepiada (pollo y aguacate)." },
      { name: "Cachapa de Pollo Mechado", price: "16,80 €", description: "Tortilla de maíz, rellena de queso de mano y pollo mechado." },
      { name: "Cachapa de Chicharrón Frito", price: "16,80 €", description: "Tortilla de maíz, rellena de queso de mano y chicharrón frito." },
      { name: "Cachapa de Carne Mechada", price: "16,80 €", description: "Tortilla de maíz, rellena de queso de mano y carne mechada." },
      { name: "Tostones de Carne Mechada", price: "11,90 €", description: "Base de plátano verde frito, relleno de carne mechada, queso y salsas." },
      { name: "Tostones de Pollo Mechado", price: "11,90 €", description: "Base de plátano verde frito, relleno de pollo mechado, queso y salsas." },
      { name: "Tostones de Queso Llanero", price: "9,90 €", description: "Base de plátano verde frito, relleno de queso llanero y salsas." },
      { name: "Tostones de Pico de Gallo", price: "9,90 €", description: "Base de plátano verde frito, relleno de pico de gallo, queso y salsas." },
      { name: "Tostones Variados", price: "11,90 €", description: "Base de plátano verde frito, relleno de pollo mechado, carne mechada, queso y salsas." },
    ],
  },
  {
    categoryName: "Especialidades y Platos Grandes",
    items: [
      { name: "Plato Degustación", price: "24,00 €", description: "Plato degustación con sabor a venezuela. Cuatro mini arepas, 4 mini pastelitos, 4 tequeños, mini cachapas y queso frito." },
      { name: "Pescado Dorado con Tostones Playeros", price: "13,00 €", description: "Pescado frito acompañado de tostones y ensalada." },
      { name: "Cochino Frito con Yuca", price: "14,90 €", description: "Ración de cochino (cerdo) frito acompañado de palitos de yuca frita." },
      { name: "Chicharrón con Yuca", price: "14,90 €", description: "Chicharrón (torrezno) frito acompañado con palitos de yuca frita." },
      { name: "Hallaca", price: "8,00 €", description: "Base de harina de maíz que envuelve un guiso de varias carnes, envuelto en hojas de plátano (Disponible por temporada)." },
      { name: "Pabellón Criollo", price: "13,90 €", description: "Plato tradicional de Venezuela compuesto por arroz, carne mechada, caraotas negras y tajadas." },
      { name: "Asado Negro", price: "13,90 €", description: "Carne de res condimentada con especias y papelón, acompañada de arroz y tajadas." },
      { name: "Sopa de Costilla", price: "14,00 €", description: "Disponible solo los domingos. Caldo de res." },
      { name: "Pasticho de Plátano", price: "14,00 €", description: "Pariente criollo del pasticho tradicional (lasaña), pero con plátano maduro en lugar de pasta." },
      { name: "Patacones de Plátano de Pollo", price: "16,90 €", description: "Plátano verde o maduro frito, relleno de pollo mechado, queso y salsas." },
      { name: "Patacones de Plátano de Carne", price: "16,90 €", description: "Plátano verde o maduro frito, relleno de carne mechada, queso y salsas." },
      { name: "Patacones de Plátano Mixto", price: "16,90 €", description: "Plátano verde o maduro frito, relleno de carne y pollo mechados, queso y salsas." },
    ],
  },
  {
    categoryName: "Arepas",
    items: [
      { name: "Arepa de Pollo", price: "10,00 €", description: "Harina de maíz precocida, rellena de pollo mechado." },
      { name: "Arepa con Chorizo", price: "10,00 €", description: "Harina de maíz precocida, rellena de chorizo y queso." },
      { name: "Arepa Viuda", price: "3,00 €", description: "Harina de maíz precocida, frita y sin relleno (para acompañar)." },
      { name: "Arepa de Carne Mechada", price: "10,00 €", description: "Harina de maíz precocida, rellena de carne mechada." },
      { name: "Arepa de Carne Molida o Picada", price: "10,00 €", description: "Harina de maíz precocida, rellena de carne molida o picada." },
      { name: "Arepa de Cazón", price: "10,00 €", description: "Harina de maíz precocida, rellena de cazón (pescado)." },
      { name: "Arepa de Perico", price: "8,00 €", description: "Harina de maíz precocida, rellena de revoltillo (perico)." },
      { name: "Arepa Cabimera", price: "12,00 €", description: "Es una pirámide de ingredientes y sabor, pollo mechado, carne mechada, huevo duro, queso rallado y salsas." },
      { name: "Arepa de Salchicha en Salsa Tomate y Cebolla", price: "10,00 €", description: "Harina de maíz precocida, rellena de salchicha en salsa de tomate y cebolla." },
      { name: "Arepa de Salchicha en Salsa Rosada", price: "10,00 €", description: "Harina de maíz precocida, rellena de salchicha en salsa rosada." },
      { name: "Arepa de Queso Llanero", price: "8,00 €", description: "Harina de maíz precocida, relleno de queso llanero." },
      { name: "Arepa de Queso Amarillo", price: "8,00 €", description: "Harina de maíz precocida, rellena de queso amarillo." },
      { name: "Arepa de Diablito", price: "8,00 €", description: "Harina de maíz precocida, rellena de jamón endiablado." },
      { name: "Arepa Diablito y Queso Amarillo", price: "10,00 €", description: "Harina de maíz precocida, rellena de jamón endiablado y queso amarillo." },
      { name: "Arepa de Jamón y Queso", price: "10,00 €", description: "Harina de maíz precocida, rellena de jamón y queso." },
      { name: "Arepa Dominó", price: "10,00 €", description: "Harina de maíz precocida, rellena de caraotas (alubias negras) y queso." },
      { name: "Arepa Catira", price: "10,00 €", description: "Harina de maíz precocida, rellena de pollo mechado y queso amarillo." },
      { name: "Arepa Pelúa", price: "10,00 €", description: "Harina de maíz precocida, rellena de carne mechada y queso amarillo." },
      { name: "Arepa de Reina Pepiada", price: "10,00 €", description: "Harina de maíz precocida, rellena de pollo, aguacate y mayonesa." },
      { name: "Arepa Sifrina", price: "10,00 €", description: "Harina de maíz precocida, rellena de Reina Pepiada y queso amarillo." },
      { name: "Arepa de Cochino Frito", price: "10,00 €", description: "Harina de maíz precocida, rellena de cochino frito." },
      { name: "Arepa de Chicharrón", price: "10,00 €", description: "Harina de maíz precocida, rellena de chicharrón." },
      { name: "Arepa de Asado Negro", price: "10,00 €", description: "Harina de maíz precocida, rellena de asado negro." },
      { name: "Arepa de Pabellón", price: "10,00 €", description: "Harina de maíz precocida, rellena de pabellón: caraotas, carne, tajadas y queso." },
      { name: "Arepa Vegana", price: "10,00 €", description: "Harina de maíz precocida, rellena de salteado de verduras y especias." },
    ],
  },
  {
    categoryName: "Platos Navideños (Por Temporada)",
    items: [
      { name: "Arepa Cabimera", price: "12,00 €", description: "El plato más espectacular de la casa: una torre de sabores, incluyendo carnes, huevo y salsas." },
      { name: "Pernil Navideño", price: "20,00 €", description: "Medio kilo de pernil (cerdo) horneado y bañado en su jugo, listo para servir." },
      { name: "Ensalada Navideña", price: "14,00 €", description: "Medio kilo de ensalada de gallina (papa, zanahoria, judías, pollo)." },
      { name: "Pan de Jamón", price: "24,00 €", description: "Masa suave y ligeramente dulce, rellena de jamón ahumado, pasas y aceitunas." },
      { name: "Plato Navideño", price: "22,00 €", description: "¡Puro sabor a navidad! Plato especial navideño que incluye hallaca, pernil, pan de jamón y ensalada de gallina." },
    ],
  },
  {
    categoryName: "Postres",
    items: [
      { name: "Tequeño de Chocolate", price: "4,50 / 7,90 / 14,00 €", description: "Deditos de masa rellenos de chocolate fundido. (Precios por 1, 3 o 6 unidades)." },
      { name: "Quesillo", price: "5,90 €", description: "Flan venezolano con caramelo, hecho a base de huevos, leche completa y leche condensada." },
      { name: "Tarta 3 Leches", price: "5,90 €", description: "Bizcocho bañado con tres tipos de leche: Leche evaporada, media crema y leche condensada." },
    ],
  },
  {
    categoryName: "Extras e Ingredientes Adicionales",
    items: [
      { name: "Chicharrón Frito Extra", price: "7,00 €", description: "Ración extra de chicharrón crujiente." },
      { name: "Cochino Frito Extra", price: "7,00 €", description: "Ración extra de cerdo frito." },
      { name: "Pollo Extra", price: "4,00 €", description: "Porción extra de pollo mechado o desmenuzado." },
      { name: "Carne Mechada Extra", price: "4,00 €", description: "Porción extra de carne de res mechada." },
      { name: "Carne Molida o Picada Extra", price: "4,00 €", description: "Porción extra de carne molida." },
      { name: "Quesos Extra", price: "3,00 €", description: "Porción extra de queso rallado." },
      { name: "Cazón Extra", price: "4,00 €", description: "Porción extra de cazón (pescado)." },
      { name: "Perico Extra", price: "4,00 €", description: "Porción extra de revuelto de huevos con cebolla y tomate." },
      { name: "Caraota Extra", price: "4,00 €", description: "Ración extra de caraotas negras." },
      { name: "Jamón Extra", price: "4,00 €", description: "Porción extra de jamón cocido." },
      { name: "Queso Llanero Extra", price: "4,00 €", description: "Porción extra de queso fresco rallado." },
      { name: "Queso de Mano Extra", price: "4,00 €", description: "Porción extra de queso de mano." },
    ],
  },
];
// --- FIN DE LOS DATOS ---

const FullMenu = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-center">
          Menú Completo
        </h1>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          Todas nuestras categorías y platos auténticos de Venezuela.
        </p>

        <div className="max-w-6xl mx-auto">
          {menuCategories.map((category, index) => (
            <div key={index} className="mb-12">
              {/* Título de la Categoría */}
              <h2 className="text-3xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
                {category.categoryName}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
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
              {index < menuCategories.length - 1 && <Separator className="mt-12" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullMenu;