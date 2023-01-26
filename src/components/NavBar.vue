<template>
    <nav class="nav">
        <div class="nav__menu-btn">
            <button class="nav__menu-btn__line"><span></span></button>
        </div>
        <div class="nav__logo">
            <router-link to="/"><img src="../assets/logo.svg"></router-link>
        </div>
        <div class="nav__cart">
            <router-link to="/panier"><img src="../assets/cart.png"></router-link>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'NavBarre'
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
</style>