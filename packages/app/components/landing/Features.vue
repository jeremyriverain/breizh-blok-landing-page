<script setup>
const { t } = useI18n();
const features = [
  {
    title: t("featureEasyNavigationTitle"),
    description: t("featureEasyNavigationDescription"),
    icon: "🔥",
  },
  {
    title: t("featureMapTitle"),
    description: t("featureMapDescription"),
    icon: "🌐",
  },
  {
    title: t("featureDetailsInfoTitle"),
    description: t("featureDetailsInfoDescription"),
    icon: "🔖",
  },
  {
    title: t("featureSearchCriteriaTitle"),
    description: t("featureSearchCriteriaDescription"),
    icon: "🔍",
  },
  {
    title: t("featureOfflineFirstTitle"),
    description: t("featureOfflineFirstDescription"),
    icon: "📶",
  },
  {
    title: t("featureContributeTitle"),
    description: t("featureContributeDescription"),
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
