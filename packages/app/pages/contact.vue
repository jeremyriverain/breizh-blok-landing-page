<script setup>
definePageMeta({
  layout: "landing",
});

const { t } = useI18n();

useHead({
  title: `${t("contact")} - Breizh Blok`,
  meta: [
    {
      name: "description",
      content: t("contactUs"),
    },
  ],
});
</script>

<template>
  <LandingContainer>
    <div class="mt-4 lg:mt-16 center text-center">
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        {{ $t("contact") }}
      </h1>
    </div>

    <div class="mx-auto max-w-xl mt-8">
      <LandingContactform />
    </div>
  </LandingContainer>
</template>
