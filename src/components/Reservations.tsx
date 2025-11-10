import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Reservations = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
    time: "",
    people: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.contact || !formData.date || !formData.time || !formData.people) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Reserva recibida!",
      description: "Gracias por su reserva, nos pondremos en contacto para confirmarla.",
    });

    // Reset form
    setFormData({
      name: "",
      contact: "",
      date: "",
      time: "",
      people: "",
    });
  };

  return (
    <section id="reservas" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Reserva tu Mesa
            </h2>
            <p className="text-lg text-muted-foreground">
              Completa el formulario y nos pondremos en contacto contigo para confirmar tu reserva
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">Teléfono o correo electrónico</Label>
              <Input
                id="contact"
                type="text"
                placeholder="Teléfono o email"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                className="h-12"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="date">Fecha</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="h-12"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Hora</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="people">Número de personas</Label>
              <Input
                id="people"
                type="number"
                min="1"
                max="20"
                placeholder="Ej: 4"
                value={formData.people}
                onChange={(e) => setFormData({ ...formData, people: e.target.value })}
                className="h-12"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-lg"
            >
              Enviar reserva
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              Tras enviar la reserva, nos pondremos en contacto contigo para confirmarla
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
