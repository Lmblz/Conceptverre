<template>
    <nav class="nav">
        <div class="nav__menu-btn">
            <button class="nav__menu-btn__line" @click="showMenu()"><span></span></button>
        </div>
        <div class="nav__logo">
            <router-link to="/"><img src="../assets/logo.svg"></router-link>
        </div>
        <div class="nav__cart">
            <router-link to="/panier"><img src="../assets/cart.png"></router-link>
        </div>
    </nav>
    <nav id="menu" class="menu closed">
        <div class="menu__wrapper">
            <div class="menu__wrapper__close">
                <button class="menu__wrapper__close__button" @click="showMenu()">
                    <img src="../assets/close-menu.svg" alt="close menu" />
                </button>
            </div>
            <div class="menu__wrapper__entries">
                <router-link to="/">
                    <p class="menu__wrapper__entries__entry home">Accueil</p>
                </router-link>
                <router-link to="/notre-histoire">
                    <p class="menu__wrapper__entries__entry">Notre histoire</p>
                    </router-link>
                <router-link to="/boutique">
                    <p class="menu__wrapper__entries__entry">Boutique</p>
                    </router-link>
                <router-link to="/sur-mesure">
                    <p class="menu__wrapper__entries__entry">Sur-mesure</p>
                    </router-link>
                <router-link to="/personnalisation">
                    <p class="menu__wrapper__entries__entry">Personnalisation</p>
                    </router-link>
                <router-link to="/galerie">
                    <p class="menu__wrapper__entries__entry">Galerie</p>
                    </router-link>
                <router-link to="/mon-espace">
                    <p class="menu__wrapper__entries__entry">Mon espace</p>
                    </router-link>
                <router-link to="/panier">
                    <p class="menu__wrapper__entries__entry">Panier</p>
                    </router-link>
                <router-link to="/contact">
                    <p class="menu__wrapper__entries__entry">Contact</p>
                    </router-link>
            </div>
            <div class="menu__wrapper__image">
                <img src="../assets/logo-small.svg" alt="Logo concept verre">
            </div>
        </div>
    </nav>
</template>

<script>
    import $ from 'jquery'
    export default {
        name: 'NavBarre',
        methods: {
            showMenu() {
                let menu = $('#menu')
                if(menu.hasClass('closed')) 
                {
                    menu.removeClass('closed')
                    $('body').addClass('no-scroll')
                    $('body').click((e) => { 
                        const menuDimensions = menu[0].getBoundingClientRect()
                        const clickedX = e.clientX
                        if (clickedX > menuDimensions.width) {
                            menu.addClass('closed')
                            $('body').removeClass('no-scroll')

                            return
                        }
                    })
                } 
                else 
                {
                    menu.addClass('closed')
                    $('body').removeClass('no-scroll')
                }
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="scss">
    .nav {
            position: absolute;
            top: 50px;
            display: flex;
            z-index: 10;
            max-width: 85%;
            width: 100%;
            color: white;
            justify-content: space-between;
            left: 50%;
            transform: translateX(-50%);
            align-items: center;

        &__menu-btn {
            &__line {
                width: 70px;
                height: 70px;
                background: transparent;
                border: solid 2px white;
                position: relative;

                span {
                    background: white;
                    display: block;
                    width: 25px;
                    height: 2px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);

                    &::before, &::after {
                        content: '';
                        position: absolute;
                        width: 25px;
                        height: 2px;
                        background: white;
                        left: 50%;
                        transform: translateX(-50%);
                    }

                    &::before {
                        top: -10px;
                    }

                    &::after {
                        top: 10px;
                    }
                }
            }
        }
    }

    .menu {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 15;
        background: white;
        min-height: 100vh;
        height: 100%;
        max-width: 30rem;
        width: 100%;
        text-align: center;
        transition: all .5s;

        &.closed {
            transform: translateX(-100%);
        }

        &__wrapper {
            display: flex;
            height: calc(100% - 8rem);
            flex-direction: column;
            justify-content: space-between;
            padding: 4rem 0;

            &__close {
                &__button {
                    background: transparent;
                    border: 0;
                }
            }

            &__entries {
                a {
                    color: inherit;
                    text-decoration: none;
                }
                &__entry {
                    margin: 1rem 0;
                }
            }
        }
    }
</style>