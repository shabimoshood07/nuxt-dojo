<template>
    <Head>
        <Title>Nuxt Dojo | {{ product.title }}</Title>
        <Meta name="description" :content="product.description" />
    </Head>
    <div>
        <h1 class="text-4xl font-bold my-7">Product Details</h1>
        <div>
            <ProductDetails :product="product" />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "product"
})

const { id } = useRoute().params

const uri = 'https://fakestoreapi.com/products/' + id
const { data: product } = await useFetch(uri)
if (!product.value) throw createError({ statusCode: 404, statusMessage: 'No product found', fatal: true })


</script>

<style scoped></style>