<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import SingleProduct from 'src/components/Buyer/Product/SingleProduct.vue';
// import MiniSingleProduct from 'src/components/Buyer/Product/MiniSingleProduct.vue';
import { computed, ref } from 'vue';
import { useProductStore } from 'src/stores/product';
import FAQs from 'src/components/Buyer/FAQs.vue';

defineOptions({
  async preFetch({ store }) {
    let s = useProductStore(store)
    s.fetchAllProduct()
  },
});

const store = useProductStore()

const featured = computed(()=> store.products?.filter(p => p.feature).slice(0, 50))

// const latest_slide_ref: any = ref(null);

// const top_slide_ref: any = ref(null);

// const review_slide_ref: any = ref(null);


// function latest_slide_next() {
//   latest_slide_ref.value.swiper.slideNext();
// }
// function latest_slide_prev() {
//   latest_slide_ref.value.swiper.slidePrev();
// }

// function top_slide_next() {
//   top_slide_ref.value.swiper.slideNext();
// }
// function top_slide_prev() {
//   top_slide_ref.value.swiper.slidePrev();
// }

// function review_slide_next() {
//   review_slide_ref.value.swiper.slideNext();
// }
// function review_slide_prev() {
//   review_slide_ref.value.swiper.slidePrev();
// }


</script>

<template>
  <q-page class="tw-p-4 lg:tw-p-0">
    <div class="tw-bg-[#08329C] tw-p-5">
      <div
        class="md:tw-grid md:tw-grid-cols-4 tw-gap-x-5 tw-container tw-mx-auto"
      >
        <div
          class="tw-bg-white tw-rounded-lg tw-p-5 tw-hidden md:tw-block tw-max-w-xs"
        >
          <div class="tw-text-xl tw-font-semibold tw-mb-5">Categories</div>
          <q-list class="*:md:tw-text-lg">
            <q-item
              clickable
              :to="`/cat/${cat.slug}`"
              class="hover:tw-text-blue-300"
              v-for="cat in store.categories"
              :key="cat.slug"
            >
              <q-item-section>{{ cat.name }}</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="md:tw-col-span-2 tw-w-full">
          <swiper-container
            :loop="true"
            :autoplay="true"
            slides-per-view="1"
            :speed="1000"
            :space-between="20"
          >
            <swiper-slide>
              <img
                src="/img/banner/banner-1.jpeg"
                class="tw-max-w-full tw-max-h-[350px] tw-aspect-video tw-mx-auto tw-rounded-lg"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="/img/banner/banner-2.jpg"
                class="tw-max-w-full tw-max-h-[350px] tw-aspect-video tw-mx-auto tw-rounded-lg"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="/img/banner/banner-3.webp"
                class="tw-max-w-full tw-max-h-[350px] tw-aspect-video tw-mx-auto tw-rounded-lg"
              />
            </swiper-slide>
            <swiper-slide>
              <img
                src="/img/banner/banner-4.webp"
                class="tw-max-w-full tw-max-h-[350px] tw-aspect-video tw-mx-auto tw-rounded-lg"
              />
            </swiper-slide>
          </swiper-container>
        </div>
        <div></div>
      </div>
    </div>

    <!-- Featured Section Begin -->
    <section class="featured spad">
      <div class="container tw-mx-auto">
        <div class="tw-flex tw-justify-center">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Featured Product</h2>
            </div>
          </div>
        </div>
        <div
          class="tw-grid lg:tw-grid-cols-5 md:tw-grid-cols-4 sm:tw-grid-cols-3 tw-grid-cols-2 tw-gap-2 md:tw-gap-4 tw-p- lg:tw-p-0"
        >
          <single-product
            :product="product"
            v-for="product in featured"
            :key="product.id"
          />
        </div>
      </div>
    </section>
    <!-- Featured Section End -->

    <f-a-qs />

    <!-- <section class="tw-mt-20">
      <div class="container tw-mx-auto">
        <div class="tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-2">
          <div class="">
            <div class="latest-product__text">
              <div class="tw-flex tw-justify-between q-px-md">
                <h4>Latest Products</h4>
                <div>
                  <q-btn
                    icon="arrow_back_ios"
                    dense
                    unelevated
                    size="sm"
                    @click="latest_slide_prev"
                  ></q-btn>
                  &nbsp;
                  <q-btn
                    icon="arrow_forward_ios"
                    dense
                    unelevated
                    size="sm"
                    @click="latest_slide_next"
                  ></q-btn>
                </div>
              </div>
              <swiper-container
                :loop="true"
                :autoplay="true"
                slides-per-view="1"
                :speed="1000"
                class=""
                ref="latest_slide_ref"
              >
                <swiper-slide class="">
                  <mini-single-product
                    v-for="product in featured?.slice(0, 4)"
                    :key="product.id"
                    :product="product"
                  />
                </swiper-slide>
                <swiper-slide class="">
                  <mini-single-product
                    v-for="product in featured?.slice(4, 8)"
                    :key="product.id"
                    :product="product"
                  />
                </swiper-slide>
              </swiper-container>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="latest-product__text">
              <div class="latest-product__text">
                <div class="row justify-between q-px-md">
                  <h4>Top Rated</h4>
                  <div>
                    <q-btn
                      icon="arrow_back_ios"
                      dense
                      unelevated
                      size="sm"
                      @click="top_slide_prev"
                    ></q-btn>
                    &nbsp;
                    <q-btn
                      icon="arrow_forward_ios"
                      dense
                      unelevated
                      size="sm"
                      @click="top_slide_next"
                    ></q-btn>
                  </div>
                </div>
                <swiper-container
                  :loop="true"
                  :autoplay="true"
                  slides-per-view="1"
                  :speed="1000"
                  class="latest-product__slider"
                  ref="top_slide_ref"
                >
                  <swiper-slide class="">
                    <mini-single-product
                      v-for="product in featured?.slice(0, 4)"
                      :key="product.id"
                      :product="product"
                    />
                  </swiper-slide>
                  <swiper-slide class="">
                    <mini-single-product
                      v-for="product in featured?.slice(4, 8)"
                      :key="product.id"
                      :product="product"
                    />
                  </swiper-slide>
                </swiper-container>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="latest-product__text">
              <div class="latest-product__text">
                <div class="row justify-between q-px-md">
                  <h4>Review Products</h4>
                  <div>
                    <q-btn
                      icon="arrow_back_ios"
                      unelevated
                      size="sm"
                      dense
                      @click="review_slide_prev"
                    ></q-btn>
                    &nbsp;
                    <q-btn
                      icon="arrow_forward_ios"
                      unelevated
                      size="sm"
                      dense
                      @click="review_slide_next"
                    ></q-btn>
                  </div>
                </div>
                <swiper-container
                  :loop="true"
                  :autoplay="true"
                  slides-per-view="1"
                  :speed="1000"
                  class="latest-product__slider"
                  ref="review_slide_ref"
                >
                  <swiper-slide class="">
                    <mini-single-product
                      v-for="product in featured?.slice(0, 4)"
                      :key="product.id"
                      :product="product"
                    />
                  </swiper-slide>
                  <swiper-slide class="">
                    <mini-single-product
                      v-for="product in featured?.slice(4, 8)"
                      :key="product.id"
                      :product="product"
                    />
                  </swiper-slide>
                </swiper-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->
  </q-page>
</template>

<style scoped>
.hero__item {
  background-image: url('/img/hero/banner.jpg');
  background-position: center;
  background-size: cover;
}
</style>
