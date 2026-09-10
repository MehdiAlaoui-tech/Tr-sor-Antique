import emailjs from "@emailjs/browser";
import { useState } from "react";

function Cart({ cart }) {
  const [nom, setNom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [envoye, setEnvoye] = useState(false);

  const total = cart.reduce((sum, produit) => sum + produit.price, 0);

  function envoyerCommande(e) {
    e.preventDefault();

    const detailsCommande = cart
      .map((p) => `${p.name} — ${p.price} DH`)
      .join("\n");

    const templateParams = {
      nom_client: nom,
      telephone_client: telephone,
      adresse_client: adresse,
      details_commande: detailsCommande,
      total: total,
    };

    emailjs
      .send(
        "service_s009u1s",
        "template_5y51svu",
        templateParams,
        "KArnRTw1KR6AM5al2"
      )
      .then(() => {
        setEnvoye(true);
      })
      .catch((err) => {
        console.error("Erreur envoi:", err);
      });
  }

  if (envoye) {
    return (
      <section className="p-8 text-center">
        <h1 className="text-2xl font-bold">Merci, {nom} !</h1>
        <p className="mt-2">Votre commande a été transmise. Nous vous contacterons sous peu.</p>
      </section>
    );
  }

  return (
    <section className="flex flex-row justify-betwen p-10 gap-10">
      <h1 className="mb-6 text-3xl font-bold ">panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          {cart.map((produit) => (
            <div key={produit.id} className="bg-green-950 flex flex-col items-center gap-4 p-2 border rounded-lg">
              <h3 className="text-2xl font-bold text-white">{produit.name}</h3>
              <p className="mt-4 text-xl font-bold text-white">Total : {total} DH</p>
              <img className="w-96 h-auto aspect-square" src={produit.image} />
            </div>
          ))}

          

          <form onSubmit={envoyerCommande} className="mt-12 flex flex-col gap-4 max-w-md">
            <h2 className="text-lg font-semibold">Vos coordonnées</h2>

            <input
              type="text"
              placeholder="Nom complet"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="tel"
              placeholder="Téléphone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              required
              className="border rounded-lg px-4 py-2"
            />
            <textarea
              placeholder="Adresse de livraison"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
              required
              className="border rounded-lg px-4 py-2"
            />

            <button type="submit" className="btn btn-primary bg-green-800 text-amber-200 mt-2 border-green-800">
              Valider la commande
            </button>
          </form>
        </>
      )}
    </section>
  );
}
export default Cart;