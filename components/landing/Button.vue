<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  size: {
    type: String as PropType<'md' | 'lg'>,
    default: 'md',
  },
  block: {
    type: Boolean,
    default: false,
  },
  styleName: {
    type: String as PropType<'outline' | 'primary'>,
    default: 'primary',
  },
})

const sizes = {
  md: 'px-5 py-2.5',
  lg: 'px-6 py-3',
} as const

const styles = {
  outline: 'border-2 border-black hover:bg-black text-black hover:text-white',
  primary:
    'bg-black text-white hover:bg-slate-900  border-2 border-transparent',
} as const
</script>

<template>
  <button
    :class="[
      'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200',
      block && 'w-full',
      sizes[size],
      styles[styleName],
    ]"
  >
    <slot />
  </button>
</template>
