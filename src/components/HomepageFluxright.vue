<template>
    <div class="flux-right flux">
        <div class="flux__text-wrapper">
            <div class="flux__text-wrapper__separator"></div>
            <h2>Une <i>quintessence</i> lumineuse</h2>
            <p>
                Le verre est le pilier de nos créations. Nous avons choisi cette antique matière pour ses 
                jeux de transparence et de reflet, afin de <b>sublimer la lumière</b> et <b>habiller les espaces</b>
            </p>
            <router-link to="/notre-histoire">
                <button class="flux__text-wrapper__button btn-black">Découvrir l'atelier</button>
            </router-link>
        </div>
        <div class="flux__images-wrapper">
            <div class="flux__images-wrapper__left">    
                <div class="flux__images-wrapper__left__image square">
                    <source srcset="../assets/illu-5.webp" type="image/webp" />
                    <img src="../assets/illu-5.jpg" alt="Image d'illustration">
                </div>
                <div class="flux__images-wrapper__left__image large">
                    <source srcset="../assets/illu-6.webp" type="image/webp" />
                    <img src="../assets/illu-6.jpg" alt="Image d'illustration">
                </div>
            </div>
            <div class="flux__images-wrapper__right">
                <div class="flux__images-wrapper__right__image big">
                    <source srcset="../assets/illu-4.webp" type="image/webp" />
                    <img src="../assets/illu-4.jpg" alt="Image d'illustration">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomepageFluxright',
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

                &__image {
                    &.large {
                        padding-top: 1rem;
                    }
                    &.square {
                        text-align: right;

                        img {
                            width: 95%;
                        }
                    }
                }
            }
        }

        &__text-wrapper {
            width: 40%;
            padding: 0 4rem;
            height: fit-content;
            margin: auto;

            &__separator {
                height: 1px;
                width: 7.5rem;
                background: black;
            }

            h2 {
                margin-top: 3rem;
                margin-bottom: 2rem;
            }

            p {
                width: 75%;
                margin-bottom: 5rem;
                margin-top: 0;
            }
        }
    }
</style>