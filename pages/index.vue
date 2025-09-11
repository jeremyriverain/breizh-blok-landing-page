<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const { t } = useI18n();

const totalBoulders = 2000;

useHead({
  title: t("indexMetaTitle"),
  meta: [
    {
      name: "description",
      content: t("indexDescription", { totalBoulders }),
    },
  ],
});
</script>

<template>
  <LandingContainer>
    <LandingHero :total-boulders="totalBoulders"></LandingHero>
    <LandingFeatures></LandingFeatures>
    <div class="flex justify-center mt-8">
      <a href="https://www.buymeacoffee.com/breizhblok" target="_blank" rel="noopener noreferrer"><img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee"
          class="ml-3 mt-8 h-auto w-48"></a>
    </div>
  </LandingContainer>
</template>
