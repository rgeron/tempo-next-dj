import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/server";
import { ArrowUpRight, Calendar, MapPin, Ticket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      {/* Hero Section with Split Design */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Poster */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md aspect-[2/3] shadow-xl rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80"
                  alt="Affiche du spectacle actuel"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-white/80 text-sm font-medium">
                    PRÉSENTE
                  </span>
                  <h3 className="text-white text-3xl font-bold mt-1">
                    Le Songe d'une Nuit d'Été
                  </h3>
                  <p className="text-white/90 mt-2">
                    Une comédie de William Shakespeare
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Text and CTA */}
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Troupe de Théâtre{" "}
                <span className="text-blue-600">DOUBLE JEU</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Depuis 1995, notre troupe enchante le public avec des
                interprétations vibrantes des plus grands classiques et des
                créations originales audacieuses.
              </p>

              <div className="space-y-4 py-2">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Dates des représentations</h3>
                    <p className="text-gray-600">Du 15 au 30 juin 2024</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Lieu</h3>
                    <p className="text-gray-600">
                      Théâtre Municipal, 12 rue des Arts
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ticket className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Tarifs</h3>
                    <p className="text-gray-600">
                      Adultes: 18€ | Étudiants/Seniors: 12€
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/tickets"
                  className="inline-flex items-center px-8 py-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 text-lg font-medium shadow-md"
                >
                  Acheter des billets
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              À propos de notre troupe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une passion pour l'art dramatique qui se transmet à chaque
              représentation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Notre Histoire</h3>
              <p className="text-gray-600">
                Fondée en 1995 par un groupe d'amis passionnés, DOUBLE JEU s'est
                rapidement imposée comme une référence dans le paysage théâtral
                local.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Notre Vision</h3>
              <p className="text-gray-600">
                Rendre le théâtre accessible à tous en proposant des spectacles
                de qualité qui touchent, questionnent et divertissent.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Notre Équipe</h3>
              <p className="text-gray-600">
                Une troupe de 15 comédiens talentueux, soutenus par des
                techniciens et bénévoles passionnés qui donnent vie à chaque
                production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Production Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Spectacle Actuel</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une adaptation moderne et surprenante d'un classique intemporel
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold">Le Songe d'une Nuit d'Été</h3>
              <p className="text-gray-600 leading-relaxed">
                Dans cette adaptation contemporaine de l'œuvre de Shakespeare,
                nous transportons le public dans un univers où réalité et
                fantaisie se confondent. Amours contrariés, interventions
                magiques et quiproquos hilarants s'entremêlent dans une mise en
                scène inventive qui ravira petits et grands.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mise en scène par Marie Dubois, cette production met en valeur
                le talent de notre troupe tout en offrant une relecture fraîche
                et accessible de ce chef-d'œuvre du théâtre élisabéthain.
              </p>
              <div className="pt-4">
                <Link
                  href="/tickets"
                  className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Réserver maintenant
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=800&q=80"
                  alt="Scène du spectacle"
                  width={800}
                  height={450}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce que dit notre public</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des spectateurs conquis par nos précédentes productions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Sophie Martin",
                quote:
                  "Une mise en scène audacieuse et des comédiens talentueux. J'ai été transportée du début à la fin !",
              },
              {
                name: "Thomas Leroy",
                quote:
                  "DOUBLE JEU réussit toujours à me surprendre. Leur interprétation des classiques est à la fois respectueuse et innovante.",
              },
              {
                name: "Émilie Dubois",
                quote:
                  "Un moment magique en famille. Les enfants ont adoré et nous aussi ! Nous reviendrons sans hésiter.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <p className="italic text-gray-600 mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-semibold">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à vivre une expérience théâtrale inoubliable ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Réservez vos places dès maintenant et rejoignez-nous pour une soirée
            magique.
          </p>
          <Link
            href="/tickets"
            className="inline-flex items-center px-8 py-4 text-blue-600 bg-white rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 text-lg font-medium shadow-md"
          >
            Acheter des billets
            <ArrowUpRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
