<!-- eslint-disable quotes -->
<script lang="ts" setup>
import BreadCrumbs from 'src/components/Buyer/BreadCrumbs.vue';
import SingleProduct from 'src/components/Buyer/Product/SingleProduct.vue';
import { vAutoAnimate } from '@formkit/auto-animate';
import { ref, watch, computed, reactive } from 'vue';
import { useProductStore } from 'src/stores/product';

const filter = reactive({
  category: [] as string[],
  priceRange: { min: 50, max: 100000 },
});

const store = useProductStore();

const shop = computed(() => {
  var p = store.products ?? [];
  if (filter.category.length > 0) {
    p = p ? p.filter(
      (product) =>
        filter.category.includes(product.category.slug)
    ): [];
  }

  if(filter.priceRange){
     p = p ? p.filter(
      (product) =>
        product.discount >= filter.priceRange.min && product.discount <= filter.priceRange.max
    ): [];
  }
  return p;
});

const item_per_page = 25
const total_page = computed(() => Math.ceil(shop.value.length / item_per_page))
let current = ref(1);
const offset = computed(() => (current.value - 1) * item_per_page)
const limit = computed(() => offset.value + item_per_page)

let sort_by = ref<
  'price_up' | 'price_down' | 'rating' | 'purchase' | 'location' | ''
>('');

// default fetch product

const sort_product = (sort_by: string) => {
  try {
    if (sort_by == 'price_up') {
      return shop.value?.sort((a, b) => b.discount - a.discount);
    }

    if (sort_by == 'price_down') {
      return shop.value?.sort((a, b) => a.discount - b.discount);
    }
  } catch (error) {
    console.error('Errorsorting product', error);
  }
};

watch(sort_by, (sort) => {
  sort_product(sort);
});


defineOptions({
  async preFetch({ store }) {
    let s = useProductStore(store);
    s.fetchAllProduct();
  },
});
</script>

<template>
  <q-page>
    <BreadCrumbs title="shop" :navs="['home', 'shop']" />
    <div
      class="q-mx-auto tw-p-7 tw-grid lg:tw-grid-cols-4 tw-gap-y-10 tw-gap-x-4"
    >
      <div class="lg:tw-col-span-1 tw-order-2 lg:tw-order-1">
        <div class="tw-max-w-[300px] tw-w-full tw-bg-slate-50 tw-py-5">
          <q-toolbar class="tw-text-sm">
            <q-toolbar-title class="tw-text-sm tw-font-bold"
              >Filter By</q-toolbar-title
            >
            <q-space />
          </q-toolbar>
          <q-card class="tw-w-full tw-mx-auto tw-bg-transparent" flat square>
            <q-card-section
              class="text-weight-bolder text-body1 tw-uppercase !tw-py-2"
              >Category
            </q-card-section>
            <q-card-section class="">
              <q-list class="text-weight-bold *:tw-py-0 *:!tw-pb-0">
                <q-item v-for="cat in store.categories" :key="cat.slug">
                  <q-item-section>
                    <q-checkbox
                      v-model="filter.category"
                      :label="cat.name"
                      :val="cat.slug"
                    />
                  </q-item-section>
                  <!-- <q-item-section>Grain</q-item-section> -->
                  <q-item-section side> 100+</q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
          </q-card>

          <q-card class="tw-w-full tw-mx-auto tw-bg-transparent" flat square>
            <q-card-section
              class="text-weight-bolder text-body1 tw-uppercase !tw-py-2"
              >Price</q-card-section
            >
            <q-card-section>
              <q-range
                v-model="filter.priceRange"
                :min="500"
                :max="200000"
                :inner-min="500"
                :inner-max="200000"
                :step="500"
              />
              <div>
                <div class="text-caption">
                  between: <span v-naira="filter.priceRange.min"></span> to
                  <span v-naira="filter.priceRange.max"></span>
                </div>
              </div>
            </q-card-section>

            <q-card-section>
              <q-btn
                icon="filter_list"
                label="filter"
                no-caps
                class=""
                unelevated
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="lg:tw-col-span-3 tw-order-1 lg:tw-order-2">
        <q-toolbar class="tw-bg-slate-50 tw-mb-5" style="border-style: inset">
          <q-btn icon="list" unelevated />
          <q-btn icon="grid_view" unelevated />
          <q-toolbar-title class="text-subtitle1 tw-hidden lg:tw-inline-block"
            >we found {{ shop?.length }} result</q-toolbar-title
          >
          <q-space />
          <q-btn-dropdown
            unelevated
            :label="`sort by: ${sort_by}`"
            dropdown-icon="keyboard_arrow_down"
            class="tw-border tw-bg-white tw-px-10 tw-py-2"
          >
            <q-list>
              <q-item
                clickable
                v-ripple
                v-close-popup
                @click="sort_by = 'price_up'"
              >
                <q-item-section>Price &uparrow;</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                v-close-popup
                @click="sort_by = 'price_down'"
              >
                <q-item-section>Price &downarrow;</q-item-section>
              </q-item>
              <q-item
                clickable
                v-ripple
                v-close-popup
                @click="sort_by = 'rating'"
              >
                <q-item-section>Rating</q-item-section>
              </q-item>
              <!-- <q-item clickable v-ripple v-close-popup @click="sort_by = 'location'">
                <q-item-section>Location</q-item-section>
              </q-item> -->
              <!-- <q-item clickable v-ripple v-close-popup @click="sort_by = 'purchase'">
                <q-item-section>Purchase</q-item-section>
              </q-item> -->
            </q-list>
          </q-btn-dropdown>
        </q-toolbar>

        <div>
          <div
            v-if="shop"
            class="tw-grid lg:tw-grid-cols-5 md:tw-grid-cols-4 sm:tw-grid-cols-3 tw-grid-cols-2 tw-gap-x-3 tw-gap-y-4"
            v-auto-animate
          >
            <div v-for="product in shop.slice(offset, limit)" :key="product.slug" class="">
              <SingleProduct :id="product.slug" :product="product" />
            </div>
          </div>
          <div class="tw-flex tw-justify-center tw-mt-12 mb-4">
            <q-pagination
              v-model="current"
              :max="total_page"
              :max-pages="total_page"
              color="grey-10"
              active-color="blue-10"
              class="tw-font-semibold"
              direction-links
              size="md"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
