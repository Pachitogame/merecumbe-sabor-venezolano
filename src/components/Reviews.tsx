import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    author: "A. L.",
    date: "Marzo 2025",
    rating: 5,
    text: "Excelente comida venezolana, ambiente muy acogedor. Las arepas están deliciosas y el servicio es muy atento.",
  },
  {
    author: "M. R.",
    date: "Febrero 2025",
    rating: 5,
    text: "La mejor comida venezolana que he probado en Madrid. Los tequeños son increíbles y el pabellón criollo auténtico.",
  },
  {
    author: "C. G.",
    date: "Enero 2025",
    rating: 5,
    text: "Un sitio fantástico para disfrutar de la gastronomía venezolana. Todo está muy rico y los precios son razonables.",
  },
  {
    author: "J. P.",
    date: "Diciembre 2024",
    rating: 5,
    text: "Muy recomendable. El ambiente familiar y la comida casera hacen que te sientas como en casa.",
  },
];

const Reviews = () => {
  const openGoogleReviews = () => {
    window.open("https://www.google.com/maps/place/Merecumbe", "_blank");
  };

  return (
    <section id="resenas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Testimonios reales de personas que han disfrutado de nuestra comida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="text-primary fill-primary" size={20} />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span className="font-semibold">{review.author}</span>
                <span>{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={openGoogleReviews}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Ver más en Google Maps
            <ExternalLink className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
