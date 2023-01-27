<template>
    <div class="tagline">
        <h2 class="tagline__title">
            <span class="tagline__title__first">Notre <i>verre</i> est</span> <br>
            <span class="tagline__title__second">fait pour <i>briller</i></span>
        </h2>
        <div class="tagline__separator"></div>
        <router-link to="/contact">
            <button class="tagline__buton btn-black">Nous contacter</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'HomepageTagline',
    }
</script>

<style scoped lang="scss">
    .tagline {
        margin-top: 10rem;
        text-align: center;

        &__title {
            text-align: center;
            text-transform: uppercase;
            line-height: 1;
            margin: 0;
            
            &__first {
                margin-left: -5rem;
            }

            &__second {
                margin-right: -5rem;
            }
        }

        &__separator {
            height: 7.5rem;
            width: 1px;
            background: black;
            margin: 2rem auto;
        }
    }
</style>