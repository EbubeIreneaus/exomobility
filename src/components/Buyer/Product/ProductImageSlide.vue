<script lang="ts" setup>
import { ProductType } from 'app/types/product';
import { computed, ref } from 'vue';

const props = defineProps<{ product: ProductType }>();


const swiperEl = ref<any>(null)

const images = computed(() => props.product.images);

const swipeNext = () => {
  swiperEl.value?.swiper.slideNext()
}

const swipePrev = () => {
  swiperEl.value?.swiper.slidePrev()
}

const slideTo = (index: number) => {
  swiperEl.value?.swiper.slideTo(index)
}
</script>

<template>
  <div class="">
    <div class=" tw-flex tw-items-center tw-justify-center">
      <q-btn color="primary" round icon="chevron_left" size="10px" @click="swipePrev()"/>

      <div class="tw-relative tw-max-w-[90%]">
        <swiper-container
        class="q-pa-md "
        :slides-per-view="1"
        gap="2"
        :space-between="20"
        :speed="500"
        :loop="true"
        ref="swiperEl"
      >

      <swiper-slide
          class=""
        >
          <video
            v-if="product.video"
            :src="product.video"
            class="tw-aspect-video tw-rounded-lg"
            controls
          />
        </swiper-slide>

        <swiper-slide
          v-for="(img, index) in images"
          :key="index"
          class=""
        >
          <img
            :src="img.image"
            class="tw-aspect-square tw-max-h-[300px] tw-mx-auto tw-rounded-lg"
          />
        </swiper-slide>
      </swiper-container>
      </div>

       <q-btn color="primary" round icon="chevron_right" size="10px" @click="swipeNext()" />
    </div>
    <div class="tw-mx-auto">
      <swiper-container
      class="tw-px-5"
      :slides-per-view="6"
      gap="1"
      :space-between="6"
      :autoplay="true"
      :speed="500"
    >
    <swiper-slide
        v-if="product.video"
        class=""
      >
        <video
          :src="product.video"
          class="t-w-[80px] tw-rounded-lg"
          @click="slideTo(0)"
        />
      </swiper-slide>
      <swiper-slide
        v-for="(img, index) in images"
        :key="index"
        class=""
      >
        <img
          :src="img.image"
          class="tw-max-h-[70px] tw-aspect-square tw-mx-auto tw-rounded-lg"
          @click="slideTo(index+1)"
        />
      </swiper-slide>
    </swiper-container>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
