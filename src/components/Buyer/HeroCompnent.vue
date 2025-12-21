<script lang="ts" setup>
  import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from 'src/stores/product';
  const router = useRouter()
  const store = useProductStore()

  const search = ref('')

  function searchFun(){
    if (search.value == '') return
    router.push(encodeURI(`/search?q=${search.value}`))
  }
</script>

<template>
  <section
    class="container tw-mx-auto tw-mb-5 tw-px-5 tw-pt-4 lg:tw-px-0 lg:tw-pt-0"
  >
    <div class="tw-grid lg:tw-grid-cols-12 tw-gap-5 tw-items-center">
      <div class="lg:tw-col-span-3">
        <q-btn-dropdown
          icon="menu"
          label="all categories"
          class="tw-w-full tw-py-3 text-weight-bold text-white btn"
          unelevated
          square
          stretch
          dropdown-icon="keyboard_arrow_down"
        >
      <q-list>
        <q-item :to="`/cat/${cat.slug}`" v-for="cat in store.categories" :key="cat.slug">
          <q-item-section>
            {{ cat.name }}
          </q-item-section>
        </q-item>
      </q-list>
      </q-btn-dropdown>
      </div>

      <div class="lg:tw-col-span-6 tw-flex tw-items-center">
        <input
          type="search"
          placeholder="what do you want?"
          class="tw-flex-grow tw-border tw-py-3 tw-px-2"
          v-model="search"
        />
        <q-btn
          label="search"
          unelevated
          square
          class="btn tw-py-3 text-white"
          :disable="search == ''"
          @click="searchFun"
        />
      </div>

      <div
        class="tw-py-2 lg:tw-col-span-3 tw-flex tw-justify-normal md:tw-justify-end lg:tw-justify-normal tw-gap-4"
      >
        <div class="tw-w-fit tw-py-3 tw-px-4 tw-rounded-full tw-bg-slate-50">
          <q-icon name="fa-brands fa-whatsapp" size="30px" color="green-10" />
        </div>
        <a href="https://wa.me/message/BO4BCSL3PTI6B1" class="tw-block hover:tw-text-blue-900">
          <h5 class="text-weight-bold">+852 7049 8945</h5>
          <div class="">24/7 whatsapp support</div>
        </a>
      </div>
    </div>
  </section>
</template>
