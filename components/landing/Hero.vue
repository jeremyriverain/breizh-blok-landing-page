<script setup lang="ts">
defineProps<{ totalBoulders: number }>()
</script>

<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-4 pb-8 md:pt-8">
    <div class="md:order-1 hidden md:block">
      <img
        src="~/assets/img/mockup-900.webp"
        :alt="$t('applicationMockups')"
        loading="eager"
        width="600"
        height="685"
        srcset="
          ~/assets/img/mockup-600.webp   600w,
          ~/assets/img/mockup-900.webp   900w,
          ~/assets/img/mockup-1200.webp 1200w
        "
        sizes="600"
        fetchpriority="high"
      >
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        <span
          class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
        >Breizh
          Blok</span><br>
        {{ $t("appPurpose") }}
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        {{ $t("indexDescription", { totalBoulders }) }}
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://play.google.com/store/apps/details?id=fr.geekco.boulders&hl=en_ZA&gl=US"
          target="_blank"
          rel="noopener"
        >
          {{ $t("downloadOnAndroid") }}
        </LandingLink>
        <LandingLink
          size="lg"
          style-name="outline"
          rel="noopener"
          href="https://apps.apple.com/app/breizh-blok/id1616287447"
          target="_blank"
        >
          {{ $t("downloadOnIOS") }}
        </LandingLink>
      </div>
    </div>
  </main>
</template>
