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

const localePath = useLocalePath();
</script>

<template>
  <LandingContainer>
    <LandingHero :total-boulders="totalBoulders"></LandingHero>
    <LandingFeatures></LandingFeatures>
    <div class="flex justify-center mt-8">
      <LandingLink :href="localePath('/contribute')">
        {{ $t("contributeToTheTopo") }}
      </LandingLink>
    </div>
  </LandingContainer>
</template>
