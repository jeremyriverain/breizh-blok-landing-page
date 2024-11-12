<template>
  <LandingContainer>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full grow lg:w-auto items-center justify-between">
        <NuxtLink :href="localePath('/')" class="text-lg">
          <img
            src="~/assets/img/logo-200.png"
            alt="Logo Application Breizh Blok"
            loading="eager"
            sizes="60"
            width="60"
            height="60"
          />
        </NuxtLink>
        <div class="flex items-center">
          <nav class="items-end">
            <LandingLink :href="localePath('/contribute')" styleName="muted">
              <span class="hidden md:inline">
                {{ $t("contributeToTheTopo") }}
              </span>
              <span class="md:hidden">
                {{ $t("contribute") }}
              </span>
            </LandingLink>
          </nav>
          <LandingLocaleSwitcher class="ml-3" />
        </div>
      </div>
    </header>
  </LandingContainer>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
</script>
