<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="md:order-1 hidden md:block">
      <img
        src="~/assets/img/mockup-900.png"
        alt="Starship starts the engine"
        loading="eager"
        width="600"
        height="685"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        <span
          class="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text"
          >Breizh Blok</span
        ><br />
        Topo des blocs d'escalade en Bretagne
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Breizh Blok est une application mobile répertoriant les blocs d'escalade
        en Bretagne. + de 1400 blocs répertoriés. Disponible sur Android et iOS.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://play.google.com/store/apps/details?id=fr.geekco.boulders&hl=en_ZA&gl=US"
          target="_blank"
          rel="noopener"
          >Télécharger sur Android</LandingLink
        >
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://apps.apple.com/fr/app/breizh-blok/id1616287447"
          target="_blank"
          >Télécharger sur iOS</LandingLink
        >
      </div>
    </div>
  </main>
</template>
