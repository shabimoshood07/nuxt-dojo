<template>
    <div>
        <h1 class="font-bold my-6 text-3xl">About</h1>
        <p class="leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti animi ea dolore aut
            officiis impedit odio
            unde doloribus exercitationem incidunt, explicabo accusantium dignissimos voluptas fugiat perspiciatis, quos
            ratione fuga praesentium sit id modi, ex ducimus! Officia nostrum dicta libero veniam fuga? Sapiente eum nostrum
        </p>
        <p>{{ data }}</p>
    </div>
</template>

<script setup>
const { data } = await useFetch("/api/dynamic/1234gghjjkk")


// const { data } = await useFetch("/api/home?name=yazmine", {
//     method:"POST",
//     body:{name:"Moshood"}
// })
</script>

<style  scoped></style>