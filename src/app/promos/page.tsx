"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Member {
  title: string;
  src: string;
  poste: string;
  roles: Record<string, string>;
  commentaireOR: string;
}

export const promo2024 = [
  {
    title: "Adèle Quesnoit",
    src: "/images/CF/Promo2024/Adèle.jpg",
    poste: "Membre éminente",
    roles: {
      JV: "Arlequin",
    },
    commentaireOR: "",
  },
  {
    title: "Ambre Caillaux",
    src: "/images/CF/Promo2024/Ambre.jpg",
    poste: "Trésorière",
    roles: {
      JV: "Brighella",
    },
    commentaireOR: "",
  },
  {
    title: "Arthur Milgrom",
    src: "/images/CF/Promo2024/Arthur.jpg",
    poste: "Responsable représentation",
    roles: {
      JV: "Tonino",
    },
    commentaireOR: "",
  },
  {
    title: "Gabriel Fauchon",
    src: "/images/CF/Promo2024/Gabriel.jpg",
    poste: "Vice-président",
    roles: {
      JV: "Pancrace",
    },
    commentaireOR: "qu'il faut faire attention aux feeeeeeeemmes",
  },
  {
    title: "Garance Pauwels",
    src: "/images/CF/Promo2024/Garance.jpg",
    poste: "Secrétaire générale",
    roles: {
      JV: "Colombine",
    },
    commentaireOR: "",
  },
  {
    title: "Matthis Cadeau",
    src: "/images/CF/Promo2024/Matthis.jpg",
    poste: "Membre éminent parti trop vite",
    roles: {
      JV: "Le marquis Lelio",
      SNE: "Thésée et Mort-de-faim (qui joue lui même la Lune)",
    },
    commentaireOR: "qu'il fait très bien la lune qui dit ah bah d'accord",
  },
  {
    title: "Mia Berthier",
    src: "/images/CF/Promo2024/Mia.jpg",
    poste: "Membre Membre éminente partie trop vite",
    roles: {
      JV: "Pantalone",
      SNE: "Titania",
    },
    commentaireOR:
      "que son dos va bien malgré des heures passées à dormir sur un escalier",
  },
  {
    title: "Nell Sibue",
    src: "/images/CF/Promo2024/Nell.jpg",
    poste: "Responsable cohésion",
    roles: {
      JV: "Beatrice",
    },
    commentaireOR: "",
  },
  {
    title: "Raphaël Géron",
    src: "/images/CF/Promo2024/Raphaël.jpg",
    poste: "Vice-président",
    roles: {
      JV: "Florindo",
      SNE: "Lysandre",
    },
    commentaireOR: "",
  },
  {
    title: "Sacha Malochet",
    src: "/images/CF/Promo2024/Sacha.jpg",
    poste: "Président",
    roles: {
      JV: "Zanetto",
    },
    commentaireOR: "",
  },
  {
    title: "Selene Brunel",
    src: "/images/CF/Promo2024/Selene.jpg",
    poste: "Membre éminente partie trop vite",
    roles: {
      JV: "Le Prévôt",
      SNE: "Hermia",
    },
    commentaireOR: "",
  },
  {
    title: "Zineb Senhaji",
    src: "/images/CF/Promo2024/Zineb.jpg",
    poste: "Membre éminente partie trop vite",
    roles: {
      JV: "Tiburce",
      SNE: "Hippolyte, La fée, Fleur des Pois, Etriqué (qui joue elle-même le Lion)",
    },
    commentaireOR: "",
  },
];

export const promo2025 = [
  {
    title: "Alexandre",
    src: "/images/CF/Promo2025/Alexandre.jpg",
    poste: "Membre",
    roles: {
      VVD: "À compléter",
    },
    commentaireOR: "",
  },
  {
    title: "Alexis",
    src: "/images/CF/Promo2025/Alexis.jpg",
    poste: "Membre",
    roles: {
      VVD: "À compléter",
    },
    commentaireOR: "",
  },
  {
    title: "Camille",
    src: "/images/CF/Promo2025/Camille.jpg",
    poste: "Membre",
    roles: {
      VVD: "À compléter",
    },
    commentaireOR: "",
  },
  {
    title: "Florence",
    src: "/images/CF/Promo2025/Florence.jpg",
    poste: "Membre",
    roles: {
      VVD: "À compléter",
    },
    commentaireOR: "",
  },
  {
    title: "Gabriel B",
    src: "/images/CF/Promo2025/GabrielB.jpg",
    poste: "Membre",
    roles: {
      VVD: "À compléter",
    },
    commentaireOR: "",
  },
  {
    title: "Jade",
    src: "/images/CF/Promo2025/Jade.jpg",
    poste: "Membre",
    roles: {
      VVD: "À compléter",
    },
    commentaireOR: "",
  },
  {
    title: "Jules",
    src: "/images/CF/Promo2025/Jules.jpg",
    poste: "Membre",
    roles: {
      VVD: "À compléter",
    },
    commentaireOR: "",
  },
  {
    title: "Lothaire",
    src: "/images/CF/Promo2025/Lothaire.jpg",
    poste: "Membre",
    roles: {
      VVD: "À compléter",
    },
    commentaireOR: "",
  },
  {
    title: "Madeleine",
    src: "/images/CF/Promo2025/Madeleine.jpg",
    poste: "Membre",
    roles: {
      VVD: "À compléter",
    },
    commentaireOR: "",
  },
  {
    title: "Nicolas",
    src: "/images/CF/Promo2025/Nicolas.jpg",
    poste: "Membre",
    roles: {
      VVD: "À compléter",
    },
    commentaireOR: "",
  },
];

const promos = {
  "2024": promo2024,
  "2025": promo2025,
};

export default function PromosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPromo, setSelectedPromo] = useState("2024");

  const filteredMembers = promos[selectedPromo as keyof typeof promos].filter(
    (member) =>
      member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.poste.toLowerCase().includes(searchTerm.toLowerCase()) ||
      Object.values(member.roles)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()),
  );

  const roleAbbreviations = {
    JV: "Les Jumeaux Vénitiens",
    SNE: "Le Songe d'une Nuit d'Été",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Les Promotions de DOUBLE JEU
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez les membres qui ont fait partie de notre troupe au fil
              des années
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-1/3">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4">Filtrer</h2>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">
                    Promotion
                  </label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={selectedPromo}
                    onChange={(e) => setSelectedPromo(e.target.value)}
                  >
                    {Object.keys(promos).map((year) => (
                      <option key={year} value={year}>
                        Promotion {year}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Rechercher
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Nom, rôle, poste..."
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-4">
                  Promotion {selectedPromo}{" "}
                  {searchTerm && `- Résultats pour "${searchTerm}"`}
                </h2>

                {filteredMembers.length === 0 ? (
                  <p className="text-center py-8 text-gray-500">
                    Aucun membre trouvé pour cette recherche
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredMembers.map((member, index) => (
                      <Card
                        key={index}
                        className="overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="relative h-64 w-full">
                          <Image
                            src={member.src}
                            alt={member.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader className="pb-2">
                          <CardTitle>{member.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="font-medium text-blue-600 mb-2">
                            {member.poste}
                          </p>

                          <div className="space-y-1 mb-3">
                            <p className="text-sm font-semibold">Rôles :</p>
                            <ul className="text-sm text-gray-600">
                              {Object.entries(member.roles).map(
                                ([abbr, role], idx) => (
                                  <li key={idx}>
                                    <span className="font-medium">
                                      {roleAbbreviations[
                                        abbr as keyof typeof roleAbbreviations
                                      ] || abbr}
                                    </span>{" "}
                                    : {role}
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>

                          {member.commentaireOR && (
                            <div className="text-sm italic text-gray-500 mt-2">
                              <span className="font-medium">On raconte </span>
                              {member.commentaireOR}
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
