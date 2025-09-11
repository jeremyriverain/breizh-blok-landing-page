<template>
  <option :value="code" :selected>
    {{ name }}
  </option>
</template>

<script setup lang="ts">
defineProps<{ code: string; name: string; selected: boolean }>();
</script>
