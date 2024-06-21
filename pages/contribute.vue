<script setup>
definePageMeta({
  layout: "landing",
});

useHead({
  title: `Contribuer au topo - Breizh Blok`,
  meta: [
    {
      name: "description",
      content: `Vous grimpez régulièrement en extérieur et vous voulez ajouter des secteurs et des blocs ? Vous avez repéré une erreur sur le topo ? En ce cas contactez-nous.`,
    },
  ],
});
</script>

<template>
  <LandingContainer>
    <div class="mt-7 lg:mt-16 center text-center">
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        Contribuer au topo
      </h1>
    </div>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-4 lg:mt-16">
      <div>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Vous grimpez régulièrement en extérieur et vous voulez ajouter des
          secteurs et des blocs ? Vous avez repéré une erreur sur le topo ? Vous
          avez des idées pour améliorer l'application ? N'hésitez pas à nous
          contacter.
        </p>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
