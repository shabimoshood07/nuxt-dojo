<template>
    <div>
        <h1>Product List</h1>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p" />
            </div>

        </div>
    </div>
</template>

<script setup>
useHead({
    title: "Dojo Nuxt | Products page"
})

definePageMeta({
    layout: "product"
})

// Fetch product
const { data: products } = await useFetch('https://fakestoreapi.com/products')

</script>

<style scoped></style>