<template>
    <header class="bg-white">
        <nav class="flex justify-between items-center w-[95%] max-w-6xl mx-auto py-4 ">
            <NuxtLink to="/">Nuxt Dojo</NuxtLink>

            <ul class="flex justify-between items-center gap-4">
                <li>
                    <NuxtLink to="/"> Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about"> About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/products" class="btn"> Products</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
    <div class="container mx-auto p-4">
        <slot />
    </div>
</template>