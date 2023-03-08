<template>
    <div class="custom-video">
        <div class="custom-video__text">
            <h3 class="custom-video__text__title">
                <div class="custom-video__text__title__separator"></div>
                {{ title }} <i>{{ titleI }}</i>
            </h3>
            <p class="custom-video__text__paragraph">
                {{ paragraph }}
            </p>
        </div>
        <div class="custom-video__video">
            <iframe
                width="1250"
                height="703"
                src="https://www.youtube.com/embed/8zFqvfFkneQ"
                title="Personnalisation"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomVideo",
    props: ["title", "titleI", "paragraph"],
};
</script>

<style lang="scss">
.custom-video {
    display: flex;
    margin-top: 10rem;
    margin-bottom: 10rem;

    @media all and (max-width: 1300px) {
        flex-direction: column;
    }

    &__text {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        width: 45%;

        @media all and (max-width: 1300px) {
            width: inherit !important;
        }

        h3,
        p {
            max-width: 550px;
            margin: 1rem auto;
            width: 100%;
            padding: 0 1rem;
        }

        &__title {
            &__separator {
                margin-left: 2.5%;
                height: 1px;
                width: 7.5rem;
                background: black;
                margin-bottom: 2rem;
            }
        }
    }

    &__video {
        width: 55%;

        @media all and (max-width: 1300px) {
            width: 90%;
            margin: auto;
            text-align: center;
        }
        iframe {
            max-width: 930px;
            width: 100%;
            height: auto;
            aspect-ratio: 1920/1080;
        }
    }
}
</style>
