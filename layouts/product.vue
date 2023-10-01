<template>
    <header class="bg-white">
        <nav class="flex justify-between items-center w-[95%] max-w-6xl mx-auto py-4 ">
            <NuxtLink to="/">Nuxt Dojo</NuxtLink>
        </nav>
    </header>
    <div class="w-[95%] max-w-6xl mx-auto">
        <slot />
    </div>

    <footer class="border-t-2 py-4">
        <ul class="max-w-6xl mx-auto w-[95%]  flex justify-start items-center gap-4">
            <li>
                <NuxtLink to="/"> Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about"> About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/products"> Products</NuxtLink>
            </li>
        </ul>
    </footer>
</template>