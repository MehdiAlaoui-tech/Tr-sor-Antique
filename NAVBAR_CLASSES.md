# Classes de la Navbar

## Structure generale

| Classe | Definition |
|---|---|
| `navbar` | Classe principale de la barre de navigation. |
| `flex` | Active l'affichage Flexbox. |
| `w-full` | Prend toute la largeur disponible. |
| `items-center` | Centre les elements verticalement. |
| `gap-4` | Ajoute un espace entre les elements. |
| `bg-green-950` | Applique un fond vert tres fonce. |
| `p-4` | Ajoute un padding de 1rem. |

## Logo et marque

| Classe | Definition |
|---|---|
| `navbar-brand` | Contient le logo, le titre et le slogan. |
| `justify-center` | Centre le contenu horizontalement. |
| `text-amber-100` | Applique une couleur ambre claire au texte. |
| `navbar-logo` | Classe personnalisee du logo. |
| `h-12` | Definit une hauteur de 3rem. |
| `w-12` | Definit une largeur de 3rem. |
| `object-contain` | Conserve les proportions de l'image. |
| `navbar-brand-text` | Contient le titre et le slogan. |
| `navbar-title` | Classe personnalisee du titre. |
| `navbar-tagline` | Classe personnalisee du slogan. |

## Recherche

| Classe | Definition |
|---|---|
| `navbar-search` | Conteneur principal de la recherche. |
| `relative` | Permet de positionner l'icone relativement au champ. |
| `left-12` | Decale la zone vers la droite. |
| `max-w-md` | Limite la largeur maximale a environ 28rem. |
| `h-10` | Definit une hauteur de 2.5rem. |
| `rounded-2xl` | Cree des coins fortement arrondis. |
| `border` | Ajoute une bordure. |
| `px-4` | Ajoute un padding horizontal. |
| `pr-10` | Ajoute un padding a droite pour l'icone. |
| `pointer-events-none` | Empeche l'icone de bloquer les clics. |
| `absolute` | Positionne l'icone independamment du contenu. |
| `right-3` | Place l'icone a droite. |
| `top-1/2` | Place l'icone au milieu vertical. |
| `-translate-y-1/2` | Centre precisement l'icone verticalement. |

## Actions utilisateur

| Classe | Definition |
|---|---|
| `navbar-actions` | Contient le compte utilisateur et le panier. |
| `ml-auto` | Repousse les actions vers la droite. |
| `shrink-0` | Empeche les actions de retrecir. |
| `gap-10` | Ajoute un grand espace entre les actions. |
| `navbar-account` | Conteneur de l'icone et du menu utilisateur. |
| `group` | Permet d'utiliser `group-hover` sur les enfants. |
| `account-icon` | Classe personnalisee de l'icone utilisateur. |
| `transition` | Anime les changements de style. |
| `group-hover:text-blue-500` | Change l'icone en bleu au survol. |
| `cart-icon` | Classe personnalisee de l'icone panier. |
| `h-6` | Definit une hauteur de 1.5rem. |
| `w-6` | Definit une largeur de 1.5rem. |

## Menu du compte

| Classe | Definition |
|---|---|
| `account-menu` | Classe personnalisee du menu utilisateur. |
| `invisible` | Rend le menu invisible. |
| `right-0` | Aligne le menu a droite. |
| `top-8` | Place le menu sous l'icone. |
| `z-10` | Place le menu au-dessus des autres elements. |
| `flex-col` | Organise les elements verticalement. |
| `h-48` | Definit la hauteur du menu. |
| `w-40` | Definit la largeur du menu. |
| `translate-y-2` | Decale legerement le menu vers le bas. |
| `gap-2.5` | Ajoute un espace entre les elements. |
| `rounded-lg` | Arrondit les coins du menu. |
| `bg-white` | Applique un fond blanc. |
| `p-4` | Ajoute un padding interieur. |
| `text-black` | Rend le texte noir. |
| `opacity-0` | Rend le menu transparent. |
| `shadow-md` | Ajoute une ombre moyenne. |
| `duration-300` | Definit une animation de 300 ms. |
| `group-hover:visible` | Affiche le menu au survol. |
| `group-hover:translate-y-0` | Replace le menu a sa position initiale. |
| `group-hover:opacity-100` | Rend le menu totalement visible. |

## Bouton de connexion

| Classe | Definition |
|---|---|
| `btn` | Classe de base DaisyUI pour un bouton. |
| `btn-dash` | Applique un style de bouton avec bordure en tirets. |
| `bg-black` | Applique un fond noir. |
| `text-amber-50` | Applique une couleur ambre tres claire. |
| `h-auto` | Adapte automatiquement la hauteur au contenu. |
| `w-auto` | Adapte automatiquement la largeur au contenu. |

Les classes comme `navbar-brand`, `navbar-logo`, `navbar-search` et `account-menu` sont des classes personnalisees pour organiser le code. Les classes comme `flex`, `p-4`, `gap-4` et `bg-green-950` sont des utilitaires Tailwind CSS.
