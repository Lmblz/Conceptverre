<template>
    <div class="stairs-images">
        <div class="stairs-images__wrapper-images">
            <div class="stairs-images__wrapper-images__image left">
                <picture>
                    <source :srcset="srcImageLeft + '.webp'" />
                    <img :src="srcImageLeft + '.jpg'" alt="" />
                </picture>
            </div>
            <div class="stairs-images__wrapper-images__image center">
                <picture>
                    <source :srcset="srcImageCenter + '.webp'" />
                    <img :src="srcImageCenter + '.jpg'" alt="" />
                </picture>
            </div>
            <div class="stairs-images__wrapper-images__image right">
                <picture>
                    <source :srcset="srcImageRight + '.webp'" />
                    <img :src="srcImageRight + '.jpg'" alt="" />
                </picture>
            </div>
        </div>
        <div class="stairs-images__wrapper-text">
            <h3 class="stairs-images__wrapper-text__title">
                {{ stairsTitle }} <i> {{ stairsTitleI }}</i>
            </h3>
            <div class="stairs-images__wrapper-text__separator"></div>
            <p class="stairs-images__wrapper-text__p">
                {{ stairsP }}
            </p>
            <router-link :to="stairsBtnLink">
                <button class="stairs-images__wrapper-text__button btn-black">
                    {{ stairsBtn }}
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "StairsImages",
    props: [
        "srcImageLeft",
        "srcImageCenter",
        "srcImageRight",
        "stairsTitle",
        "stairsTitleI",
        "stairsP",
        "stairsBtn",
        "stairsBtnLink",
    ],
};
</script>

<style lang="scss" scoped>
.stairs-images {
    &__wrapper-images {
        display: flex;
        gap: 1rem;
        margin-bottom: 6rem;

        &__image {
            &.left {
                transform: translateY(1rem);
            }

            &.right {
                transform: translateY(-1rem);
            }
            img {
                width: 100%;
            }
        }
    }
    &__wrapper-text {
        &__title {
            margin: 0;
            padding: 0 0.5rem;
        }

        &__separator {
            height: 1px;
            width: 7.5rem;
            background: black;
            margin: auto;
            margin-top: 2rem;
        }

        &__p {
            max-width: 64rem;
            padding: 0 2rem;
            margin: 3rem auto;
        }
    }
}
</style>
