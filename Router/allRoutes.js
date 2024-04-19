import Route from "./Route.js";

// Définir ici vos routes
export const allRoutes = [
    new Route("/galerie", "La Galerie", "pages/galerie.html"),
    new Route("/", "Accueil", "pages/home.html"),
    new Route("/index.html", "Accueil", "pages/home.html"),
    new Route("404.html", "404", "/pages/404.html")

];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
