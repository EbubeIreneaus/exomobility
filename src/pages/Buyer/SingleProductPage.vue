<script lang="ts" setup>
import { useRoute } from 'vue-router';
import BreadCrumbs from 'src/components/Buyer/BreadCrumbs.vue';
import { computed, ref } from 'vue';
import { ProductType } from 'app/types/product';
import ProductImageSlide from 'src/components/Buyer/Product/ProductImageSlide.vue';
import { useCartStore } from 'src/stores/cart';
import { useProductStore } from 'src/stores/product';
import SingleProduct from 'src/components/Buyer/Product/SingleProduct.vue';

const toggleSeemore = ref(false);

defineOptions({
  async preFetch({ store }) {
    let s = useProductStore(store);
    s.fetchAllProduct();
  },
});

const store = useProductStore();
const cart = useCartStore();
const { slug } = useRoute().params;

const product = computed<ProductType>(
  () => store.products?.find((p) => p.slug == slug) || ({} as ProductType)
);

const related = computed<ProductType[]>(
  () =>
    store.products?.filter(
      (p) => p.category.name == product.value.category.name
    ) || ([] as ProductType[])
);

const carting = ref(1);
</script>

<template>
  <q-page>
    <BreadCrumbs :title="product.name" :navs="['shop', 'product details']" />

    <q-card flat square>
      <q-card-section class="">
        <div
          class="tw-grid lg:tw-grid-cols-2 tw-grid-cols-1 tw-gap-y-6 container tw-mx-auto tw-my-6"
        >
          <div class="">
            <ProductImageSlide :product="product" />
          </div>
          <div class="tw-my-10 md:tw-px-5">
            <div class="">
              <h1 class="tw-text-3xl tw-font-bold tw-uppercase tw-mb-4">
                {{ product.name }}
              </h1>

              <div class="tw-mb-5">
                <q-rating
                  :model-value="5"
                  size="medium"
                  readonly
                  color="grey-5"
                  color-selected="black"
                />
                <div class="tw-inline tw-ms-6 tw-font-semibold tw-text-lg">
                  ( 100+ Reviews)
                </div>
              </div>

              <div class="tw-mb-5">
                <del class="text-h6 text-weight-bold text-grey-6"
                  ><span v-naira="product.price"></span
                ></del>
                <span
                  v-naira="product.discount"
                  class="text-h5 text-weight-bold tw-ps-5"
                ></span>
              </div>

              <div class="tw-mb-5 tw-relative">
                <span
                  class="text-body1 tw-text-balance tw-font-semibold"
                  :class="{
                    'tw-line-clamp-3 tw-text-ellipsis': !toggleSeemore,
                  }"
                >
                  {{ product.description }}
                </span>
                <button
                  @click="toggleSeemore = !toggleSeemore"
                  class="tw-inline tw-ml-1  text-body2"
                >
                  {{ toggleSeemore ? 'see less' : 'see more' }}
                </button>
              </div>

              <div class="tw-flex tw-flex-wrap tw-gap-5">
                <div class="tw-flex tw-border tw-w-fit">
                  <q-btn
                    icon="add"
                    unelevated
                    color="green-5"
                    @click="carting++"
                  />
                  <q-input
                    v-model="carting"
                    standout
                    borderless
                    class="tw-w-20"
                    input-style="text-align: center"
                  />
                  <q-btn
                    icon="remove"
                    unelevated
                    color="red-5"
                    @click="carting--"
                    :disable="carting < 1"
                  />
                </div>
                <div>
                  <q-btn
                    :label="
                      cart.has(product) ? 'remove from cart' : 'add to cart'
                    "
                    class="tw-h-full"
                    unelevated
                    color="blue-5"
                    @click="
                      () =>
                        cart.has(product)
                          ? cart.remove(product)
                          : cart.add(product, carting)
                    "
                  />
                </div>
              </div>
            </div>

            <q-separator class="tw-my-5" />
            <div>
              <q-list>
                <q-item v-for="spec in product.specifications" :key="spec.name">
                  <q-item-section class="text-weight-bold tw-uppercase">{{
                    spec.name
                  }}</q-item-section>
                  <q-item-section class="tw-capitalize tw-font-semibold">{{
                    spec.value
                  }}</q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>

    <q-card flat square>
      <h2 class="text-center tw-font-extrabold tw-text-4xl mb-5">
        Related Products
      </h2>
      <q-card-section>
        <div
          class="tw-grid lg:tw-grid-cols-5 md:tw-grid-cols-4 sm:tw-grid-cols-3 tw-grid-cols-2 tw-gap-2 md:tw-gap-5"
        >
          <SingleProduct
            :product="product"
            v-for="product in related"
            :key="product.slug"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style lang="css" scoped></style>
