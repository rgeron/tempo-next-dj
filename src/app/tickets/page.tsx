import { createClient } from "../../../supabase/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ticket, Calendar, Info } from "lucide-react";
import TicketForm from "@/components/ticket-form";

export default async function TicketsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Réservation de Billets
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Réservez vos places pour notre spectacle "Le Songe d'une Nuit
              d'Été" et vivez une expérience théâtrale inoubliable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Show Info */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Informations</CardTitle>
                  <CardDescription>Détails du spectacle</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Dates</h3>
                      <p className="text-sm text-gray-600">
                        Du 15 au 30 juin 2024
                      </p>
                      <p className="text-sm text-gray-600">Séances à 20h00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Ticket className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Tarifs</h3>
                      <p className="text-sm text-gray-600">Adulte: 18€</p>
                      <p className="text-sm text-gray-600">
                        Étudiant/Senior: 12€
                      </p>
                      <p className="text-sm text-gray-600">
                        Enfant (-12 ans): 8€
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Informations</h3>
                      <p className="text-sm text-gray-600">
                        Durée: 2h avec entracte
                      </p>
                      <p className="text-sm text-gray-600">
                        Ouverture des portes: 19h30
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Form */}
            <div className="md:col-span-2">
              <TicketForm userId={user?.id} userEmail={user?.email} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
