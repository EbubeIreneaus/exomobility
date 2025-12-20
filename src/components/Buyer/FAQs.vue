<script setup lang="ts">
    import { useProductStore } from 'src/stores/product';
    const store = useProductStore()
</script>

<template>
    <div
  class="tw-relative tw-w-full tw-px-6 tw-pt-10 tw-pb-8 tw-mt-8 sm:tw-mx-auto sm:tw-max-w-2xl md:tw-max-w-4xl sm:tw-rounded-lg sm:tw-px-10"
>
  <div class="tw-mx-auto tw-px-5">
    <div class="tw-flex tw-flex-col tw-items-center">
      <h2 class="tw-mt-5 tw-text-center tw-text-3xl tw-font-bold tw-tracking-tight md:tw-text-5xl">
        FAQ
      </h2>
      <p class="tw-mt-3 tw-text-lg tw-text-neutral-500 md:tw-text-xl">
        Frequenty asked questions
      </p>
    </div>

    <div class="tw-mx-auto tw-mt-8 tw-grid tw-max-w-4xl tw-divide-y tw-divide-blue-200">
      <div class="tw-py-5" v-for="faq in store.faqs" :key="faq.id">
        <details class="tw-group">
          <summary class="tw-flex tw-cursor-pointer tw-list-none tw-items-center tw-justify-between tw-font-medium">
            <span>{{ faq.question }}</span>
            <span class="tw-transition tw-group-open:tw-rotate-180">
              <svg
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="blue"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </summary>
          <p class="tw-mt-3 tw-text-neutral-600 tw-group-open:tw-animate-fadeIn">
            {{faq.answer}}
          </p>
        </details>
      </div>
    </div>
  </div>
</div>

</template>