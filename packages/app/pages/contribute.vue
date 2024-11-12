<script setup>
definePageMeta({
  layout: "landing",
});

const { t } = useI18n();

useHead({
  title: `${t("contributeToTheTopo")} - Breizh Blok`,
  meta: [
    {
      name: "description",
      content: t("contributeMetaDescription"),
    },
  ],
});
</script>

<template>
  <LandingContainer>
    <div class="mt-7 lg:mt-16 center text-center">
      <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        {{ $t("contributeToTheTopo") }}
      </h1>
    </div>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-4 lg:mt-16">
      <div>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          {{ $t("contributeDescription") }}
        </p>
        <p class="text-lg leading-relaxed text-slate-500 mt-2">
          {{ $t("contactUs") }}
        </p>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
