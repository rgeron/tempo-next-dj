import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import { Facebook } from "lucide-react";
import { createClient } from "../../../supabase/server";

export default async function EspaceMembre() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: plans, error } = await supabase.functions.invoke(
    "supabase-functions-get-plans"
  );
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Espace Membre
          </h1>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12 transition-all hover:shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <Facebook className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Rejoignez notre communauté Facebook
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Participez aux discussions, restez informé des dernières
              actualités et connectez-vous avec d'autres membres :
            </p>
            <a
              href="https://www.facebook.com/groups/3512056069101383/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Rejoindre le groupe Facebook
            </a>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12 transition-all hover:shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Soutenez notre association
            </h2>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Votre soutien financier est crucial pour nous aider à continuer
              notre mission. Choisissez l'option qui vous convient parmi nos
              formules ci-dessous.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Nos formules de soutien
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans?.map((item: any) => (
            <PricingCard key={item.id} item={item} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
