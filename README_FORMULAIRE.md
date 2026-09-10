# Fiche de revision : formulaire React

Cette fiche explique les notions importantes pour creer un formulaire React.

## 1. Formulaire

Un formulaire utilise `<form>` et `onSubmit`.

```jsx
<form onSubmit={handleSubmit}>
  <input type="email" placeholder="Email" />
  <button type="submit">Envoyer</button>
</form>
```

## 2. Gestion d'etat

On utilise `useState` pour enregistrer la valeur de l'input :

```jsx
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  return (
    <input
      type="email"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />
  );
}
```

- `email` contient la valeur actuelle.
- `setEmail` modifie la valeur.
- `event.target.value` recupere le texte ecrit.

## 3. `onSubmit`

`onSubmit` est appele quand l'utilisateur envoie le formulaire :

```jsx
function handleSubmit(event) {
  event.preventDefault();
  console.log(email);
}
```

`event.preventDefault()` empeche la page de se recharger.

### Exemple complet

```jsx
function Login() {
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Email :", email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

## 4. Conditions

Les conditions permettent d'afficher un message selon une situation :

```jsx
{email === "" && <p>Veuillez entrer votre email</p>}
```

Avec un operateur ternaire :

```jsx
{email ? <p>Email saisi</p> : <p>Email manquant</p>}
```

Exemple avec le panier :

```jsx
{cart.length === 0 ? (
  <p>Le panier est vide</p>
) : (
  <p>Le panier contient des produits</p>
)}
```

## 5. Validation

On verifie les donnees avant l'envoi :

```jsx
function handleSubmit(event) {
  event.preventDefault();

  if (email === "") {
    alert("L'email est obligatoire");
    return;
  }

  console.log("Formulaire envoye");
}
```

- `if` verifie la condition.
- `return` arrete la fonction si l'email est vide.
- Sinon, le formulaire peut etre envoye.

## 6. Responsive design

Avec Tailwind, les classes changent selon la taille de l'ecran :

```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>Produit 1</div>
  <div>Produit 2</div>
  <div>Produit 3</div>
</div>
```

- Sur telephone : une colonne.
- Sur un ecran moyen ou grand : trois colonnes.

Autre exemple :

```jsx
<input className="w-full md:w-1/2 border p-2" />
```

- Sur telephone : largeur complete.
- Sur un ecran moyen : moitie de la largeur.

## 7. Accessibilite

Une interface accessible doit etre comprehensible par tous.

### Label et input

```jsx
<label htmlFor="email">Adresse email</label>

<input
  id="email"
  type="email"
  placeholder="exemple@mail.com"
/>
```

`htmlFor` du label correspond a `id` de l'input.

### Image

```jsx
<img src={product.image} alt={product.name} />
```

`alt` decrit l'image si elle ne peut pas etre affichee.

### Bouton

```jsx
<button type="submit">
  Envoyer le formulaire
</button>
```

A retenir :

- utiliser un `<label>` pour chaque input
- ajouter un `alt` aux images
- utiliser `<button>` pour les actions
- utiliser `type="submit"` pour envoyer un formulaire
- ne pas utiliser seulement la couleur pour transmettre une information

## Exemple complet avec validation

```jsx
import { useState } from "react";

function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (email === "" || message === "") {
      setMessage("Tous les champs sont obligatoires");
      return;
    }

    setMessage("Formulaire envoye");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-1/2 p-4">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="w-full border p-2"
      />

      <label htmlFor="message">Message</label>
      <input
        id="message"
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="w-full border p-2"
      />

      <button type="submit" className="border p-2 mt-2">
        Envoyer
      </button>
    </form>
  );
}
```

## Petit exercice

Cree un formulaire avec :

- un nom
- un email
- un mot de passe
- un bouton Envoyer

Le formulaire doit :

1. enregistrer chaque valeur avec `useState`
2. empecher le rechargement avec `preventDefault`
3. afficher une erreur si un champ est vide
4. afficher `Formulaire envoye` si tout est rempli
5. etre responsive avec Tailwind
6. avoir des `label` et des `type` corrects
