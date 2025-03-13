import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@13.6.0?target=deno";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
  apiVersion: "2023-10-16",
  httpClient: Stripe.createFetchHttpClient(),
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-customer-email",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const {
      name,
      email,
      phone,
      date,
      adult_tickets,
      student_tickets,
      child_tickets,
      user_id,
      return_url,
    } = await req.json();

    // Validate required fields
    if (
      !name ||
      !email ||
      !date ||
      (!adult_tickets && !student_tickets && !child_tickets)
    ) {
      throw new Error("Missing required parameters");
    }

    // Calculate total amount
    const adultPrice = 1800; // 18€ in cents
    const studentPrice = 1200; // 12€ in cents
    const childPrice = 800; // 8€ in cents

    const adultTotal = (parseInt(adult_tickets) || 0) * adultPrice;
    const studentTotal = (parseInt(student_tickets) || 0) * studentPrice;
    const childTotal = (parseInt(child_tickets) || 0) * childPrice;

    const totalAmount = adultTotal + studentTotal + childTotal;

    if (totalAmount <= 0) {
      throw new Error("Total amount must be greater than 0");
    }

    // Create line items for Stripe
    const lineItems = [];

    if (parseInt(adult_tickets) > 0) {
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: "Billet Adulte - Le Songe d'une Nuit d'Été",
            description: `Représentation du ${new Date(date).toLocaleDateString("fr-FR")}`,
          },
          unit_amount: adultPrice,
        },
        quantity: parseInt(adult_tickets),
      });
    }

    if (parseInt(student_tickets) > 0) {
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: "Billet Étudiant/Senior - Le Songe d'une Nuit d'Été",
            description: `Représentation du ${new Date(date).toLocaleDateString("fr-FR")}`,
          },
          unit_amount: studentPrice,
        },
        quantity: parseInt(student_tickets),
      });
    }

    if (parseInt(child_tickets) > 0) {
      lineItems.push({
        price_data: {
          currency: "eur",
          product_data: {
            name: "Billet Enfant - Le Songe d'une Nuit d'Été",
            description: `Représentation du ${new Date(date).toLocaleDateString("fr-FR")}`,
          },
          unit_amount: childPrice,
        },
        quantity: parseInt(child_tickets),
      });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${return_url || "https://doublejeu-theatre.fr"}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${return_url || "https://doublejeu-theatre.fr"}/tickets?canceled=true`,
      customer_email: email,
      metadata: {
        user_id: user_id || "",
        name,
        email,
        phone: phone || "",
        date,
        adult_tickets: adult_tickets || "0",
        student_tickets: student_tickets || "0",
        child_tickets: child_tickets || "0",
        total_amount: (totalAmount / 100).toFixed(2),
      },
    });

    // Create a record in the tickets table
    if (
      Deno.env.get("SUPABASE_URL") &&
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")
    ) {
      const supabaseAdmin = createClient(
        Deno.env.get("SUPABASE_URL") || "",
        Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "",
      );

      await supabaseAdmin.from("tickets").insert({
        user_id: user_id || null,
        customer_name: name,
        customer_email: email,
        customer_phone: phone || null,
        show_date: new Date(date).toISOString(),
        adult_tickets: parseInt(adult_tickets) || 0,
        student_tickets: parseInt(student_tickets) || 0,
        child_tickets: parseInt(child_tickets) || 0,
        total_amount: totalAmount / 100,
        payment_status: "pending",
        payment_intent_id: session.payment_intent || null,
      });
    }

    return new Response(
      JSON.stringify({ sessionId: session.id, url: session.url }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error creating ticket checkout session:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
