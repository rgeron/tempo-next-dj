"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard, Loader2 } from "lucide-react";
import { supabase } from "../../supabase/supabase";

interface TicketFormProps {
  userId?: string;
  userEmail?: string;
}

export default function TicketForm({ userId, userEmail }: TicketFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: userEmail || "",
    phone: "",
    date: "",
    adult_tickets: "0",
    student_tickets: "0",
    child_tickets: "0",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateTotal = () => {
    const adultPrice = 18;
    const studentPrice = 12;
    const childPrice = 8;

    const adultTotal = parseInt(formData.adult_tickets) * adultPrice;
    const studentTotal = parseInt(formData.student_tickets) * studentPrice;
    const childTotal = parseInt(formData.child_tickets) * childPrice;

    return adultTotal + studentTotal + childTotal;
  };

  const totalAmount = calculateTotal();
  const hasTickets = totalAmount > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.date) {
        throw new Error("Veuillez remplir tous les champs obligatoires");
      }

      if (!hasTickets) {
        throw new Error("Veuillez sélectionner au moins un billet");
      }

      // Create checkout session
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-create-ticket-checkout",
        {
          body: {
            ...formData,
            user_id: userId,
            return_url: window.location.origin,
          },
        },
      );

      if (error) {
        throw error;
      }

      // Redirect to Stripe checkout
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Aucune URL de paiement retournée");
      }
    } catch (err: any) {
      setError(
        err.message ||
          "Une erreur s'est produite lors de la création du paiement",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Réservation</CardTitle>
        <CardDescription>
          Complétez le formulaire pour réserver vos places
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                name="name"
                placeholder="Votre nom"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="votre@email.com"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date de la représentation *</Label>
              <Select
                name="date"
                value={formData.date}
                onValueChange={(value) => handleChange("date", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choisir une date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024-06-15">
                    15 juin 2024 - 20h00
                  </SelectItem>
                  <SelectItem value="2024-06-16">
                    16 juin 2024 - 20h00
                  </SelectItem>
                  <SelectItem value="2024-06-22">
                    22 juin 2024 - 20h00
                  </SelectItem>
                  <SelectItem value="2024-06-23">
                    23 juin 2024 - 20h00
                  </SelectItem>
                  <SelectItem value="2024-06-29">
                    29 juin 2024 - 20h00
                  </SelectItem>
                  <SelectItem value="2024-06-30">
                    30 juin 2024 - 20h00
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Votre numéro de téléphone"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="adult_tickets">Billets Adulte (18€)</Label>
              <Select
                name="adult_tickets"
                value={formData.adult_tickets}
                onValueChange={(value) => handleChange("adult_tickets", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="0" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="student_tickets">
                Billets Étudiant/Senior (12€)
              </Label>
              <Select
                name="student_tickets"
                value={formData.student_tickets}
                onValueChange={(value) =>
                  handleChange("student_tickets", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="0" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="child_tickets">Billets Enfant -12 ans (8€)</Label>
              <Select
                name="child_tickets"
                value={formData.child_tickets}
                onValueChange={(value) => handleChange("child_tickets", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="0" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm p-2 bg-red-50 rounded border border-red-200">
              {error}
            </div>
          )}

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center font-medium">
              <span>Total</span>
              <span>{totalAmount.toFixed(2)}€</span>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full flex items-center gap-2"
            size="lg"
            disabled={loading || !hasTickets}
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Traitement en cours...
              </>
            ) : (
              <>
                <CreditCard className="h-4 w-4" />
                Procéder au paiement
              </>
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <p className="text-xs text-gray-500 text-center">
          En cliquant sur "Procéder au paiement", vous serez redirigé vers notre
          système de paiement sécurisé.
        </p>
      </CardFooter>
    </Card>
  );
}
