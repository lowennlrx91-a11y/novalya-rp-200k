# NovaLya RP — site vitrine 3D

Site statique en français pour NovaLya RP. Ouvrir `index.html` via un hébergement web ou un petit serveur local. Le visualiseur FBX charge `mascotte 3D procédurale dans js/fbx-viewer.js` avec Three.js depuis jsDelivr : une connexion internet est nécessaire pour ce module 3D. Il faut ouvrir le site via un hébergement web ou un serveur local (pas directement en double-cliquant sur index.html), car les navigateurs bloquent souvent les modules et chargements FBX en file://.

## Inclus
- Audi sportive 3D interactive, rotation à la souris et zoom à la molette.
- Flocage NovaLya RP avec bandes violettes et accent citron vert.
- Gyrophare de police détaillé et maison à toiture, fenêtres, briques et jardin retravaillés en 3D.
- Page/section règlement et présentation de l'équipe : fondateur **Nexaro**, développeur **2007**.
- Liens Discord mis à jour : https://discord.com/invite/RGBuPNVmmE
- Petits effets sonores générés au clic (ils se déclenchent après interaction, selon les réglages du navigateur).

## Personnalisation
- Textes et navigation : `index.html`
- Couleurs et mise en page : `css/style.css`
- Visualiseur 3D interactif de la mascotte : `js/fbx-viewer.js`
- Effets sonores : `js/sound-effects.js`
- Scènes décoratives Three.js d'origine : `src/`

Le règlement inclus est une base de départ, à remplacer/compléter selon les règles officielles de votre serveur.


## Dépannage audio et modèle 3D
- La musique démarre uniquement après un clic sur « Activer la musique » : les navigateurs bloquent généralement la lecture audio automatique.
- Le visualiseur affiche un message d'erreur plus explicite si le FBX ne se charge pas.
- Le visualiseur principal utilise désormais une Audi procédurale ; le FBX historique reste dans `assets/models` comme ancienne ressource non utilisée.
- Si le modèle ne s'affiche toujours pas, ouvre le site via un hébergement web, puis vérifie la console du navigateur (F12) et que l'URL mascotte 3D procédurale dans js/fbx-viewer.js répond bien.

\n## Correctif navigateur (octobre 2026)
- Ajout d'une import map pour résoudre l'import `three` requis par le module FBXLoader dans le navigateur.
- Le visualiseur utilise maintenant le même module Three.js que le chargeur FBX.
- Volume de la musique synthétisée augmenté et libellé de bouton plus clair.
- Le son reste soumis à l'autorisation de Chrome et doit être lancé en cliquant sur le bouton.


## Version améliorée
- Musique originale synth-pop / hip-hop léger à 118 BPM, générée localement avec Web Audio (aucun morceau commercial).
- Viewer Audi : carrosserie sportive, vitrage sombre, roues multi-branches, disques, calandre à quatre anneaux, optiques LED, sorties d’échappement et flocage NovaLya RP.
- Gyrophare : boîtiers optiques rouges et bleus, LEDs, joints et vis de fixation.
- Maison : toiture à deux pans avec tuiles, façade, briques, fenêtres, porte, éclairage et jardin.
- Lancement conseillé : `npm install`, puis `npm run dev`, puis ouvrir l'URL affichée dans le terminal et cliquer sur « Écouter la musique ».
