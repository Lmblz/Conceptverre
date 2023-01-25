<template>
    <nav>
        <div class="nav__menu-btn">
            <span class="nav__menu-btn__line">A</span>
        </div>
        <div class="nav__logo">
            <router-link to="/">Home</router-link>
        </div>
        <div class="nav__cart">
            <router-link to="/panier">Panier</router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBarre'
    }
</script>