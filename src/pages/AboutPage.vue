<script lang="ts" setup>
import BreadCrumbs from 'src/components/Buyer/BreadCrumbs.vue';
</script>

<template>
  <q-page>
    <BreadCrumbs title="About Us" :navs="['Home', 'About Us']" />

<section class="tw-py-16 tw-bg-white">
  <div class="tw-max-w-6xl tw-mx-auto tw-px-6">
    <h2 class="tw-text-3xl tw-font-bold tw-text-blue-600 tw-mb-6">
      Who We Are
    </h2>
    <p class="tw-text-gray-700 tw-mb-4">
      We are a global mobility solutions provider dedicated to improving independence, dignity,
      and quality of life through advanced assistive technology. Our work focuses on creating
      and delivering innovative products that help people move, stand, walk, and live more
      confidently in everyday environments.
    </p>
    <p class="tw-text-gray-700">
      Our solutions are designed for use at home, outdoors, and in clinical or care settings,
      combining medical-grade performance with real-world comfort and usability.
    </p>
  </div>
</section>

<section class="tw-py-12 tw-bg-blue-50">
  <div class="tw-max-w-6xl tw-mx-auto tw-px-6">
    <div class="tw-border-l-4 tw-border-blue-600 tw-pl-6">
      <p class="tw-text-lg tw-text-gray-800">
        <span class="tw-font-semibold tw-text-blue-600">Our Mission:</span>
        To make modern mobility accessible, practical, and truly life-changing for people everywhere.
      </p>
    </div>
  </div>
</section>

<section class="tw-py-16 tw-bg-white">
  <div class="tw-max-w-6xl tw-mx-auto tw-px-6">
    <h2 class="tw-text-3xl tw-font-bold tw-text-blue-600 tw-mb-6">
      Our Product Portfolio
    </h2>
    <p class="tw-text-gray-700 tw-mb-10">
      Our catalog includes a comprehensive range of mobility and rehabilitation solutions,
      carefully selected to meet high standards of safety, durability, performance, and comfort.
    </p>

    <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-8">
      <div class="tw-border tw-rounded-lg tw-p-6">
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-2">Electric Wheelchairs</h3>
        <p class="tw-text-gray-600">
          Powered mobility solutions designed for daily independence, comfort, and ease of control.
        </p>
      </div>

      <div class="tw-border tw-rounded-lg tw-p-6">
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-2">Standing Wheelchairs</h3>
        <p class="tw-text-gray-600">
          Advanced wheelchairs that allow users to safely transition into a standing position.
        </p>
      </div>

      <div class="tw-border tw-rounded-lg tw-p-6">
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-2">Stair-Climbing Wheelchairs</h3>
        <p class="tw-text-gray-600">
          Innovative systems that enable safe navigation of stairs and uneven surfaces.
        </p>
      </div>

      <div class="tw-border tw-rounded-lg tw-p-6">
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-2">Mobility Scooters</h3>
        <p class="tw-text-gray-600">
          Reliable outdoor mobility solutions offering extended range and stability.
        </p>
      </div>

      <div class="tw-border tw-rounded-lg tw-p-6">
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-2">Exoskeletons</h3>
        <p class="tw-text-gray-600">
          Wearable robotic systems supporting rehabilitation, assisted movement, and mobility training.
        </p>
      </div>

      <div class="tw-border tw-rounded-lg tw-p-6">
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-2">Rehabilitation Devices</h3>
        <p class="tw-text-gray-600">
          Technology designed to support recovery, therapy, and long-term mobility improvement.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="tw-py-16 tw-bg-gray-50">
  <div class="tw-max-w-6xl tw-mx-auto tw-px-6">
    <h2 class="tw-text-3xl tw-font-bold tw-text-blue-600 tw-mb-6">
      Trusted Partnerships & Global Reach
    </h2>
    <p class="tw-text-gray-700 tw-mb-4">
      We work directly with trusted manufacturers and leading mobility technology brands to ensure
      every product meets strict quality and safety standards.
    </p>
    <p class="tw-text-gray-700">
      Whether you are purchasing a single unit for personal use or placing bulk orders for clinics,
      distributors, hospitals, or care facilities, we provide reliable sourcing and worldwide delivery.
    </p>
  </div>
</section>

<section class="tw-py-16 tw-bg-white">
  <div class="tw-max-w-6xl tw-mx-auto tw-px-6">
    <h2 class="tw-text-3xl tw-font-bold tw-text-blue-600 tw-mb-8">
      Our Core Values
    </h2>

    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
      <div>
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-2">Accessibility</h3>
        <p class="tw-text-gray-600">
          Making advanced mobility solutions available to people around the world.
        </p>
      </div>

      <div>
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-2">Quality & Safety</h3>
        <p class="tw-text-gray-600">
          Delivering products that meet high standards of durability, comfort, and performance.
        </p>
      </div>

      <div>
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-2">Customer Support</h3>
        <p class="tw-text-gray-600">
          Providing expert guidance and international shipping support at every step.
        </p>
      </div>
    </div>
  </div>
</section>

<section class="tw-py-20 tw-bg-blue-600 tw-text-white tw-text-center">
  <div class="tw-max-w-4xl tw-mx-auto tw-px-6">
    <h2 class="tw-text-3xl tw-font-bold tw-mb-4">
      Mobility Without Limits
    </h2>
    <p class="tw-text-lg tw-opacity-90">
      From product guidance to global delivery, our team is committed to helping you choose the
      right solution—so mobility never limits your potential.
    </p>
  </div>
</section>

<!-- Certifications & Airline Friendly -->
<section class="tw-py-16 tw-bg-gray-50">
  <div class="tw-max-w-6xl tw-mx-auto tw-px-6">
    
    <h2 class="tw-text-3xl tw-font-bold tw-text-blue-600 tw-mb-6">
      Airline-Friendly & Certified Quality
    </h2>

    <p class="tw-text-gray-700 tw-mb-10 tw-max-w-3xl">
      Almost all our mobility solutions are designed to be airline-friendly and comply with
      international transportation standards. Our products are backed by globally recognized
      certifications, ensuring safety, reliability, and peace of mind wherever you travel.
    </p>

    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8 tw-items-center tw-bg-blue-50 tw-p-4">
      
      <!-- Image 1 -->
      <div class="tw-rounded-lg tw-flex tw-items-center tw-justify-center ">
        <img 
          src="/img/cert/3.webp" 
          alt="Airline Friendly Mobility Products"
          class="tw-object-contain tw-aspect-square"
        >
      </div>

      <!-- Image 2 -->
      <div class="tw-rounded-lg tw-flex tw-items-center tw-justify-center">
        <img 
          src="/img/cert/2.webp" 
          alt="CE FCC MSDS ISO Certified"
          class="tw-object-contain tw-aspect-square"
        >
      </div>

      <!-- Image 3 -->
      <div class="tw-rounded-lg ttw-flex tw-items-center tw-justify-center">
        <img 
          src="/img/cert/1.jpg" 
          alt="International Safety and Compliance"
          class="tw-object-contain tw-aspect-square"
        >
      </div>

    </div>

    <div class="tw-mt-10 tw-text-gray-600 tw-text-sm">
      Certifications may include CE, FCC, MSDS, ISO, and other region-specific approvals depending
      on product model and destination requirements.
    </div>

  </div>
</section>

<!-- Warranty & After-Sales Support -->
<section class="tw-py-16 tw-bg-white">
  <div class="tw-max-w-6xl tw-mx-auto tw-px-6">

    <h2 class="tw-text-3xl tw-font-bold tw-text-blue-600 tw-mb-6">
      Warranty & Ongoing Support
    </h2>

    <p class="tw-text-gray-700 tw-mb-10 tw-max-w-3xl">
      Most of our products come with a 1 to 5 year warranty, reflecting our confidence in their
      quality, durability, and long-term performance. Our commitment doesn’t end at delivery—we
      continue to support you throughout the product’s lifecycle.
    </p>

    <div class="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">

      <!-- Warranty -->
      <div class="tw-border tw-rounded-lg tw-p-6">
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-3">
          1–5 Years Warranty
        </h3>
        <p class="tw-text-gray-600">
          Extended warranty coverage is available on most products, depending on the model and
          components, ensuring long-term reliability and peace of mind.
        </p>
      </div>

      <!-- Remote Support -->
      <div class="tw-border tw-rounded-lg tw-p-6">
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-3">
          Remote Technical Support
        </h3>
        <p class="tw-text-gray-600">
          Our technical team provides remote assistance, video guidance, and troubleshooting
          support to help diagnose and resolve issues quickly and efficiently.
        </p>
      </div>

      <!-- Replacement Parts -->
      <div class="tw-border tw-rounded-lg tw-p-6">
        <h3 class="tw-text-xl tw-font-semibold tw-text-blue-600 tw-mb-3">
          Easy Part Replacement
        </h3>
        <p class="tw-text-gray-600">
          Replacement parts can be shipped directly to you. Most issues can be resolved locally
          by replacing a component, with our team guiding you step-by-step through the process.
        </p>
      </div>

    </div>

    <div class="tw-mt-10 tw-text-sm tw-text-gray-500 tw-max-w-4xl">
      Warranty terms and coverage may vary by product model and region. Remote support availability
      and replacement timelines depend on location and logistics.
    </div>

  </div>
</section>

  </q-page>
</template>
