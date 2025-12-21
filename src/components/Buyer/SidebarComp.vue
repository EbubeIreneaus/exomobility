<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script lang="ts" setup>
import { useCartStore } from 'src/stores/cart';
import { computed } from 'vue';
defineProps<{ menu: any[] }>();

const cart = computed(() => useCartStore());
</script>

<template>
  <div class="tw-my-12 tw-mx-5">
    <div class="tw-w-44">
      <q-img src="/logo-tr.png" />
    </div>

    <div class="tw-my-7">
      <div class="*:tw-inline-block tw-my-1">

        <q-btn
          icon="add_shopping_cart"
          flat
          size="lg"
          :ripple="false"
          class="!tw-text-black focus:!tw-bg-transparent"
          to="/cart"
        >
          <q-badge :label="cart.length" floating class="btn" rounded></q-badge>
        </q-btn>

        &nbsp;&nbsp;
        <div>
          items:
          <span v-naira="cart.total_price" class="text-weight-bold"></span>
        </div>
      </div>
    </div>

    <div class="tw-mb-5">
      <q-list separator>
        <q-item
          :to="link.href"
          v-for="link in menu"
          :key="link.title"
          class="tw-my-0.5 text-weight-bold"
          exact-active-class="text-grey-6"
          active-class=""
        >
          <q-item-section>{{ link.title }}</q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="tw-flex tw-gap-5 tw-px-3 tw-mb-5">
      <a href="https://www.facebook.com/share/1MTAQWaHwd/?mibextid=wwXIfr"
        ><q-icon name="fa-brands fa-facebook"
      /></a>
      <a href="https://www.tiktok.com/@exomobilitystore?_r=1&_t=ZS-92OcZqYixwT"
        ><q-icon name="fa-brands fa-tiktok"
      /></a>
      <a
        href="https://www.instagram.com/exomobility?igsh=aHRraGZiaDc2aWI1&utm_source=qr"
        ><q-icon name="fa-brands fa-instagram"
      /></a>

      <a href="https://youtube.com/@exomobilitystore"
        ><q-icon name="fa-brands fa-youtube"
      /></a>
    </div>

    <div class="tw-px-3 tw-font-medium tw-text-gray-500/ tw-mb-4">
      <div class="tw-mb-3">
        <q-icon name="mail" />&nbsp; support@exomobilitystore.com
      </div>
      <div><q-icon name="phone" />&nbsp; +852 7049 8945</div>
    </div>

    <div>Free shipping for goods above $9,999.99</div>
  </div>
</template>
