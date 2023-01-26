<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="footer__top__infos">
                <img src="../assets/logo.svg" />
                <h4>Atelier basé à Nice, France <br> Tous droits réservés</h4>
            </div>
            <div class="footer__top__separator"></div>
        </div>
        <div class="footer__bottom">
            <div class="footer__bottom__sitemap">
                <div class="footer__bottom__sitemap__title">
                    <h3>Plan du site</h3>
                </div>
                <div class="footer__bottom__sitemap__links">
                    <div class="footer__bottom__sitemap__links__left">
                        <router-link to="/">Accueil</router-link>
                        <router-link to="/">Contact</router-link>
                    </div>
                    <div class="footer__bottom__sitemap__links__right">
                        <router-link to="/">Boutique</router-link>
                        <router-link to="/">Mentions légales</router-link>
                    </div>
                </div>
            </div>
            <div class="footer__bottom__networks">
                <div class="footer__bottom__networks__title">
                    <h3>Réseaux sociaux</h3>
                </div>
                <div class="footer__bottom__networks__left">
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                </div>
                <div class="footer__bottom__networks__right">
                    <a href="#">Pinterest</a>
                    <a href="#">Youtube</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'MainFooter',
    }
</script>

<style scoped lang="scss">
    .footer {
        background: #1f1f1f;
        padding: 7.5rem;
        color: white;

        a {
            color: white;
            text-decoration: none;
        }

        &__top {
            display: flex;
            justify-content: space-between;

            &__infos {
                display: flex;

                img {
                    width: 3rem;
                }
            }

            &__separator {
                height: 1px;
                width: 7.5rem;
                background: white;
            }
        }
    }
</style>