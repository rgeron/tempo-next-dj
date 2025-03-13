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
                    La visite de la vieille dame
                  </h3>
                  <p className="text-white/90 mt-2">
                    Une pièce de Friedrich Dürrenmatt
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
                    <p className="text-gray-600">7 et 8 avril à HEC</p>
                    <p className="text-gray-600">
                      12 avril au Palais des Glaces
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Lieux</h3>
                    <p className="text-gray-600">Campus HEC (7 et 8 avril)</p>
                    <p className="text-gray-600">
                      Palais des Glaces, Paris (12 avril)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ticket className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Tarifs</h3>
                    <p className="text-gray-600">
                      À HEC: 7-12€ selon catégorie
                    </p>
                    <p className="text-gray-600">
                      Au Palais des Glaces: 12-20€ selon catégorie
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
      <section id="about" className="py-20 bg-gray-50">
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
                Depuis 25 ans, Double Jeu fait vibrer la scène d'HEC Paris en
                réunissant des passionnés de théâtre autour de spectacles
                toujours plus ambitieux. Ce qui n'était au départ qu'une troupe
                étudiante s'est transformé en un véritable collectif artistique,
                attirant chaque année des talents désireux de faire vivre des
                pièces de qualité. Aujourd'hui, nous avons la fierté de proposer
                deux spectacles par an, dont l'un dans un théâtre parisien
                prestigieux, le Palais des Glaces.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Notre Vision</h3>
              <p className="text-gray-600">
                Nous croyons que le théâtre est une aventure collective où se
                mêlent rigueur, créativité et audace. Notre ambition ? Offrir
                aux étudiants et au public des pièces captivantes, mises en
                scène par un professionnel reconnu, dans des conditions
                quasi-professionnelles. Chaque production est l'occasion de
                repousser nos limites et d'explorer de nouvelles formes
                d'expression artistique, tout en préservant l'esprit d'équipe et
                de transmission qui fait la force de notre troupe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Notre Équipe</h3>
              <p className="text-gray-600">
                Double Jeu, c'est une vingtaine d'étudiants réunis par une
                passion commune et répartis sur deux promotions. Chaque année,
                huit nouveaux comédiens rejoignent la troupe après des auditions
                exigeantes, intégrant un groupe soudé où l'expérience des
                anciens se transmet aux nouveaux. Mais notre équipe ne se limite
                pas à la scène : décorateurs, costumiers, responsables de la
                communication… Chacun a un rôle clé à jouer pour donner vie aux
                spectacles qui marquent la vie du campus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Production Section */}
      <section id="spectacle" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Notre Spectacle Actuel</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une adaptation moderne et surprenante d'un classique intemporel
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h3 className="text-2xl font-bold">
                La visite de la vieille dame
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dans cette pièce captivante de Friedrich Dürrenmatt, nous
                explorons les thèmes de la vengeance, de la justice et de la
                corruption morale. Claire Zahanassian, devenue immensément
                riche, revient dans sa ville natale pour se venger d'un ancien
                amant qui l'a abandonnée.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre mise en scène contemporaine met en lumière la critique
                sociale et les dilemmes moraux de cette œuvre majeure du théâtre
                germanophone, offrant une expérience théâtrale intense et
                mémorable.
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

      {/* Previous Shows Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos anciens spectacles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos précédentes productions à travers ces extraits vidéo
            </p>
          </div>

          <div className="relative">
            <div className="flex overflow-x-auto pb-8 space-x-6 scrollbar-hide snap-x snap-mandatory">
              {[
                {
                  title: "Le songe d'une nuit d'été",
                  date: "Avril 2024",
                  image:
                    "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=800&q=80",
                  youtubeUrl:
                    "https://youtu.be/fh1phNN9u8s?si=ZwpxNSE2f2MnarA7",
                  description:
                    "Une adaptation onirique de l'œuvre de Shakespeare",
                },
                {
                  title: "Les jumeaux vénitiens",
                  date: "Décembre 2023",
                  image:
                    "https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?w=800&q=80",
                  youtubeUrl:
                    "https://youtu.be/4t701ayLoUU?si=ehL11ZzN8EQmRayw",
                  description:
                    "Une comédie italienne pleine de rebondissements",
                },
                {
                  title: "Un fil à la patte",
                  date: "Avril 2023",
                  image:
                    "https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?w=800&q=80",
                  youtubeUrl:
                    "https://youtu.be/6esbvoB5DTY?si=Y96LSJZW8Ld1cV-u",
                  description: "Le chef-d'œuvre comique de Georges Feydeau",
                },
              ].map((show, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 snap-center w-80 md:w-96"
                >
                  <a
                    href={show.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full transform transition-transform hover:scale-105"
                  >
                    <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
                      <div className="relative h-48 w-full">
                        <Image
                          src={show.image}
                          alt={show.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <div className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-12 border-l-red-600 ml-1"></div>
                          </div>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="text-sm text-blue-600 font-medium mb-1">
                          {show.date}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{show.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {show.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
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
              <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-sm">
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
