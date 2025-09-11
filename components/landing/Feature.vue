<template>
  <div class="flex gap-4 items-start">
    <div class="text-2xl">
      {{ icon }}
    </div>
    <div>
      <h2 class="font-semibold text-lg">
        {{ title }}
      </h2>
      <p class="text-slate-500 mt-2 leading-relaxed">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>
