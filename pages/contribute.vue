<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <div class="mt-16 center text-center">
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        Contribuer au topo
      </h1>
    </div>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Breizh Blok est un projet collaboratif. Il est réalisé par des
          grimpeurs, pour des grimpeurs. Il vise à promouvoir la pratique du
          bloc en Bretagne. L'exhaustivité du topo et l'exactitude des
          informations affichées dépendent des contributions des uns et des
          autres.
        </p>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Vous grimpez régulièrement en extérieur et vous voulez ajouter des
          secteurs et des blocs ? Vous avez repéré une erreur sur le topo ? En
          ce cas, contactez-nous.
        </p>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
