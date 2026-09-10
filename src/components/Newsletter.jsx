import emailjs from "@emailjs/browser";
import { useState } from "react";

function Newsletter({ email, setEmail }) {
  const [message, setMessage] = useState("");
  const [envoiEnCours, setEnvoiEnCours] = useState(false);

const envoyerEmail = (e) => {
  e.preventDefault();

  const emailInscrit = email.trim();
  if (!emailInscrit) return;

  setMessage("");
  setEnvoiEnCours(true);

  emailjs
    .send(
      "service_s009u1s",
      "template_5y51svu",
      {
        to_email: "mehdi.al.business@example.com",
        reply_to: emailInscrit,
        email: emailInscrit,
        subscriber_email: emailInscrit,
        message: `Nouvelle inscription à la newsletter : ${emailInscrit}`,
      },
      "KArnRTw1KR6AM5al2"
    )
    .then(() => {
      setMessage(`Merci ! L'adresse ${emailInscrit} a bien été envoyée.`);
      setEmail("");
    })
    .catch(() => {
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    })
    .finally(() => {
      setEnvoiEnCours(false);
    });
};

  return (
    <section className="min-h-20 gap-6 bg-green-950 p-4">

      <div className="m-2.5 flex items-center justify-center gap-2">
        <h1 className="text-center text-3xl font-bold text-amber-200">
          Newsletter
        </h1>
      </div>

      <form onSubmit={envoyerEmail} className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-0">

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre email"
          required
          className="relative h-10 w-50 rounded-l-lg rounded-r-none border border-amber-200 bg-green-950 px-3 text-center text-amber-200"
        />

        <button
          type="submit"
          disabled={envoiEnCours}
          className="btn btn-primary border-amber-200 bg-green-950 text-amber-200"
        >
          {envoiEnCours ? "Envoi..." : "Je m'abonne"}
        </button>
        </div>
        {message && (
          <p className="text-center text-amber-200" role="status">
            {message}
          </p>
)}

      </form>

    </section>
  );
}

export default Newsletter;
