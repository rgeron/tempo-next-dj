import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">
              Troupe DOUBLE JEU
            </h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Une troupe de théâtre passionnée qui s'engage à offrir des
              spectacles de qualité accessibles à tous les publics.
            </p>
            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <Phone className="h-4 w-4" />
              <span>+33 1 23 45 67 89</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="h-4 w-4" />
              <span>contact@doublejeu-theatre.fr</span>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-red-600">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/tickets"
                  className="text-gray-600 hover:text-red-600"
                >
                  Billetterie
                </Link>
              </li>
              <li>
                <Link
                  href="/#spectacle"
                  className="text-gray-600 hover:text-red-600"
                >
                  Spectacle Actuel
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-gray-600 hover:text-red-600"
                >
                  À Propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-red-600">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-red-600">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-red-600">
                  Conditions Générales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-red-600">
                  Accessibilité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="text-gray-600 mb-4 md:mb-0">
            © {currentYear} Troupe de Théâtre DOUBLE JEU. Tous droits réservés.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-red-600">
              <span className="sr-only">Facebook</span>
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-red-600">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
