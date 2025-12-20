<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import BreadCrumbs from 'src/components/Buyer/BreadCrumbs.vue';
import { useCartStore } from 'src/stores/cart';
import { vAutoAnimate } from '@formkit/auto-animate';
import { ref } from 'vue';

const { Carts: items } = storeToRefs(useCartStore());
const { remove } = useCartStore();

const quantityEditor = ref<HTMLDivElement | null>(null);

const couponCode = ref('');

</script>

<template>
  <q-page>
    <BreadCrumbs title="Cart" :navs="['Home', 'Shop', 'Cart Section']" />
    <div class="tw-my-10 tw-mx-auto q-px-md">
      <div>
        <div class="!tw-overflow-x-auto">
          <table class="tw-w-[1000px] lg:tw-w-full" v-auto-animate>
            <tr class="tw-text-left tw-font-semibold tw-text-xl tw-mb-5">
              <th class="tw-px-6">Image</th>
              <th class="tw-px-6">Product</th>
              <th class="tw-px-6">Unit Price</th>
              <th class="tw-px-6">Quantity</th>
              <th class="tw-px-6">Total</th>
              <th class="tw-px-6">Action</th>
            </tr>
            <br />
            <tr v-for="ct in items" :key="ct.product.slug" class="tw-border">
              <td class="tw-py-7 tw-font-semibold tw-px-3 !tw-w-48">
                <q-img
                  :src="ct.product.images[0].image"
                  class="tw-w-24 tw-rounded-lg"
                />
              </td>
              <td class="tw-py-7 tw-font-semibold tw-px-3">
                <span class="tw-text-xl tw-font-medium tw-capitalize">{{
                  ct.product.name
                }}</span>
              </td>
              <td>
                <span
                  v-naira="ct.product.discount"
                  class="tw-text-lg tw-font-semibold"
                ></span>
              </td>
              <td>
                <div class="tw-flex tw-border tw-w-fit">
                  <q-btn
                    icon="add"
                    unelevated
                    color="green-5"
                    @click="ct.no_of_item++"
                    size="10px"
                  />
                  <input v-model="ct.no_of_item" class="tw-w-10 tw-h-10 tw-ps-3" />
                  <q-btn
                    icon="remove"
                    unelevated
                    color="red-5"
                    @click="ct.no_of_item--"
                    :disable="ct.no_of_item <= 1"
                    size="10px"
                  />
                </div>
              </td>
              <td>
                <span
                  v-naira="ct.product.discount * ct.no_of_item"
                  class="tw-text-lg tw-font-semibold"
                ></span>
              </td>
              <td>
                <q-btn icon="cancel" unelevated @click="remove(ct.product)"
                  ><q-tooltip
                    >remove {{ ct.product.name }} from cart</q-tooltip
                  ></q-btn
                >
              </td>
            </tr>
          </table>
        </div>
      </div>

      <div class="tw-my-10 lg:tw-flex tw-justify-between">
        <div class="tw-w-full"></div>
        <div class="tw-w-full tw-mt-10">
          <q-card
            class="tw-max-w-lg tw-w-full tw-bg-slate-100 tw-py-7"
            flat
            square
          >
            <q-card-section>
              <q-list>
                <div class="tw-text-xl tw-font-extrabold">Cart Total</div>
                <q-item class="tw-font-semibold text-body1">
                  <q-item-section>Amount</q-item-section>
                  <q-item-section side
                    ><span v-naira="useCartStore().total_price"></span
                  ></q-item-section>
                </q-item>
                <q-item class="tw-font-bold text-h6">
                  <q-item-section>Total (+VAT)</q-item-section>
                  <q-item-section side
                    ><span
                      v-naira="useCartStore().total_price"
                    ></span
                  ></q-item-section>
                </q-item>
              </q-list>
            </q-card-section>
            <q-card-section>
              <div class="tw-flex tw-justify-end">
                <q-btn
                  label="checkout"
                  to="/checkout"
                  square
                  color="primary"
                  class="tw-px-14 tw-p-2 tw-text-white"
                />
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>
