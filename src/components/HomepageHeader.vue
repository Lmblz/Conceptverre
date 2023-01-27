<template>
    <header class="header-homepage">
        <picture class="header-homepage__background">
            <source srcset="../assets/homepage/header.webp" type="image/webp" />
            <img src="../assets/homepage/header.jpg" />
        </picture>
        <div class="header-homepage__description">
            <h1>Donnez <i>vie</i> à votre <i>intérieur</i></h1>
            <p class="subtitle"><b>Concept Verre</b> voit le jour en 2007, quintessence d'un travail passionnant et passionné.</p>
            <p class="subtitle">Dans notre atelier basé à Nice, nous concevons des <b>luminaires d'intérieur au design épuré</b></p>
            <router-link to="/">
                <button class="header-homepage__description__button btn-white">Découvrir</button>
            </router-link>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HomepageHeader'
    }
</script>

<style lang="scss" scoped>
    #app {
        .header-homepage {
            position: relative;
            text-align: center;

            &__background {
                height: auto;
                width: auto;
                display: block;

                img {
                    object-fit: cover;
                    height: 115vh;
                    width: 100%;
                }   
            }
            &__description {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                color: white;
                width: 100%;

                p {
                    margin: 0;
                }
                
                &__button {
                    margin-top: 5rem;
                }
            }
        }
    }
</style>