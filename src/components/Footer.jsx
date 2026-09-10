function Footer() {
  return (
    <footer className="bg-green-950 px-6 py-12 text-amber-200">
        <ul className="mx-auto grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <li>
             <h3 className="font-bold">CATALOGUE</h3>
             <ul className="mt-4 space-y-2 font-light text-amber-200">
                <li>catégorie</li>
                <li>style</li>
                <li>époque</li>
                <li>Nouveauté</li>
             </ul>   
            </li>
             <li>
             <h3 className="font-bold">PROFESSIONNELS</h3>
             <ul className="mt-4 space-y-2 font-light text-amber-200">
                <li>antiquaires</li>
                <li>syndicats</li>
                <li>d'antiquaire</li>
                <li>siècle</li>
             </ul>   
            </li>
             <li>
             <h3 className="font-bold">MAGAZINE</h3>
             <ul className="mt-4 space-y-2 font-light text-amber-200">
                <li>agenda</li>
                <li>article</li>
                <li>les styles</li>
                <li>séculaire</li>
             </ul>   
            </li>
              <li>
             <h3 className="font-bold">RÉSEAUX SOCIAUX</h3>
             <ul className="mt-4 space-y-2 font-light text-amber-200">
                <li>facebook</li>
                <li>instagram</li>
                <li>youtube</li>
                <li>x</li>
             </ul>   
            </li>
        </ul>
      <div className="mt-8 min-h-2 text-xs text-amber-200 bg-green-950">© 2026 Trésors d'Antan. Tous droits réservés. 
Antiquités & mobilier d'exception — SIRET [00212663668137]
Toute reproduction totale ou partielle du contenu de ce site est strictement interdite sans autorisation écrite préalable Chaque pièce est sélectionnée avec passion pour préserver l'héritage du temps..</div>
   <hr className="mx-auto w-48 border-amber-200 m-10 " />
    <div className="flex items-center justify-center">
      <img
          src="/logo.png"
          alt="Tresor Antique"
          className="navbar-logo h-12 w-12 object-contain m-15"
        />
    </div>
    </footer>

  )
};
export default Footer;