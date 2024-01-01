<script setup>
const open = ref(false);
</script>

<template>
  <LandingContainer>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full lg:w-auto items-center justify-between">
        <NuxtLink href="/" class="text-lg">
          <img
            class="rounded-full transition-transform transform hover:scale-125"
            src="~/assets/img/logo-200.png"
            alt="Logo Application Breizh Blok"
            loading="eager"
            sizes="60"
            width="60"
            height="60"
          />
        </NuxtLink>
        <div class="block lg:hidden">
          <button @click="open = !open" class="text-gray-800">
            <svg
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                v-show="open"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <nav
        class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
        :class="{ block: open, hidden: !open }"
      >
        <div class="lg:hidden flex items-center mt-3 gap-4">
          <div>
            <LandingLink href="/contribute" styleName="muted" block size="md"
              >Contribuer au topo</LandingLink
            >
          </div>
        </div>
      </nav>
      <div>
        <div class="hidden lg:flex items-center gap-4">
          <a href="/contribute">Contribuer au topo</a>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>
