<template>
    <NavBar />
    <router-view />
    <MainFooter />
</template>

<script>
    import NavBar from './components/NavBar.vue';
    import MainFooter from './components/MainFooter.vue';
    export default {
        name: 'AppVue',
        components: {
            NavBar,
            MainFooter
        },
    }
</script>

<style lang="scss">
    body {
        margin: 0;
    }

    @font-face {
        font-family: 'Silk Serif Regular Italic';
        src: url('./assets/fonts/Silk_Serif_Regular_Italic.otf') format('opentype');
    }
    $SilkRegIt : 'Silk Serif Regular Italic', Arial, Helvetica, sans-serif;

    @font-face {
        font-family: 'Silk Serif Regular';
        src: url('./assets/fonts/Silk_Serif_Regular.otf') format('opentype');
    }
    $SilkReg : 'Silk Serif Regular', Arial, Helvetica, sans-serif;

    @font-face {
        font-family: 'Darker Grotesque Medium';
        src: url('./assets/fonts/DarkerGrotesque-Medium.ttf') format('truetype');
    }
    $DGMed: 'Darker Grotesque Medium', Arial, Helvetica, sans-serif;

    @font-face {
        font-family: 'Darker Grotesque Light';
        src: url('./assets/fonts/DarkerGrotesque-Light.ttf') format('truetype');
    }
    $DGLight: 'Darker Grotesque Light', Arial, Helvetica, sans-serif;

    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }

    body {
        overflow-x: hidden;
    }

    #app { 

        scroll-behavior: smooth;

        h1 {
            font-family: $SilkReg;
            font-size: 7vw;
            margin: 0;
            padding: 0 20px;

            @media screen and (max-width: 1024px) {
                font-size: 4.25rem;
                line-height: 1;
            }

            @media screen and (min-width: 1901px) {
                font-size: 8rem;
            }
        }

        h2 {
            font-family: $SilkReg;
            font-size: 3.125rem;

            @media screen and (max-width: 1024px) {
                font-size: 2.5rem;
                line-height: 1;
            }
            
            span {
                font-family: $SilkReg;
                font-size: 3.125rem;

                @media screen and (max-width: 1024px) {
                    font-size: 2.5rem;
                    line-height: 1;
                }
            }
        }

        h3 {
            font-family: $SilkReg;
            font-size: 3.125rem;

            @media screen and (max-width: 1024px) {
                font-size: 2.5rem;
            }
        }

        h4 {
            font-family: $DGLight;
            font-size: 1.5rem;
            text-transform: uppercase;
        }

        p:not(.subtitle), a, span, button, li {
            font-family: $DGMed;
            font-size: 1.625rem;
            //margin: 0;

            @media screen and (max-width: 1024px) {
                font-size: 1.25rem;
            }
        }

        p.subtitle {
            font-size: 2rem;
            font-family: $DGMed;

            @media screen and (max-width: 1024px) {
                font-size: 1.25rem;
            }
        }

        button {
            padding: 0.5rem 2rem 0.9rem 2rem;
            line-height: 1;
            cursor: pointer;
            position: relative;
            transition: all .5s;

            &:not(.nav__menu-btn__line, .menu__wrapper__close__button) {
                &::before {
                    content: '';
                    height: 10px;
                    width: 10px;
                    position: absolute;
                    left: 0;
                    top: 50%;
                    opacity: 0;
                    transform: translateY(-50%) rotate(45deg);
                    transition: all .5s;
                }

                &:hover {
                    padding-left: 3rem;

                    &::before {
                        opacity: 1;
                        transform: translateY(-50%) translateX(1rem) rotate(45deg);
                    }
                }
            }

            &.btn-white {
                background: transparent;
                border: solid 1px white;
                text-transform: uppercase;
                color: white;

                &::before {
                    border-right: solid 1px white;
                    border-top: solid 1px white;
                }
            }

            &.btn-black {
                background: transparent;
                border: solid 1px black;
                text-transform: uppercase;
                color: black;

                &::before {
                    border-right: solid 1px black;
                    border-top: solid 1px black;
                }
            }
        }

        &::before {
            transition: all .5s;
            display: none;
            opacity: 0;
            content: '';
            position: absolute;
            top: 0;
            height: 200vh;
            left: 0;
            width: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 11;
        }
    }
</style>
