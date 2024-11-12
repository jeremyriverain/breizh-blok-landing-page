<script setup lang="ts">
definePageMeta({
  layout: "landing",
});

const { t } = useI18n();

const totalBoulders = 1700;

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
  </LandingContainer>
</template>
