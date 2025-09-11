<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  href: {
    type: String,
    required: true,
  },
  size: {
    type: String as PropType<'md' | 'lg'>,
    default: 'lg',
  },
  block: {
    type: Boolean,
    default: false,
  },
  styleName: {
    type: String as PropType<'outline' | 'primary' | 'inverted' | 'muted'>,
    default: 'primary',
  },
})

const sizes = {
  lg: 'px-5 py-2.5',
  md: 'px-4 py-2',
} as const

const styles = {
  outline: 'bg-white border-2 border-black hover:bg-gray-100 text-black',
  primary: 'bg-black text-white hover:bg-gray-800  border-2 border-transparent',
  inverted: 'bg-white text-black border-2 border-transparent',
  muted: 'bg-gray-100 hover:bg-gray-200 border-2 border-transparent',
} as const
</script>

<template>
  <NuxtLink
    :href="href"
    :class="[
      'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200',
      block && 'w-full',
      sizes[size],
      styles[styleName],
    ]"
  >
    <slot />
  </NuxtLink>
</template>
