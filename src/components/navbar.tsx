import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { Ticket, UserCircle } from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-2xl font-bold text-blue-600">
          DOUBLE JEU
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/#spectacle"
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Spectacle
          </Link>
          <Link
            href="/#about"
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            À Propos
          </Link>
          <Link
            href="/tickets"
            className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            Billetterie
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link href="/dashboard">
                <Button>Mon Compte</Button>
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link href="/tickets">
                <Button className="flex items-center gap-2">
                  <Ticket className="h-4 w-4" />
                  Acheter des billets
                </Button>
              </Link>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Connexion
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
