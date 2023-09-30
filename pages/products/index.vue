<template>
    <div>
        <h1>Product List</h1>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <p>{{ p.title }}</p>
            </div>

        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: "product"
})

// Fetch product
const { data: products } = await useFetch('https://fakestoreapi.com/products')

// const products = await $fetch('https://fakestoreapi.com/products').catch((error) => console.log(error.data))


</script>

<style scoped></style>