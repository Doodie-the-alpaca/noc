# Changelog

## [Unreleased] - branche develop-v13

### Bug fixes

#### Fiche de personnage
- **Boutons +/- des talents** : correction d'un bug où les boutons
  ajoutaient les modificateurs d'archétype/thème aux incréments. La cause était une
  lecture de la valeur dérivée (`this.actor.system`) au lieu de la valeur de base
  (`this.actor._source.system`), les données dérivées incluant déjà les bonus d'archétype/thème.
- **ajout d'archétype/theme** : correction d'un bug où les ajouts d'archétype/thème à la fiche de personnage 
  fonctionnaient mal. La cause était un attribut `name` vide dans les effets au moment de la création des objets thèmes/archétypes.
- **qualités/défauts** : correction du même bug de `name` vide dans les effets au moment de l'ajout de qualités/défauts


#### Fiche archétype
- **Ouverture des thèmes liés** : correction du même bug d'attribut `name` vide lors de la création 
  des thèmes liés, empêchant l'ouverture de la fiche des thèmes
- **Drag & drop archétype/thème sur fiche personnage** : correction du même bug d'attribut
  `name` vide dans `_onDropArchetype`, qui empêchait l'ajout du thème à l'acteur lors du drop.

#### Items
- **Image non sauvegardée** : correction d'un bug où l'image d'un item était systématiquement
  réinitialisée à l'icône par défaut après toute modification. Le constructeur de `nocItem` écrasait
  inconditionnellement le champ `img` à chaque instanciation. L'écrasement est maintenant conditionnel :
  l'image par défaut n'est appliquée que si aucune image personnalisée n'est déjà définie.

### Nouvelles fonctionnalités

#### Compteur de Fiel
- **Setting d'affichage** : ajout d'un paramètre client permettant à chaque utilisateur d'afficher
  ou masquer le compteur de Fiel en bas à gauche de l'écran.
- **Setting de taille** : ajout d'un paramètre client permettant à chaque utilisateur d'ajuster
  la taille du compteur (50% à 200%, par pas de 10%). Les paramètres sont appliqués au démarrage
  et mis à jour en temps réel sans rechargement.

#### Fiche personnage — Sélection d'archétype/thème
- **Nouveau bouton "Choisir un archétype"** : un bouton `+` apparaît dans la zone archétype de la
  fiche personnage lorsqu'aucun archétype n'est assigné. Il ouvre un dialog permettant de choisir
  un archétype directement depuis le compendium (liste triée alphabétiquement), puis le thème
  associé, et d'en appliquer les effets à la fiche de personnage.

### Compendium

#### Archetypes
- **Correction des archétypes** correction des archétypes dont le champ `changes` ne correspondait 
  pas aux valeurs de talents majeurs, talents mineurs et affinités décrits au début du fichier yaml.
  (27 archétypes concernés, correction automatique via un script)  