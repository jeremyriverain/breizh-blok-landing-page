<script setup>
definePageMeta({
  layout: "landing",
});

useHead({
  title: `Breizh Blok, topo des blocs d'escalade de Bretagne`,
  meta: [
    {
      name: "description",
      content: `Breizh Blok est une application mobile répertoriant les blocs d'escalade en Bretagne. + de 1400 blocs répertoriés. Disponible sur Android et iOS.`,
    },
  ],
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingFeatures></LandingFeatures>
  </LandingContainer>
</template>
