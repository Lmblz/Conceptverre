<template>
    <div class="flux-left flux">
        <div class="flux__images-wrapper">
            <div class="flux__images-wrapper__left">
                <div class="flux__images-wrapper__left__image big">
                    <source srcset="../assets/illu-1.webp" type="image/webp" />
                    <img src="../assets/illu-1.jpg" alt="Image d'illustration">
                </div>
            </div>
            <div class="flux__images-wrapper__right">
                <div class="flux__images-wrapper__right__image square">
                    <source srcset="../assets/illu-2.webp" type="image/webp" />
                    <img src="../assets/illu-2.jpg" alt="Image d'illustration">
                </div>
                <div class="flux__images-wrapper__right__image large">
                    <source srcset="../assets/illu-3.webp" type="image/webp" />
                    <img src="../assets/illu-3.jpg" alt="Image d'illustration">
                </div>
            </div>
        </div>
        <div class="flux__text-wrapper">
            <div class="flux__text-wrapper__separator"></div>
            <h2>Votre luminaire <i>sur-mesure</i></h2>
            <p>
                Chacune de nos productions est unique, faite à la main dans notre atelier. <br>
                Vous ne trouvez pas la création qui fera briller votre intérieur ? Créez-la.
            </p>
            <router-link to="/personnalisation">
                <button class="flux__text-wrapper__button btn-black">Personnaliser ma lampe</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomepageFluxleft',
    }
</script>

<style lang="scss" scoped>
    .flux {
        display: flex;
        margin-top: 10rem;

        &__images-wrapper {
            display: flex;
            gap: 1rem;
            width: 60%;

            img {
                width: 100%
            }

            &__left {
                padding-top: 1rem;
            }

            &__right {
                &__image {
                    &.large {
                        padding-top: 1rem;
                    }
                    &.square {
                        img {
                            width: 95%;
                        }
                    }
                }
            }
        }

        &__text-wrapper {
            width: 40%;
            text-align: right;
            padding: 0 4rem;
            height: fit-content;
            margin: auto;

            &__separator {
                height: 1px;
                width: 7.5rem;
                background: black;
                float: right;
            }

            h2 {
                margin-top: 3rem;
                margin-bottom: 2rem;
            }

            p {
                width: 70%;
                float: right;
                margin-bottom: 5rem;
                margin-top: 0;
            }
        }
    }
</style>