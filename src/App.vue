<template>
  <SplashScreen v-if="store.isLoading" />

  <router-view v-else />
</template>

<script setup lang="ts">
import { provide, onMounted } from 'vue'
import { useProductStore } from './stores/product'
import SplashScreen from './components/SplashScreen.vue'

defineOptions({ name: 'App' })

const store = useProductStore()

const api = import.meta.env.DEV
  ? 'http://127.0.0.1:8000'
  : 'https://api-therawmarket.vercel.app'

provide('api', api)

</script>
