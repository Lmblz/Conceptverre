<template>
    <NavBar />
    <router-view />
</template>

<script>
    import NavBar from './components/NavBar.vue';
    export default {
        name: 'AppVue',
        components: {
            NavBar,
        }
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





    #app { 

        h1 {
            font-family: $SilkReg;
            font-size: 7.5rem;
            margin: 0
        }

        h2 {
            font-family: $SilkReg;
            font-size: 3.125rem;
            margin: 0;
        }

        p, a, span, button, li {
            font-family: $DGMed;
            font-size: 2rem;
            margin: 0;
        }

        button {
            padding: 0.5rem 2rem 0.9rem 2rem;
            line-height: 1;
            cursor: pointer;

            &.btn-white {
                background: transparent;
                border: solid 1px white;
                text-transform: uppercase;
                color: white;
            }

            &.btn-black {
                background: transparent;
                border: solid 1px black;
                text-transform: uppercase;
                color: black;
            }
        }
    }
</style>
