<template>
    <header>
        <nav>
            <NuxtLink to="/">Nuxt Dojo</NuxtLink>

        </nav>
    </header>
    <div>
        <slot />
    </div>

    <footer>
        <nav>
            <ul>
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
        </nav>
    </footer>
</template>