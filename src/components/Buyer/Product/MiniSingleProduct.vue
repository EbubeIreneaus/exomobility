<script lang="ts" setup>
import { ProductType } from 'app/types/product';

defineProps<{ product: ProductType }>();
</script>
<template>
  <router-link :to="`/product/${product.slug}`" class="q-pa-sm text-black ">
      <img :src="`${product.images[0].image}`" :alt="product.name" style="height: 100px; width: 100px" class="tw-rounded-lg"  />
    <div class="ctx">
      <h6>{{ product.name }}</h6>
      <span v-naira="product.price" class="tw-font-semibold"></span>
    </div>
  </router-link>
</template>

<style scoped lang="scss">
a{
  display: flex;
  align-items: center;
  gap: 20px;

  .ctx{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}


</style>
