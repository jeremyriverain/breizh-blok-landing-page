<script setup>
const features = [
  {
    title: "3 modes de navigation",
    description:
      "3 modes de navigation pour découvrir le topo de différentes manières (en parcourant une liste, une carte des blocs, ou un index des blocs par commune et secteur).",
    icon: "🔥",
  },
  {
    title: "Carte intéractive",
    description:
      "Les blocs sont visibles sur une carte. En cliquant sur les marqueurs de position, on peut en voir le détail.",
    icon: "🌐",
  },
  {
    title: "Des infos détaillées",
    description:
      "L'application comporte des vues détaillées de chaque commune, secteur et bloc. Chaque bloc comporte une photo et la ligne de bloc est matérialisée par un trait rouge.",
    icon: "🔖",
  },
  {
    title: "Trier et filtrer les blocs",
    description:
      "Des critères de recherche permettent de regrouper les blocs par commune, secteur, niveau de difficulté. On peut aussi afficher les blocs les plus récents.",
    icon: "🔍",
  },
  {
    title: "Accès hors-ligne",
    description:
      "Téléchargez un secteur avant votre session et accédez ainsi au topo même quand la connexion internet est inexistante.",
    icon: "📶",
  },
  {
    title: "Vous voulez contribuer au topo ?",
    description:
      "Vous faites régulièrement du bloc et vous aimeriez que certains blocs figurent sur le topo ? C'est possible. Pour cela, contactez-nous afin de devenir contributeur.",
    icon: "🤝",
  },
];
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <LandingFeature
      v-for="{ icon, title, description } of features"
      :icon="icon"
      :title="title"
      :description="description"
    >
    </LandingFeature>
  </div>
</template>
