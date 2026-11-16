const API_URL = "https://countries.dev/countries";

// Tous les pays reçus de l'API (rempli une seule fois, au chargement)
let allCountries = [];
// TODO : récupère ici les éléments du DOM dont tu as besoin

/**
 * Récupère tous les pays depuis l'API.
 * - Utilise fetch avec async/await.
 * - Appelée UNE SEULE FOIS, au chargement de la page.
 *
 * @returns {Promise<Array>} Le tableau de tous les pays.
 */
async function fetchCountries() {
  try {
    const response = await fetch("https://countries.dev/countries");
    if (!response.ok) {
      throw new Error(`erreur could not fetch data ${response.status}`);
    } 
    allCountries = await response.json();
    createCountryCard(allCountries)
  }
    
    catch (error) {
      console.error("Failed to fetch:", error);
    }
}
fetchCountries()

/**
 * Crée la carte HTML d'un pays, sur le modèle de la maquette :
 * drapeau (avec un texte alternatif utile), nom, capitale, population.
 *
 * @param {Object} country - Un pays tel que renvoyé par l'API.
 * @returns {HTMLElement} La carte, prête à être ajoutée à la grille.
 */
function createCountryCard(country) {
  const container = document.getElementById("pays-container")
  country.forEach((country)=>{
    const article = document.createElement("article")
    article.classList.add("border", "border-[#D9E0E8]", "rounded-[12px]","overflow-hidden", "hover:cursor-pointer", "hover:border-black")
    container.appendChild(article)

    const img = document.createElement("img")
    img.src =   country.flags.svg
    img.alt = `${country.name} flag`
    img.classList.add("w-full", "max-h-50")
    article.appendChild(img)

    const h2 = document.createElement("h2")
    h2.textContent = country.name
    h2.classList.add("text-xl", "p-2")
    article.appendChild(h2)

    const div1 = document.createElement("div")
    div1.classList.add("flex", "justify-between", "mt-2", "p-2")
    article.appendChild(div1)

    const p = document.createElement("p")
    p.textContent = "Capitale"
    div1.appendChild(p)

    const span = document.createElement("span")
    span.textContent = country.capital
    div1.appendChild(span)

    const div2 = document.createElement("div")
    div2.classList.add("flex", "justify-between", "mt-2", "p-2")
    article.appendChild(div2)

    const p2 = document.createElement("p")
    p2.textContent = "Population"
    div2.appendChild(p2)
    
    const span2 = document.createElement("span");
    span2.textContent = country.population
    div2.appendChild(span2)
  })
}


/**
 * Affiche une liste de pays dans la grille.
 * - Vide d'abord la grille (sinon les cartes s'accumulent).
 * - Ajoute une carte par pays.
 * - Si la liste est vide, affiche le message « Aucun pays ne correspond ».
 *
 * @param {Array} countries - Les pays à afficher.
 */
function displayCountries(countries) {
  // TODO
}

/**
 * Applique les deux filtres EN MÊME TEMPS sur allCountries :
 * - le continent choisi dans la liste déroulante ;
 * - le texte saisi dans la recherche (majuscules et minuscules ignorées).
 * Puis affiche le résultat avec displayCountries().
 *
 * Aucune requête vers l'API ici !
 */
function filterCountries() {
  // TODO
}


// ------------------------------------------------------------
// BONUS
// ------------------------------------------------------------

/**
 * (Bonus) Trie des pays par population, du plus peuplé au moins peuplé.
 * Attention : ne modifie pas le tableau allCountries d'origine.
 *
 * @param {Array} countries
 * @returns {Array} Un nouveau tableau trié.
 */
function sortByPopulation(countries) {
  // TODO
}

/**
 * (Bonus) Affiche ou masque le message « Chargement des pays… ».
 *
 * @param {boolean} isLoading - true pour l'afficher, false pour le masquer.
 */
function showLoader(isLoading) {
  // TODO
}

/**
 * (Bonus) Affiche un message d'erreur clair quand l'API ne répond pas.
 *
 * @param {string} message
 */
function showError(message) {
  // TODO
}


// ------------------------------------------------------------
// DÉMARRAGE
// ------------------------------------------------------------

/**
 * Point d'entrée de l'application :
 * 1. récupère les pays avec fetchCountries() et les stocke dans allCountries ;
 * 2. affiche les pays du continent sélectionné par défaut ;
 * 3. écoute les changements de continent et la saisie dans la recherche.
 *
 * (Bonus) Gère le chargement et les erreurs avec try...catch.
 */
async function init() {
  // TODO
}

init();
