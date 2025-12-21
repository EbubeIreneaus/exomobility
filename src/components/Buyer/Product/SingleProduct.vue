<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
// import { onMounted } from 'vue';
import { ProductType } from 'app/types/product';
import { useCartStore } from 'src/stores/cart';
defineProps<{
  product: ProductType;
}>();

const cart = useCartStore();
</script>

<template>
  <q-card flat class="tw-bg-blue-100 tw-rounded-lg" >
    <q-card-section class="tw-overflow-hidden tw-w-[150px] tw-border tw-mx-auto tw-p-0 tw-py-3">
      <img
        :src="product.images[0].image"
        class="tw-w-full tw-mx-auto tw-aspect-square  tw-rounded-lg tw-object-cover hover:tw-scale-125 tw-transition-all tw-ease-linear tw-duration-300"
      />

    </q-card-section>
    <q-card-section class="tw-text-gray-500 tw-py-1">
      <div class="text-body1 text-weight-bold tw-text-slate-950"><router-link class="hover:tw-text-slate-500" :to="`/product/${product.slug}`">{{ product.name }}</router-link></div>
      <div class="tw-line-clamp-2 tw-text-sm tw-font-medium">
        {{ product.description }}
      </div>
    </q-card-section>
    <q-card-section class="tw-py-1">
      <div class="*:tw-inline-block tw-text-center *:tw-px-1">
        <div class="tw-text-xs tw-text-black/30">
          <del><span v-naira="product.price"></span></del>
        </div>
        <div class="tw-font-semibold text-body1">
          <span v-naira="product.discount"></span>
        </div>
      </div>
      <div class="tw-flex tw-items-center tw-justify-between">
        <q-rating
          :model-value="5"
          color="grey-5"
          color-selected="black"
          readonly
          size="small"
        />
        <q-btn
          icon="add_shopping_cart"
          @click="cart.add(product)"
          unelevated
          size="md"
          :text-color="cart.has(product) ? 'red-5' : 'green-5'"
          :disable="cart.has(product) ? true : false"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<style lang="scss" scoped>
.shop-action-card {
  .shop-actions {
    visibility: hidden;
    transition: all 0.3s ease-in-out;

    button {
      border-radius: 50%;
      padding: 10px 11px;
      transition: all 0.2s ease-in-out;
      background-color: white;
      margin: 0 5px;

      &:hover {
        transform: rotate(360deg);
      }
    }
  }

  &:hover .shop-actions {
    visibility: inherit;
    margin-top: -14%;
  }
}
</style>
