<template>
  <div>
    <label :for="id" class="sr-only block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
      $t("selectYourLanguage") }}</label>
    <select :id
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-1 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      @change="onSetLocale">
      <option v-for="l in locales" :key="l.code" :value="l.code" :selected="locale === l.code">
        {{ l.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useId } from "vue";
const { setLocale, locale, locales } = useI18n();

const id = useId();

const emit = defineEmits(['setLocale'])

function onSetLocale(event) {
  setLocale(event.target.value)
  emit('setLocale')
}
</script>
