<script lang="ts" setup>
  const categories = [
    {title: "Rehabilitation Device", href: '#'},
    {title: "ExoSkeleton", href: '#'},    
    {title: "Electric Wheelchair", href: '#'},
  ]
</script>

<template>
  <!-- Categories Section Begin -->
  <div class="container tw-mx-auto">
    <swiper-container
      class="categories q-my-xl"
      :slides-per-view="$q.screen.gt.sm ? 3 : 2"
      speed="500"
      :loop="true"
      space-between="30"
      :autoplay="true"
      pagination
    >
      <swiper-slide class="!tw-shadow !tw-rounded-xl" v-for="category in categories" :key="category.title">
        <div
          class="categories__item set-bg"
          style="background-image: url('img/categories/cat-1.jpg')"
        >
          <h5><a href="#">{{ category.title }}</a></h5>
        </div>
      </swiper-slide>
    </swiper-container>
  </div>
  <!-- Categories Section End -->
</template>
