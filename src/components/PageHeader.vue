<template>
    <header class="header">
        <div class="header__background">
            <picture>
                <source :srcset="srcHeader + '.webp'" type="image/webp">
                <img :src="srcHeader + '.jpg'" alt="Header page" />
            </picture>
        </div>
        <div class="header__title-wrapper">
            <h2 class="header__title-wrapper__title">
                {{ titleHeader }}
            </h2>
            <div class="header__title-wrapper__separator"></div>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'PageHeader',
        props: [
            'srcHeader',
            'titleHeader',
        ]
    }
</script>

<style scoped lang="scss">
    .header {
        &__background {
            img {
                object-fit: cover;
                max-width: 100vw;
                width: 100%;
                height: 385px;
            }
        }
        &__title-wrapper {
            height: 9rem;
            background: white;
            width: fit-content;
            padding: 3rem 9rem;
            margin: auto;
            transform: translateY(-6rem);
            margin-bottom: -6rem;

            h2 {
                margin: 0;
                font-size: 5rem;
            }

            &__separator {
                height: 1px;
                width: 7.5rem;
                background: black;
                margin: auto;
                margin-top: 2rem;
            }
        }
    }
</style>