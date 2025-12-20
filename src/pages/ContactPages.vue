<script lang="ts" setup>
import BreadCrumbs from 'src/components/Buyer/BreadCrumbs.vue';
import { ref, reactive } from 'vue';

const contactForm = ref(null)
const errorMsg = ref<string | null>(null)
  const isLoading = ref(false)

const form = reactive({
  fullname: '',
  email: '',
  message: ''
})

async function submitForm(){
    isLoading.value = true
    errorMsg.value =  null
    fetch('https://formspree.io/f/mojaeypk', {
      method: 'POST',
      body: JSON.stringify(form),
        headers: {
          'Accept': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        alert("We have recieved your message, we will get back to you as soon as we can.")
      }else{
        res.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            errorMsg.value = data["errors"].map((error : any) => error["message"]).join(", ")
          } else {
            errorMsg.value= "Oops! There was a problem submitting your form"
          }
        })
      }
    }).catch(error => {
      errorMsg.value = "Oops! There was a problem submitting your form"
    }).finally(()=> isLoading.value=false)
}
</script>

<template>
  <q-page>
    <BreadCrumbs title="Contact Us" :navs="['Home', 'Contact Us']" />
    <div>
    <section class="" id="contact">
  <div
    class="tw-mx-auto tw-max-w-7xl tw-px-4 tw-py-16 sm:tw-px-6 lg:tw-px-8 lg:tw-py-20"
  >
    <div class="tw-mb-4">
      <div
        class="tw-mb-6 tw-max-w-3xl tw-text-center sm:tw-text-center md:tw-mx-auto md:tw-mb-12"
      >
        <p
          class="tw-text-base tw-font-semibold tw-uppercase tw-tracking-wide tw-text-blue-600"
        >
          Contact
        </p>
        <h2
          class="tw-font-heading tw-mb-4 tw-font-bold tw-tracking-tight tw-text-gray-900 dark:tw-text-white tw-text-3xl sm:tw-text-5xl"
        >
          Get in Touch
        </h2>
        <p
          class="tw-mx-auto tw-mt-4 tw-max-w-3xl tw-text-xl tw-text-gray-600 dark:tw-text-slate-400"
        >
          Have a question about our products, wholesale pricing, or partnership opportunities? We are always happy to hear from you.
        </p>
      </div>
    </div>

    <div class="tw-flex tw-items-stretch tw-justify-center">
      <div class="tw-grid md:tw-grid-cols-2">
        <div class="tw-h-full tw-pr-6">
         

          <ul class="tw-mb-6 md:tw-mb-0">
            <li class="tw-flex">
              <div
                class="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded tw-bg-blue-900 tw-text-gray-50"
              >
                <!-- icon -->
              </div>
              <div class="tw-ml-4 tw-mb-4">
                <h3 class="tw-mb-2 tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900">
                  Our Address
                </h3>
                <p class="tw-text-gray-600 dark:tw-text-slate-400">
                 Unit 6A, Young Ya Industrial Building, 381-389 Sha Tsui Road, Tsuen Wan, New Territories
                </p>
                <p class="tw-text-gray-600 dark:tw-text-slate-400">
                 Hong Kong.
                </p>
              </div>
            </li>

            <li class="tw-flex">
              <div
                class="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded tw-bg-blue-900"
              >
                <!-- icon -->
              </div>
              <div class="tw-ml-4 tw-mb-4">
                <h3 class="tw-mb-2 tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900">
                  Contact
                </h3>
                <p class="tw-text-gray-600 dark:tw-text-slate-400">
                  Mobile: +852 7049 8945
                </p>
                <p class="tw-text-gray-600 dark:tw-text-slate-400">
                  Email: support@exomobilitystore.com
                </p>
              </div>
            </li>

            <li class="tw-flex">
              <div
                class="tw-flex tw-h-10 tw-w-10 tw-items-center tw-justify-center tw-rounded tw-bg-blue-900"
              >
                <!-- icon -->
              </div>
              <div class="tw-ml-4 tw-mb-4">
                <h3 class="tw-mb-2 tw-text-lg tw-font-medium tw-leading-6 tw-text-gray-900">
                  Working Hours
                </h3>
                <p class="tw-text-gray-600 dark:tw-text-slate-400">
                  Monday - sunday: 08:00 - 20:00
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div
          class="tw-card tw-h-fit tw-max-w-6xl tw-p-5 md:tw-p-12"
          id="form"
        >
          <h2 class="tw-mb-4 tw-text-2xl tw-font-bold">
            Send Us a Message
          </h2>

          <form id="contactForm" ref="contactForm" @submit.prevent="submitForm()">
            <div class="tw-mb-6">
              <div class="tw-mx-0 tw-mb-1 sm:tw-mb-4">
                <label for="name"></label>
                <input
                  type="text"
                  id="name"
                  placeholder="Fullname"
                  class="tw-mb-2 tw-w-full tw-rounded-md tw-border tw-border-gray-400 tw-py-2 tw-pl-2 tw-pr-4 tw-shadow-md dark:tw-text-gray-300"
                  name="name"
                  v-model="form.fullname"
                />
              </div>

              <div class="tw-mx-0 tw-mb-1 sm:tw-mb-4">
                <label for="email"></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  class="tw-mb-2 tw-w-full tw-rounded-md tw-border tw-border-gray-400 tw-py-2 tw-pl-2 tw-pr-4 tw-shadow-md dark:tw-text-gray-300"
                  name="email"
                  v-model="form.email"
                />
              </div>

              <div class="tw-mx-0 tw-mb-1 sm:tw-mb-4">
                <label for="textarea"></label>
                <textarea
                  id="textarea"
                  name="textarea"
                  cols="30"
                  rows="5"
                  placeholder="Write your message..."
                  v-model="form.message"
                  class="tw-mb-2 tw-w-full tw-rounded-md tw-border tw-border-gray-400 tw-py-2 tw-pl-2 tw-pr-4 tw-shadow-md dark:tw-text-gray-300"
                ></textarea>
              </div>
            </div>  

            <p class="tw-text-center tw-text-red-500 tw-text-sm tw-my-5" v-if="errorMsg" > {{errorMsg}}</p>

            <div class="tw-text-center">
              <button
                type="submit"
                class="tw-w-full tw-bg-blue-800 tw-text-white tw-px-6 tw-py-3 tw-font-xl tw-rounded-md"
                :disabled="isLoading"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


      <section class="mb-7">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.76133999697!2d114.13070637395633!3d22.28702864337893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403ff835dc43d63%3A0xca1f8f233d2eb783!2sHong%20Kong%20Industrial%20Building!5e0!3m2!1sen!2sng!4v1766089598705!5m2!1sen!2sng"  height="500" style="border:0; width: 100%;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </div>
  </q-page>
</template>
