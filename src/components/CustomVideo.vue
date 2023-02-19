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
            <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CustomVideo',
        props: [
            'title',
            'titleI',
            'paragraph'
        ]
    }
</script>

<style lang="scss">
    .custom-video {
        display: flex;
        margin-top: 10rem;
        margin-bottom: 10rem;

        &__text {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            justify-content: center;
            width: 45%;

            h3, p {
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
            video {
                max-width: 930px;
                width: 100%;
            }
        }
    }
</style>