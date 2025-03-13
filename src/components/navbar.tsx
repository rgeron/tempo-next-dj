"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import { Button } from "./ui/button";
import { Ticket, UserCircle, Users } from "lucide-react";
import UserProfile from "./user-profile";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
      setLoading(false);
    };

    fetchUser();
  }, []);

  useEffect(() => {
    // Handle hash links for smooth scrolling
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      }
    };

    // Initial check for hash in URL
    if (window.location.hash) {
      handleHashChange();
    }

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-2xl font-bold text-red-600">
          DOUBLE JEU
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="font-medium text-gray-700 hover:text-red-600 transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/#spectacle"
            className="font-medium text-gray-700 hover:text-red-600 transition-colors"
            scroll={false}
          >
            Spectacle
          </Link>
          <Link
            href="/#about"
            className="font-medium text-gray-700 hover:text-red-600 transition-colors"
            scroll={false}
          >
            À Propos
          </Link>
          <Link
            href="/tickets"
            className="font-medium text-gray-700 hover:text-red-600 transition-colors"
          >
            Billetterie
          </Link>
          <Link
            href="/promos"
            className="font-medium text-gray-700 hover:text-red-600 transition-colors"
          >
            Voir les promos
          </Link>
          {!loading && user && (
            <Link
              href="/dashboard"
              className="font-medium text-gray-700 hover:text-red-600 transition-colors"
            >
              Espace Membres
            </Link>
          )}
        </div>

        <div className="flex gap-4 items-center">
          {!loading && user ? (
            <>
              <Link href="/dashboard">
                <Button className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Espace Membres
                </Button>
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
