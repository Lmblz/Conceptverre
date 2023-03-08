<template>
    <div class="three-images-fw">
        <div class="three-images-fw__image">
            <picture>
                <source :srcset="threeImgLeft + '.webp'" type="image/webp" />
                <img :src="threeImgLeft + '.jpg'" alt="Blocs des finitions" />
            </picture>
        </div>
        <div class="three-images-fw__image">
            <picture>
                <source :srcset="threeImgCenter + '.webp'" type="image/webp" />
                <img :src="threeImgCenter + '.jpg'" alt="Blocs des finitions" />
            </picture>
        </div>
        <div class="three-images-fw__image">
            <picture>
                <source :srcset="threeImgRight + '.webp'" type="image/webp" />
                <img :src="threeImgRight + '.jpg'" alt="Blocs des finitions" />
            </picture>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThreeImagesFW",
    props: ["threeImgLeft", "threeImgCenter", "threeImgRight"],
};
</script>

<style lang="scss">
.three-images-fw {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    @media all and (max-width: 600px) {
        flex-direction: column;

        &__image {
            max-width: inherit !important;
        }
    }

    &__image {
        max-width: 33%;

        img {
            width: 100%;
        }
    }
}
</style>
