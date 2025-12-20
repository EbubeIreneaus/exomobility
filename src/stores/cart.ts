/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unused-vars */
import { ProductType } from 'app/types/product';
import { defineStore } from 'pinia';
import { computed, ref, watch } from 'vue';
import { LocalStorage, Mutation } from 'quasar';

type CartProduct = { no_of_item: number; product: ProductType };
export const useCartStore = defineStore('cart', () => {
  const Carts = ref<CartProduct[]>([]);
  const length = computed(() => Carts.value.length);

  const add = async (product: ProductType, item_count = 1) => {
    const cartIndex = Carts.value.findIndex(
      (c) => c.product.slug == product.slug
    );
    if (cartIndex <= -1) {
      Carts.value.push({ product, no_of_item: item_count });
    } else {
      Carts.value[cartIndex].no_of_item = item_count;
    }
  };

  const remove = (product: ProductType) => {
    const cartIndex = Carts.value.findIndex((c) => c.product.slug == product.slug);
    if (cartIndex > -1) {
      Carts.value.splice(cartIndex, 1);
    }
  };

  const has = (product: ProductType) => {
    return Carts.value.find(c => c.product.slug == product.slug)? true : false
  }

  const total_price = computed(() => {
    const price = Carts.value.reduce(
      (x: number, y: CartProduct) =>
        x + y.no_of_item * y.product.discount,
      0
    );

    // console.log(price)
    return price;
  });

  return {
    Carts,
    length,
    add,
    total_price,
    remove,
    has
  };
});
useCartStore().$subscribe((Mutation, cart) => {
  LocalStorage.setItem('cart', [...cart.Carts]);
});
// watch(
//   () => useCartStore().length,
//   (x) => {
//     useCartStore().get_latest_cart_product();
//   }
// );
