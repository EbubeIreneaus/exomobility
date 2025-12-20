import { defineStore } from 'pinia';
import { ref } from 'vue';
import type {ProductType} from 'types/product'

export const useProductStore = defineStore('products', () => {
  const products = ref<null | ProductType[]>(null);
  const categories = ref<null | {name: string, slug: string}[]>(null)
  const faqs = ref<{id:number, question: string, answer: string}[] | null>(null)
  const isLoaded = ref(false)

  async function fetchAllProduct(){
    if(isLoaded.value) return
      const [_products, _categories, _faqs] = await Promise.all([
      fetch(`${process.env.API}products/all`).then(res => res.json()),
      fetch(`${process.env.API}products/categories`).then(res => res.json()),
      fetch(`${process.env.API}faqs/`).then(res => res.json()),

    ]);

    products.value = _products
    categories.value = _categories
    faqs.value = _faqs
    isLoaded.value = true
  }

  return {
    products,
    categories,
    fetchAllProduct,
    faqs
  };
});
