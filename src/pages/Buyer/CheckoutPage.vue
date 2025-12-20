<script setup>
import { reactive, ref } from 'vue';
import { useCartStore } from 'src/stores/cart';

const store = useCartStore();
const items = store.Carts.map((ct) => ({
  quantities: ct.no_of_item,
  name: ct.product.name,
  discount: ct.product.discount,
  productId: ct.product.id,
}));

const open = ref(false);
const shippingForm = ref(null)

function showSuccessDialog() {
  open.value = true;
}

const errorMessage = ref(false);
const isLoading = ref(false);

const form = reactive({
  name: '',
  email: '',
  country: '',
  city: '',
  address: '',
});

function submit() {
  isLoading.value = true;
  fetch(`${process.env.API}order/`, {
    method: 'POST',
    body: JSON.stringify({
      ...form,
      items,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        showSuccessDialog()
        store.Carts = []
        shippingForm.value.reset()
      } else {
        errorMessage.value = data.error;
      }
    })
    .catch(() => {
      errorMessage.value = 'Oops! There was a problem processing your request.';
    })
    .finally(() => (isLoading.value = false));
}
</script>

<template>
  <q-page>
    <q-card flat square class="tw-w-full tw-max-w-2xl tw-mx-auto tw-p-6">
      <!-- Header -->
      <div class="tw-flex tw-items-center tw-justify-between tw-my-6">
        <h2 class="tw-text-2xl tw-font-semibold tw-text-blue-600">
          Shipping Information
        </h2>
      </div>
      <!-- Form -->
      <q-form @submit.prevent="submit" ref="shippingForm">
        <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4">
          <!-- Name -->
          <div>
            <label class="tw-text-sm tw-font-medium tw-text-gray-700">
              Full Name
            </label>
            <q-input
              v-model="form.name"
              outlined
              dense
              placeholder="John Doe"
              class="tw-mt-1"
              required
            />
          </div>

          <!-- Email -->
          <div>
            <label class="tw-text-sm tw-font-medium tw-text-gray-700">
              Email
            </label>
            <q-input
              v-model="form.email"
              type="email"
              outlined
              dense
              placeholder="john@example.com"
              class="tw-mt-1"
              required
            />
          </div>

          <!-- Country -->
          <div>
            <label class="tw-text-sm tw-font-medium tw-text-gray-700">
              Country
            </label>
            <q-input
              v-model="form.country"
              outlined
              dense
              placeholder="United States"
              class="tw-mt-1"
              required
            />
          </div>

          <!-- City -->
          <div>
            <label class="tw-text-sm tw-font-medium tw-text-gray-700">
              City
            </label>
            <q-input
              v-model="form.city"
              outlined
              dense
              placeholder="New York"
              class="tw-mt-1"
              required
            />
          </div>
        </div>

        <!-- Address -->
        <div class="tw-mt-4">
          <label class="tw-text-sm tw-font-medium tw-text-gray-700">
            Address
          </label>
          <q-input
            v-model="form.address"
            type="textarea"
            outlined
            dense
            placeholder="Street, building, apartment..."
            class="tw-mt-1"
            required
          />
        </div>

        <p class="tw-text-center tw-text-red-500 tw-text-sm tw-py-5" v-if="errorMessage">{{ errorMessage }}</p>
        <!-- Actions -->
        <div class="tw-flex tw-justify-end tw-gap-3 tw-mt-6">
          <q-btn
            type="submit"
            label="Submit"
            color="primary"
            class="tw-bg-blue-600 tw-text-white tw-rounded-lg tw-px-6"
            unelevated
            square
            :loading="isLoading"
          />
        </div>
      </q-form>
    </q-card>

    <q-dialog v-model="open" persistent>
      <q-card class="tw-w-full tw-max-w-md tw-rounded-2xl tw-p-8 tw-text-center">
        <!-- Success Icon -->
        <div
          class="tw-mx-auto tw-flex tw-items-center tw-justify-center tw-w-20 tw-h-20 tw-rounded-full tw-bg-blue-100 tw-mb-6"
        >
          <q-icon name="check_circle" size="48px" class="tw-text-blue-600" />
        </div>

        <!-- Heading -->
        <h2 class="tw-text-2xl tw-font-semibold tw-text-gray-800 tw-mb-3">
          Order Placed Successfully
        </h2>

        <!-- Description -->
        <p class="tw-text-gray-600 tw-text-sm tw-leading-relaxed tw-mb-6">
          Your order has been placed successfully and a confirmation email has
          been sent to you. If you do not see it in your inbox, kindly check
          your spam or junk folder.
        </p>

        <!-- Action -->
        <q-btn
          label="Continue Shopping"
          color="primary"
          class="tw-bg-blue-600 tw-text-white tw-px-8"
          @click="open = false"
          unelevated
          to="/"
          :square="true"
        />
      </q-card>
    </q-dialog>
  </q-page>
</template>
