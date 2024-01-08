<script setup>
const features = [
  {
    title: "3 modes de navigation",
    description:
      "pour parcourir le topo de différentes manières (en affichant une liste, une carte des blocs, ou un index des blocs par commune et secteur).",
    icon: "bx:bxs-bot",
  },
  {
    title: "Carte intéractive",
    description:
      "Les blocs sont visibles sur une carte. En cliquant sur les marqueurs de position, on peut en voir le détail.",
    icon: "bx:bxs-briefcase",
  },
  {
    title: "Des infos détaillées",
    description:
      "L'application comporte des vues détaillées de chaque commune, secteur et bloc. Chaque bloc comporte une photo et la ligne de bloc est matérialisée par un trait rouge.",
    icon: "bx:bxs-data",
  },
  {
    title: "Trier et filtrer les blocs",
    description:
      "Des critères de recherche permettent de regrouper les blocs par commune, secteur, niveau de difficulté. On peut aussi afficher les blocs les plus récents.",
    icon: "bx:bxs-window-alt",
  },
  {
    title: "Accès hors-ligne (disponible prochainement)",
    description:
      "Téléchargez un secteur avant votre session et accédez ainsi au topo même quand la connexion internet est inexistante.",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Vous voulez contribuer au topo ?",
    description:
      "Vous faites régulièrement du bloc et vous aimeriez que certains blocs figurent sur le topo ? C'est possible. Pour cela, contactez-nous afin de devenir contributeur.",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
