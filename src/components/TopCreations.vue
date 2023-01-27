<template>
    <div class="top-creations">
        <div class="top-creations__title-wrapper">
            <h2>Nos créations phares</h2>
            <div class="top-creations__title-wrapper__separator"></div>
        </div>
        <div class="top-creations__showcase">
            <div class="top-creations__showcase__creation">
                <picture>
                    <source srcset="../assets/lampe-1.webp" type="image/webp" />
                    <img src="../assets/lampe-1.jpg" alt="Lampe 1">
                </picture>
            </div>
            <div class="top-creations__showcase__creation">
                <picture>
                    <source srcset="../assets/lampe-2.webp" type="image/webp" />
                    <img src="../assets/lampe-2.jpg" alt="Lampe 2">
                </picture>
            </div>
            <div class="top-creations__showcase__creation">
                <picture>
                    <source srcset="../assets/lampe-3.webp" type="image/webp" />
                    <img src="../assets/lampe-3.jpg" alt="Lampe 3">
                </picture>
            </div>
        </div>
        <router-link to="/boutique">
            <button class="top-creations__button btn-black">Découvrir notre boutique</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'TopCreation',
    }
</script>

<style scoped lang="scss">
    .top-creations {
        position: relative;
        text-align: center;

        &::before {
            content: '';
            height: 9rem;
            width: 1px;
            background: white;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateY(-100%) translateX(-50%);
        }

        &__title-wrapper {
            height: 9rem;
            background: white;
            width: fit-content;
            padding: 3rem 9rem;
            margin: auto;

            h2 {
                margin: 0;
            }

            &__separator {
                height: 1px;
                width: 7.5rem;
                background: black;
                margin: auto;
                margin-top: 2rem;
            }
        }

        &__showcase {
            display: flex;
            max-width: 80rem;
            margin: auto;
            justify-content: space-between;
            margin-bottom: 6rem;
        }
    }
</style>