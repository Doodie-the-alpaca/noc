
export function registerNocSettings() {


    // setting pour Fiel et menace
    game.settings.register("noc", "compteurFiel", {
        scope: 'world',
        config: false,
        type: Object,
        default: {
            gouttes: 0,
            menace: 0,
            effetActif: {}

        }
    })
    // setting pour Fiel et menace
    game.settings.register("noc", "displayDroplet", {
        scope: 'world',
        config: true,
        type: Boolean,
        default: false,
        name: "afficher l'effet goutte de Fiel",
        hint: "Lorsque qu'une goutte de Fiel est ajoutée au compteur de menace, un effet de goutte sera affiché.",
    })
    // setting pour Fiel et menace
    game.settings.register("noc", "displayMecanisme", {
        scope: 'world',
        config: true,
        type: Boolean,
        default: false,
        requiresReload: true,
        name: "afficher un effet de mécanisme ",
        hint: "Lorsque que l'utilisateur se connecte un effet de mecanisme est affiché avant que l'utilisateur ne puisse utiliser l'interface",
    })
    // afficher ou cacher le compteur de fiel
    game.settings.register("noc", "showFielCounter", {
        scope: 'client',
        config: true,
        type: Boolean,
        default: true,
        name: "Afficher le compteur de Fiel",
        hint: "Affiche ou masque le compteur de gouttes de Fiel en bas à gauche de l'écran.",
        onChange: () => applyFielCounterDisplay()
    })
    // taille du compteur de fiel
    game.settings.register("noc", "fielCounterScale", {
        scope: 'client',
        config: true,
        type: Number,
        default: 100,
        range: { min: 50, max: 200, step: 10 },
        name: "Taille du compteur de Fiel",
        hint: "Ajuste la taille du compteur en pourcentage (100 = taille normale).",
        onChange: () => applyFielCounterDisplay()
    })

}

/**
 * Applique les settings d'affichage du compteur de Fiel au DOM.
 * Appelée au démarrage et à chaque changement de setting.
 */
export function applyFielCounterDisplay() {
    const widget = document.querySelector("#ui-left form#compteurs");
    if (!widget) return;

    // Affichage on/off : on utilise la classe .hide qui existe déjà dans le CSS
    const show = game.settings.get("noc", "showFielCounter");
    widget.classList.toggle("hide", !show);

    // Taille via transform: scale, sans toucher au layout d'origine
    const scale = game.settings.get("noc", "fielCounterScale") / 100;
    widget.style.transform = `scale(${scale})`;
    widget.style.transformOrigin = "bottom left";
}
