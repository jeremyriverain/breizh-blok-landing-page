<template>
  <Icon
    :name="`flag:${locale === 'fr' ? 'fr' : 'gb'}-4x3`"
    @click="setLocale(locale === 'fr' ? 'en' : 'fr')"
    size="20"
    class="cursor-pointer"
  />
</template>

<script setup>
const { setLocale, locale } = useI18n();
</script>
