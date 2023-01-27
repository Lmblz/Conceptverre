<template>
    <div class="finitions-blocs">
        <div class="finitions-blocs__wrapper left">
            <div class="finitions-blocs__wrapper__image">
                <picture>
                    <source :srcset="finitionsImgLeft + '.webp'" type="image/webp" />
                    <img :src="finitionsImgLeft" alt="Blocs des finitions">
                </picture>
            </div>
            <div class="finitions-blocs__wrapper__description">
                <h3 class="finitions-blocs__wrapper__description__title">{{ finitionsTitleLeft }}</h3>
                <p class="finitions-blocs__wrapper__description__p">{{ finitionsPLeft }}</p>
            </div>
        </div>
        <div class="finitions-blocs__wrapper center">
            <div class="finitions-blocs__wrapper__image">
                <picture>
                    <source :srcset="finitionsImgCenter + '.webp'" type="image/webp" />
                    <img :src="finitionsImgCenter" alt="Blocs des finitions">
                </picture>
            </div>
            <div class="finitions-blocs__wrapper__description">
                <h3 class="finitions-blocs__wrapper__description__title">{{ finitionsTitleCenter }}</h3>
                <p class="finitions-blocs__wrapper__description__p">{{ finitionsPCenter }}</p>
            </div>
        </div>
        <div class="finitions-blocs__wrapper right">
            <div class="finitions-blocs__wrapper__image">
                <picture>
                    <source :srcset="finitionsImgRight + '.webp'" type="image/webp" />
                    <img :src="finitionsImgRight" alt="Blocs des finitions">
                </picture>
            </div>
            <div class="finitions-blocs__wrapper__description">
                <h3 class="finitions-blocs__wrapper__description__title">{{ finitionsTitleRight }}</h3>
                <p class="finitions-blocs__wrapper__description__p">{{ finitionsPRight }}</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'FinitionsBlocs',
        props: [
            'finitionsImgLeft',
            'finitionsTitleLeft',
            'finitionsPLeft',
            'finitionsImgCenter',
            'finitionsTitleCenter',
            'finitionsPCenter',
            'finitionsImgRight',
            'finitionsTitleRight',
            'finitionsPRight'
        ]
    }
</script>

<style scpoed lang="scss">
    .finitions-blocs {
        display: flex;
        gap: 5rem;
        max-width: 90rem;
        padding: 0 2rem;
        margin-left: auto;
        margin-right: auto;

        &__wrapper {
            width: 100%;

            &__image {
                img {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                    max-width: 100%;
                }
            }
            
            &__description {
                &__title {
                    font-size: 1.75rem !important;
                    margin-bottom: 1rem;
                    font-weight: lighter;
                }

                &__p {
                    text-align: justify;
                }
            }
        }
    }
</style>