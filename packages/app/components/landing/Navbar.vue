<template>
  <LandingContainer>
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full grow lg:w-auto items-center justify-between">
        <NuxtLink href="/" class="text-lg">
          <img
            src="~/assets/img/logo-200.png"
            alt="Logo Application Breizh Blok"
            loading="eager"
            sizes="60"
            width="60"
            height="60"
          />
        </NuxtLink>
        <div class="flex">
          <nav class="items-end">
            <LandingLink href="/contribute" styleName="muted"
              >Contribuer au topo</LandingLink
            >
          </nav>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>
