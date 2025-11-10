const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sabor Venezolano Auténtico
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            En Merecumbe, te traemos los sabores tradicionales de Venezuela directamente 
            a Madrid. Cada plato está preparado con recetas auténticas, ingredientes frescos 
            y el cariño que caracteriza la cocina venezolana.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde nuestras famosas arepas rellenas hasta el tradicional pabellón criollo, 
            cada bocado te transportará a las calles y hogares de Venezuela. Ven y descubre 
            por qué somos el lugar favorito para disfrutar de la comida venezolana en Madrid.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
