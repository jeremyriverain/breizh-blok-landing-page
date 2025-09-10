<template>
  <LandingContainer>
    <nav>
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NuxtLink :href="localePath('/')" class="text-lg" @click="isMenuOpened = false">
          <img src="~/assets/img/logo-200.png" alt="Logo Application Breizh Blok" loading="eager" sizes="60" width="60"
            height="60" />
        </NuxtLink>

        <div class="w-full bg-white" id="navbar" :class="isMenuOpened ? 'absolute top-20 left-4 right-4' : 'hidden'"
          v-if="!isLargeScreen">
          <ul
            class="pb-3 font-medium mt-4 rounded-lg bg-gray-50 space-x-8 rtl:space-x-reverse flex-row mt-0 border-0 bg-transparent items-center"
            :class="isMenuOpened ? '' : 'flex flex-col'">
            <li>
              <LandingNavbarLink :href="localePath('/contact')" @click="isMenuOpened = !isMenuOpened">
                {{ $t("contact") }}
              </LandingNavbarLink>
            </li>
            <li>
              <LandingNavbarLink href="https://www.buymeacoffee.com/breizhblok" @click="isMenuOpened = !isMenuOpened"
                target="_blank" rel="noopener noreferrer">
                {{ $t("supportTheProject") }}
              </LandingNavbarLink>
            </li>
            <li class="py-2 px-2">
              <LandingLocaleSwitcher @set-locale="isMenuOpened = false" />
            </li>

          </ul>

        </div>

        <div class="block w-auto bg-white" id="navbar" v-else>
          <ul
            class="pb-3 font-medium flex flex-col mt-4 rounded-lg bg-gray-50 space-x-8 rtl:space-x-reverse flex-row mt-0 border-0 bg-transparent items-center">
            <li>
              <LandingNavbarLink :href="localePath('/contact')">
                {{ $t("contact") }}
              </LandingNavbarLink>
            </li>
            <li>
              <LandingNavbarLink href="https://www.buymeacoffee.com/breizhblok" target="_blank"
                rel="noopener noreferrer">
                {{ $t("supportTheProject") }}
              </LandingNavbarLink>
            </li>
            <li class="py-2 px-2">
              <LandingLocaleSwitcher />
            </li>

          </ul>

        </div>

        <button v-if="!isLargeScreen" type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar" :aria-expanded="isMenuOpened" @click="isMenuOpened = !isMenuOpened">
          <span class="sr-only">{{ isMenuOpened ? $t('closeMenu') : $t('openMenu') }}</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
            :viewBox="isMenuOpened ? '0 0 14 14' : '0 0 17 14'">
            <path v-if="!isMenuOpened" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
              stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            <path v-else stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
        </button>
      </div>

    </nav>

  </LandingContainer>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'

const localePath = useLocalePath();

const isMenuOpened = ref(false)

const isLargeScreen = useMediaQuery('(min-width: 48rem)')
</script>
