<template>
    <div>
        <h1>Product details {{ id }}</h1>
    </div>
</template>

<script setup>

const { id } = useRoute().params

</script>

<style scoped></style>